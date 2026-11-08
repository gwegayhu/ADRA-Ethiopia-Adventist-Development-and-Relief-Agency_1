import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Clock, 
  MapPin, 
  Download, 
  ChevronRight, 
  CheckCircle, 
  X, 
  Send,
  AlertCircle
} from 'lucide-react';
import { Opportunity, Publication, Language } from '../types';
import { OPPORTUNITIES, PUBLICATIONS } from '../data/adraData';

interface TendersAndCareersProps {
  currentLang: Language;
}

export const TendersAndCareers: React.FC<TendersAndCareersProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'tenders' | 'careers' | 'publications'>('tenders');
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const tenders = OPPORTUNITIES.filter((o) => o.type === 'tender');
  const careers = OPPORTUNITIES.filter((o) => o.type === 'career');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setSelectedOpp(null);
      setApplicantName('');
      setApplicantEmail('');
    }, 2800);
  };

  return (
    <section id="work-with-us" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Banner matching style of Where We Work and AI for Good */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_ethiopia_market_1792616573603.jpg"
            alt="Work with Us"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            Home &gt; Work with Us
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
              PARTNERSHIPS, CAREERS &amp; TENDERS · WORK WITH US
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-3xl">
            {currentLang === 'en' 
              ? 'Tenders, Careers & Publications' 
              : currentLang === 'am' 
              ? 'የስራ እድሎች፣ ክፍት ጨረታዎች እና ህትመቶች' 
              : currentLang === 'om'
              ? 'Caalbaasiiwwan, Carraawwan Hojii fi Maxxansawwan'
              : 'ጨረታታት፣ ናይ ስራሕ ዕድላትን ሕትመታትን'}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'In accordance with our commitment to open governance and meritocratic hiring, all active tenders, RFP dossiers, professional vacancies, and audited publications are publicly accessible.'
              : currentLang === 'am'
              ? 'አድራ ኢትዮጵያ ለግልጽነት ባለው ቁርጠኝነት መሰረት ሁሉንም ክፍት ጨረታዎችን፣ የስራ ማስታወቂያዎችን እና የአመታዊ ሪፖርት ህትመቶችን ይፋ ያደርጋል።'
              : currentLang === 'om'
              ? 'ADRA Itoophiyaan qajeeltoowwan iftoominaa fi dandeettii irratti hundaa\'uun caalbaasiiwwan banaa, carraawwan hojii fi gabaasawwan waggaa uummataaf banaa taasisa.'
              : 'ኣድራ ኢትዮጵያ ንግሉጽነት ብዘለዎ ጽኑዕ መትከል መሰረት ኩሎም ክፍቲ ጨረታታት፣ ናይ ስራሕ ምልክታታትን ዓመታዊ ጸብጻባትን ንህዝቢ ይፋ ይገብር።'}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="tenders" className="py-12 sm:py-16 bg-[#f9faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-8 border-b border-stone-200 pb-2">
          <button
            onClick={() => setActiveTab('tenders')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'tenders'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Active Tenders & RFPs ({tenders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'careers'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Open Careers ({careers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('publications')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'publications'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Annual Reports & Briefs ({PUBLICATIONS.length})</span>
          </button>
        </div>

        {/* Tab 1: Tenders */}
        {activeTab === 'tenders' && (
          <div className="space-y-4">
            {tenders.map((tender) => (
              <div
                key={tender.id}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-emerald-900 font-bold">{tender.referenceNumber}</span>
                    <span aria-hidden="true" className="text-stone-400">·</span>
                    <span className="text-stone-700 font-bold">{tender.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    {tender.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 line-clamp-2 leading-relaxed">
                    {tender.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-700" />
                      <span>{tender.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-amber-900 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Submission Deadline: {tender.deadline}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedOpp(tender)}
                    className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap"
                  >
                    <span>View Tender Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Careers */}
        {activeTab === 'careers' && (
          <div className="space-y-4">
            {careers.map((career) => (
              <div
                key={career.id}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs hover:border-emerald-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-emerald-900 font-bold">{career.referenceNumber}</span>
                    <span aria-hidden="true" className="text-stone-400">·</span>
                    <span className="text-stone-700 font-bold">{career.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    {career.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 line-clamp-2 leading-relaxed">
                    {career.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-700 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-700" />
                      <span>{career.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-amber-900 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Closing Date: {career.deadline}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedOpp(career)}
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap"
                  >
                    <span>Apply for Position</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Publications */}
        {activeTab === 'publications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-700">
                    <span className="font-bold text-emerald-900">{pub.category}</span>
                    <span className="font-mono font-medium">{pub.year} · {pub.fileSize}</span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 font-display">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-stone-700 leading-relaxed">
                    {pub.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPub(pub)}
                    className="text-xs font-bold text-stone-800 hover:text-emerald-900 flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-stone-700" />
                    <span>View Executive Abstract</span>
                  </button>

                  <button
                    onClick={() => setSelectedPub(pub)}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>

      {/* Tender / Career Detail & Submission Modal */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
                  {selectedOpp.referenceNumber}
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-display mt-0.5">
                  {selectedOpp.title}
                </h3>
                <div className="text-xs text-stone-700 font-medium mt-1">
                  Location: {selectedOpp.location} · Deadline: {selectedOpp.deadline}
                </div>
              </div>
              <button
                onClick={() => setSelectedOpp(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
              <p>{selectedOpp.description}</p>
            </div>

            {/* Mandatory Criteria */}
            <div className="space-y-2.5 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                Mandatory Qualifications & Submission Requirements:
              </div>
              <div className="space-y-1.5">
                {selectedOpp.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-800">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Submission / Application Form */}
            <form onSubmit={handleApplySubmit} className="space-y-3 pt-2">
              <div className="text-xs font-bold text-stone-900">
                {selectedOpp.type === 'tender' ? 'Request Official Bid Documents Package' : 'Submit Candidate Expression of Interest'}
              </div>

              {applicationSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-1">
                  <div className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>Submission Acknowledged</span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Your reference has been logged. Dossier instructions sent to {applicantEmail || 'your email'}.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-stone-800 mb-1">
                        {selectedOpp.type === 'tender' ? 'Company / Bidder Name' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Alazar Mengistu"
                        className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-800 mb-1">Official Email Address</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g. contact@domain.et"
                        className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-stone-900"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedOpp(null)}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{selectedOpp.type === 'tender' ? 'Request Bid Dossier' : 'Submit Application'}</span>
                    </button>
                  </div>
                </>
              )}
            </form>

          </div>
        </div>
      )}

      {/* Publication Abstract Modal */}
      {selectedPub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">{selectedPub.category}</span>
                <h3 className="text-lg font-bold text-stone-900 font-display mt-0.5">{selectedPub.title}</h3>
                <div className="text-xs text-stone-700 font-mono font-medium mt-1">{selectedPub.year} · {selectedPub.fileSize}</div>
              </div>
              <button onClick={() => setSelectedPub(null)} className="p-1.5 text-stone-400 hover:text-stone-700">✕</button>
            </div>

            <div className="text-xs sm:text-sm text-stone-700 space-y-3">
              <p>{selectedPub.summary}</p>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700">
                <strong className="text-stone-900">Publication Notice:</strong> All ADRA Ethiopia technical manuals and financial audits are published under open access institutional licenses for researchers, government partners, and humanitarian practitioners.
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedPub(null)}
                className="px-4 py-2 bg-stone-100 text-stone-700 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Downloading ${selectedPub.title} (${selectedPub.fileSize})...`);
                  setSelectedPub(null);
                }}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Confirm Download</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
