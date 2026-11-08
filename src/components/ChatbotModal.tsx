import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ExternalLink, 
  CornerDownLeft, 
  HelpCircle,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { findRelevantAnswers, ChatKnowledgeItem, WEBSITE_KNOWLEDGE } from '../data/websiteContent';
import { Language } from '../types';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  sourceItem?: ChatKnowledgeItem;
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onNavigateToSection: (sectionId: string) => void;
  onOpenDonate: (presetSector?: string) => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onNavigateToSection,
  onOpenDonate,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: currentLang === 'en'
        ? 'Hello! I am the ADRA Ethiopia Humanitarian AI Assistant. I can answer questions about our six areas of work, regional operations across Ethiopia, history since 1982, AI for Good principles, or how to donate via TeleBirr and CBE Birr. How can I help you today?'
        : 'ሰላም! እኔ የአድራ ኢትዮጵያ የሰብአዊ እርዳታ AI ረዳት ነኝ። ስለ ስድስቱ የስራ ዘርፎች፣ የክልል ስራዎች፣ ከ1982 ዓ.ም ጀምሮ ስላለው ታሪካችን፣ ስለ ቴክኖሎጂ መርሆዎቻችን ወይም በቴሌብር እና በንግድ ባንክ እንዴት መለገስ እንደሚችሉ ጥያቄዎችን መመለስ እችላለሁ። ምን ላግዝዎት?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: currentLang === 'en' ? 'How to donate via TeleBirr or CBE?' : 'በቴሌብርና ንግድ ባንክ እንዴት ይለገሳል?', query: 'How to donate via TeleBirr or CBE Birr?' },
    { label: currentLang === 'en' ? 'What are the 6 AI principles?' : '6ቱ የቴክኖሎጂ መርሆዎች ምንድናቸው?', query: 'What are the six principles of AI for Good at ADRA Ethiopia?' },
    { label: currentLang === 'en' ? 'Where do you work in Somali region?' : 'በሶማሌ ክልል የት ነው የምትሰሩት?', query: 'Tell me about ADRA work in Somali Region and Kelafo.' },
    { label: currentLang === 'en' ? 'Tell me about clean water & WASH' : 'ስለ ንጹህ ውሃ (WASH) ንገረኝ', query: 'What does ADRA Ethiopia do for clean water and solar boreholes?' },
    { label: currentLang === 'en' ? 'History of ADRA since 1982' : 'የአድራ ታሪክ ከ1982 ጀምሮ', query: 'What is ADRA Ethiopia history since 1982 drought?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      // Analyze grounded query against website knowledge base
      const isAmharic = /[\u1200-\u137F]/.test(query);
      const results = findRelevantAnswers(query, isAmharic ? 'am' : 'en');

      let replyText = '';
      let sourceItem: ChatKnowledgeItem | undefined = undefined;

      if (results.length > 0) {
        sourceItem = results[0].item;
        replyText = isAmharic ? sourceItem.contentAm : sourceItem.content;
      } else {
        replyText = isAmharic
          ? 'ጥያቄዎ በአድራ ኢትዮጵያ የድረ-ገጽ መረጃ ውስጥ ተፈልጓል። ስለ 6ቱ የልማት ዘርፎች (WASH፣ ትምህርት፣ የምግብ ዋስትና፣ ጤና፣ አደጋ ጊዜ፣ TVET)፣ የክልል ስራዎቻችን፣ ወይም በቴሌብር/CBE ስለመለገስ ተጨማሪ መጠየቅ ይችላሉ።'
          : 'Thank you for your question. Based on ADRA Ethiopia\'s official documentation, we operate across six core pillars (WASH, Education, Food Security, Emergency Management, Health, and Green Energy TVET) across 8 Ethiopian regions. You can also ask specifically about our history since 1982, leadership, or how to donate via TeleBirr (Merchant: 251911) or CBE Birr.';
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sourceItem
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full h-[600px] max-h-[90vh] shadow-2xl border border-stone-200 flex flex-col overflow-hidden relative">
        
        {/* Chatbot Header */}
        <div className="p-4 bg-[#073826] text-white flex items-center justify-between shrink-0 border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#006643] border border-emerald-500/30 flex items-center justify-center text-white shadow-xs">
              <Bot className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm tracking-wide font-sans">
                  ADRA Ethiopia AI Assistant
                </h3>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full font-medium">
                  Verified Data
                </span>
              </div>
              <p className="text-[11px] text-stone-300">
                Grounded in all website sections & humanitarian records
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-emerald-900/60 transition-colors"
            aria-label="Close Chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-stone-800 text-white'
                    : 'bg-[#006643] text-amber-400'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[82%] space-y-2`}>
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs font-sans ${
                    msg.sender === 'user'
                      ? 'bg-[#006643] text-white rounded-tr-xs'
                      : 'bg-white text-stone-800 border border-stone-200/90 rounded-tl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* Grounded Information Source Citation & Direct Link */}
                {msg.sourceItem && (
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500 pl-1">
                    <span className="font-semibold text-[#006643] flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>Source: {msg.sourceItem.sourceSection}</span>
                    </span>
                    <span>·</span>
                    <button
                      onClick={() => {
                        onClose();
                        if (msg.sourceItem?.sourceSection.includes('Donate')) {
                          onOpenDonate();
                        } else {
                          onNavigateToSection(msg.sourceItem?.sourceLink.replace('#', '') || '');
                        }
                      }}
                      className="text-[#006643] hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>Jump to section</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                )}

                <div
                  className={`text-[10px] text-stone-400 px-1 ${
                    msg.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-stone-500 pl-9">
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce [animation-delay:0.4s]" />
              <span className="text-[11px] ml-1">Searching official ADRA records...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="px-4 py-2 bg-stone-100 border-t border-stone-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
            Suggested:
          </span>
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(qp.query)}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 bg-white hover:bg-emerald-50 hover:text-[#006643] border border-stone-200 rounded-full font-medium text-stone-700 transition-colors shrink-0 cursor-pointer"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-stone-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={currentLang === 'en' ? "Ask about programs, regions, history, or donation..." : "ስለ ፕሮግራሞች፣ ክልሎች፣ ታሪክ ወይም እርዳታ ይጠይቁ..."}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006643] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-[#006643] hover:bg-[#073826] disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer shadow-2xs"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[10px] text-stone-400 text-center mt-1.5">
            Complies with ADRA Ethiopia AI for Good Principles (Human oversight & community privacy)
          </div>
        </div>

      </div>
    </div>
  );
};
