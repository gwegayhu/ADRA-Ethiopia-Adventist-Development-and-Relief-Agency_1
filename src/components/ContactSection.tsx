import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';

interface ContactSectionProps {
  currentLang: Language;
}

type InquiryKey = 'general' | 'partnership' | 'procurement' | 'careers' | 'media';

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const cCopy = (UI_COPY[currentLang] || UI_COPY.en).contact;

  const [category, setCategory] = useState<InquiryKey>('general');
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

  const categoryLabel = cCopy.inquiries[category] || cCopy.inquiries.general;

  return (
    <section id="contact" className="py-16 sm:py-24 adra-section-texture border-b border-emerald-800/50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b] mb-2 font-sans">
            <span className="inline-block w-2 h-0.5 bg-[#f59e0b]" />
            <span>{cCopy.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-sans">
            {cCopy.title}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-serif">
            {cCopy.subtitle}
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
                  <h3 className="text-base font-bold text-stone-900 font-display">{cCopy.hqTitle}</h3>
                  <div className="text-xs text-stone-700 font-medium">{cCopy.hqSub}</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-800 pt-2 border-t border-stone-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">{cCopy.addressMain}</div>
                    <div className="text-stone-700 text-xs font-medium">{cCopy.addressSub}</div>
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
                  <span className="text-stone-800 font-medium">{cCopy.hoursText}</span>
                </div>

                <div className="text-[11px] text-emerald-800 bg-emerald-50 rounded-md px-2.5 py-1 font-semibold border border-emerald-200/80">
                  {cCopy.registeredBadge}
                </div>
              </div>
            </div>

            {/* Regional Field Hubs Quick Reference */}
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                {cCopy.hubsTitle}
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-medium">
                <div>
                  <div className="font-bold text-stone-900">{cCopy.hubs.somaliTitle}</div>
                  <div>{cCopy.hubs.somaliSub}</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">{cCopy.hubs.oromiaTitle}</div>
                  <div>{cCopy.hubs.oromiaSub}</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">{cCopy.hubs.sidamaTitle}</div>
                  <div>{cCopy.hubs.sidamaSub}</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900">{cCopy.hubs.tigrayAmharaTitle}</div>
                  <div>{cCopy.hubs.tigrayAmharaSub}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="text-xl font-bold text-stone-900 font-display mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-800" />
              <span>{cCopy.formTitle}</span>
            </h3>
            <p className="text-xs text-stone-700 font-medium mb-6">
              {cCopy.formSub}
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950 font-display">{cCopy.sentTitle}</h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  {cCopy.sentBodyTemplate
                    .replace('{name}', name || cCopy.partnerDefault)
                    .replace('{category}', categoryLabel)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Category Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                    {cCopy.inquiryLabel}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as InquiryKey)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="general">{cCopy.inquiries.general}</option>
                    <option value="partnership">{cCopy.inquiries.partnership}</option>
                    <option value="procurement">{cCopy.inquiries.procurement}</option>
                    <option value="careers">{cCopy.inquiries.careers}</option>
                    <option value="media">{cCopy.inquiries.media}</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-800 mb-1">{cCopy.fullNameLabel}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={cCopy.fullNamePlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-800 mb-1">{cCopy.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={cCopy.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">{cCopy.phoneLabel}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={cCopy.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">{cCopy.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={cCopy.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-none text-stone-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{cCopy.submitBtn}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
