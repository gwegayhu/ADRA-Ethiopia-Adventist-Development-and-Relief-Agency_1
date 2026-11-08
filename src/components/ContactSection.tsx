import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [category, setCategory] = useState('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 adra-section-texture border-b border-emerald-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-2 font-sans">
            <span className="inline-block w-2 h-0.5 bg-[#f59e0b]" />
            <span>{currentLang === 'en' ? 'Get In Touch' : 'አድራሻ እና ግንኙነት'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f0101] tracking-tight font-editorial">
            {currentLang === 'en' ? 'Contact ADRA Ethiopia' : 'ከአድራ ኢትዮጵያ ጋር ይገናኙ'}
          </h2>
          <p className="mt-3 text-base text-[#0c6639] leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'Whether exploring programmatic partnerships, institutional donor co-financing, media inquiries, or visiting our Addis Ababa headquarters, our national coordination team is at your disposal.'
              : 'ለልማት አጋርነት፣ ለእርዳታ ጥያቄዎች ወይም ለጠቅላላ መረጃ በአዲስ አበባ የሚገኘውን ዋና መስሪያ ቤታችንን ወይም የክልል ቢሮዎቻችንን ያነጋግሩ።'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details & Field Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* National HQ Card */}
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-display">National Headquarters</h3>
                  <div className="text-xs text-stone-700 font-medium">Addis Ababa Coordination Office</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-800 pt-2 border-t border-stone-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Ras Desta Damtew Rd, Addis Ababa Ethiopia</div>
                    <div className="text-stone-700 text-xs font-medium">Kirkos Sub-City · Adjacent to Ethiopian Union Compound · P.O. Box 145</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span className="font-semibold text-stone-800">+251-115-512212</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0" />
                  <a href="mailto:info@adraethiopia.org" className="font-bold hover:text-emerald-950 text-emerald-900 underline">
                    info@adraethiopia.org
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span className="text-stone-800 font-medium">Monday – Thursday: 8:30 AM – 5:30 PM · Friday: 8:30 AM – 1:30 PM</span>
                </div>

                <div className="text-[11px] text-emerald-800 bg-emerald-50 rounded-md px-2.5 py-1 font-semibold border border-emerald-200/80">
                  Registered Non-Profit NGO · Certificate No. 2049
                </div>
              </div>
            </div>

            {/* Regional Field Hubs Quick Reference */}
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                Regional Coordination Field Hubs
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-medium">
                <div>
                  <div className="font-bold text-stone-900">Somali Region</div>
                  <div>Gode & Kelafo Field Bases</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Oromia Region</div>
                  <div>Adama & East Hararghe Bases</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Sidama Region</div>
                  <div>Hawassa Project Sub-Office</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Tigray & Amhara</div>
                  <div>Mekelle & Dessie Project Hubs</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="text-xl font-bold text-stone-900 font-display mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-800" />
              <span>Send an Official Communication</span>
            </h3>
            <p className="text-xs text-stone-700 font-medium mb-6">
              Our country office communications team responds to verified inquiries within 24–48 business hours.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950 font-display">Communication Logged</h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, {name || 'Partner'}. Your inquiry regarding {category} has been routed to the appropriate department at ADRA Ethiopia Headquarters.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Category Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="general">General Inquiry & Information</option>
                    <option value="partnership">Institutional Partnership & Donor Funding</option>
                    <option value="procurement">Procurement & Tender Clarification</option>
                    <option value="careers">Careers & Human Resources</option>
                    <option value="media">Media, Press & Documentary Requests</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-800 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Almaz Bekele"
                      className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="almaz@organization.et"
                      className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+251 9..."
                    className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">Detailed Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your proposal, tender query, or message..."
                    className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-none text-stone-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
