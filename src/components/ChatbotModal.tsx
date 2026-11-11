import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import {
  findRelevantAnswers,
  getLocalizedKnowledgeItem,
  ChatKnowledgeItem
} from '../data/websiteContent';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';

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

function detectReplyLanguage(query: string, uiLang: Language): Language {
  const qLower = query.toLowerCase();
  if (/[\u1200-\u137F]/.test(query)) {
    const tigrinyaCues = [
      'እንታይ', 'ብዛዕባ', 'ኣድራ', 'ኣብ ', 'ክልል', 'ስራሕ', 'ጽሩይ', 'ማይ',
      'ታሪኽ', 'መትከላት', 'ምልጋስ', 'ሕጂ', 'ክንደይ', 'ከመይ', 'ኣሎ', 'እዩ', 'ናይ'
    ];
    const amharicCues = [
      'ምንድን', 'እንዴት', 'ነው', 'ታሪክ', 'ውሃ', 'ይለግሱ', 'መለገስ', 'ስለ ', 'የት ', 'አድራ', 'ንጹህ', 'ምን '
    ];
    const hasTi = tigrinyaCues.some((cue) => query.includes(cue));
    const hasAm = amharicCues.some((cue) => query.includes(cue));
    if (hasTi && !hasAm) return 'ti';
    if (hasAm && !hasTi) return 'am';
    return uiLang === 'ti' ? 'ti' : 'am';
  }

  const oromoCues = [
    'maal', 'akkam', 'eessa', "waa'ee", 'waaʼee', 'seenaa', 'bishaan',
    'somaalee', 'oromiyaa', 'gargaar', 'kennaa', 'seera', 'hojii', 'naannoo',
    'itoophiyaa', 'qajeeltoo', 'dandeessu', 'gaafadhu', 'cbe', 'tiin'
  ];
  if (oromoCues.some((cue) => qLower.includes(cue))) {
    return 'om';
  }

  return uiLang;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onNavigateToSection,
  onOpenDonate,
}) => {
  const chatCopy = (UI_COPY[currentLang] || UI_COPY.en).chatbot;

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'bot',
      text: chatCopy.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) => (m.id === 'welcome' ? { ...m, text: chatCopy.welcome } : m))
    );
  }, [chatCopy.welcome]);

  const quickPrompts = [
    { label: chatCopy.prompts.donate, query: chatCopy.prompts.donate },
    { label: chatCopy.prompts.ai, query: chatCopy.prompts.ai },
    { label: chatCopy.prompts.somali, query: chatCopy.prompts.somali },
    { label: chatCopy.prompts.wash, query: chatCopy.prompts.wash },
    { label: chatCopy.prompts.history, query: chatCopy.prompts.history },
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
      const replyLang = detectReplyLanguage(query, currentLang);
      const results = findRelevantAnswers(query, replyLang);

      let replyText = '';
      let sourceItem: ChatKnowledgeItem | undefined = undefined;

      if (results.length > 0) {
        sourceItem = results[0].item;
        replyText = getLocalizedKnowledgeItem(sourceItem, replyLang).content;
      } else {
        replyText = (UI_COPY[replyLang] || UI_COPY.en).chatbot.fallbackReply;
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
                  ADRA AI
                </h3>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full font-medium">
                  {chatCopy.verifiedBadge}
                </span>
              </div>
              <p className="text-[11px] text-stone-300">
                {chatCopy.headerSub}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-emerald-900/60 transition-colors cursor-pointer"
            aria-label={chatCopy.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
          {messages.map((msg) => {
            const locSource = msg.sourceItem
              ? getLocalizedKnowledgeItem(msg.sourceItem, currentLang)
              : null;

            return (
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

                <div className="max-w-[82%] space-y-2">
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
                  {msg.sourceItem && locSource && (
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500 pl-1">
                      <span className="font-semibold text-[#006643] flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{chatCopy.sourcePrefix} {locSource.sourceSection}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <button
                        onClick={() => {
                          onClose();
                          if (msg.sourceItem?.sourceLink === '#donate') {
                            onOpenDonate();
                          } else {
                            onNavigateToSection(msg.sourceItem?.sourceLink.replace('#', '') || '');
                          }
                        }}
                        className="text-[#006643] hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>{chatCopy.jumpToSection}</span>
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
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-stone-500 pl-9">
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#006643] animate-bounce [animation-delay:0.4s]" />
              <span className="text-[11px] ml-1">{chatCopy.searchingText}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="px-4 py-2 bg-stone-100 border-t border-stone-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
            {chatCopy.suggestedLabel}
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
              placeholder={chatCopy.placeholder}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006643] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 bg-[#006643] hover:bg-[#073826] disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer shadow-2xs"
              aria-label={chatCopy.sendAria}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[10px] text-stone-400 text-center mt-1.5">
            {chatCopy.footerNote}
          </div>
        </div>

      </div>
    </div>
  );
};
