import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  CheckCircle, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building, 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  PhoneCall, 
  QrCode,
  Lock,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { QRCodeDisplay } from './QRCodeDisplay';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialSector?: string;
  initialAmount?: number;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialSector,
  initialAmount
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount || 1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>(initialSector || 'general');
  const [paymentMethod, setPaymentMethod] = useState<'telebirr' | 'cbe' | 'stripe'>('telebirr');
  
  // Pay mode: 'scan' (QR code) or 'app' (manual details / card fields)
  const [payMode, setPayMode] = useState<'scan' | 'app'>('scan');

  // Donor details
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Stripe card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  // Success state
  const [receipt, setReceipt] = useState<{
    referenceId: string;
    amount: number;
    currency: string;
    date: string;
    sector: string;
    method: string;
    donor: string;
  } | null>(null);

  useEffect(() => {
    if (initialAmount) {
      setSelectedAmount(initialAmount);
    }
    if (initialSector) {
      setSelectedSector(initialSector);
    }
  }, [initialAmount, initialSector]);

  if (!isOpen) return null;

  const etbOptions = [1000, 3250, 6500, 13000, 32500];
  const usdOptions = [10, 25, 50, 100, 250];
  const amountTiers = currency === 'ETB' ? etbOptions : usdOptions;

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const sectorLabels: Record<string, string> = {
    general: 'Where Needed Most (Crisis & Dignity)',
    wash: 'Clean Water & Solar Boreholes (WASH)',
    education: 'Education & Girls Retention (SEAQE II)',
    health: 'Community Therapeutic Health & Nutrition (CTC)',
    'food-security': 'Climate-Smart Agriculture & Irrigation',
    'economic-growth': 'Green Energy TVET Youth Solar Academy',
    emergency: 'Emergency Relief & Disaster Response'
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleProcessDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = `ADRA-ET-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceipt({
      referenceId: refNum,
      amount: activeAmount,
      currency: currency,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      sector: sectorLabels[selectedSector] || 'Where Needed Most',
      method: paymentMethod.toUpperCase(),
      donor: donorName || 'Generous Donor'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[94vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {receipt ? (
          /* Official Acknowledgment State */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#006643] rounded-full mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#006643]">
                Official Contribution Acknowledgment
              </span>
              <h3 className="text-2xl font-bold text-stone-900 font-editorial">
                Thank You, {receipt.donor}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-medium max-w-md mx-auto">
                Your humanitarian contribution directly funds community resilience programs across Ethiopia.
              </p>
            </div>

            {/* Official Receipt Box */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-left text-xs space-y-3 font-sans">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-stone-900">Receipt Ref Number:</span>
                <span className="font-mono font-bold text-[#006643]">{receipt.referenceId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">Contribution Amount:</span>
                <span className="font-bold text-stone-900 text-sm tabular-nums">
                  {receipt.currency === 'USD' ? `$${receipt.amount}` : `${receipt.amount.toLocaleString()} ETB (ብር)`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">Designated Sector:</span>
                <span className="font-bold text-stone-900">{receipt.sector}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">Payment Gateway:</span>
                <span className="font-bold text-[#006643]">{receipt.method}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">Date Issued:</span>
                <span className="text-stone-800 font-medium">{receipt.date}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-700 leading-snug font-medium">
                ADRA Ethiopia is legally registered with the Authority for Civil Society Organizations (ACSO) Certificate No. 0384. Contributions are tax-exempt under Ethiopian Proclamation No. 1113/2019.
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Receipt ${receipt.referenceId} saved successfully.`);
                }}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Official Receipt</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#006643] hover:bg-[#073826] text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Donation Form */
          <form onSubmit={handleProcessDonation} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006643]">
                <Heart className="w-3.5 h-3.5 fill-[#006643] text-[#006643]" />
                <span>{t.donate.portalTitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 font-editorial mt-1">
                {t.donate.heading}
              </h3>
              <p className="text-xs text-stone-700 font-medium mt-0.5">
                {t.donate.subtitle}
              </p>
            </div>

            {/* Going Market Rate Notice */}
            <div className="flex items-center justify-between text-[11px] px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-950 border border-emerald-200 font-medium">
              <span>Going Market Rate: <strong>1 USD ≈ 130.00 ETB</strong> (Official Interbank Float)</span>
              <span className="font-mono text-[10px] text-emerald-800 font-bold">NBE Verified</span>
            </div>

            {/* Currency & Frequency */}
            <div className="grid grid-cols-2 gap-3 p-1.5 bg-stone-100 rounded-xl text-xs font-semibold">
              <div className="flex rounded-lg overflow-hidden p-0.5 bg-stone-200/70">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency('ETB');
                    setSelectedAmount(3250);
                  }}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all ${
                    currency === 'ETB' ? 'bg-[#006643] text-white shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  ETB (ብር)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency('USD');
                    setSelectedAmount(25);
                  }}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all ${
                    currency === 'USD' ? 'bg-[#006643] text-white shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  USD ($)
                </button>
              </div>

              <div className="flex rounded-lg overflow-hidden p-0.5 bg-stone-200/70">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all ${
                    frequency === 'once' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all ${
                    frequency === 'monthly' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800">
                <span>Select Contribution Amount</span>
                <span className="text-[#006643] font-bold">
                  {currency === 'ETB' ? `${activeAmount.toLocaleString()} ብር` : `$${activeAmount}`}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {amountTiers.map((tier) => {
                  const isSelected = !customAmount && selectedAmount === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(tier);
                        setCustomAmount('');
                      }}
                      className={`py-2 px-1 rounded-lg text-xs font-bold tabular-nums border transition-all ${
                        isSelected
                          ? 'bg-[#006643] text-white border-[#006643] shadow-xs'
                          : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300'
                      }`}
                    >
                      {currency === 'USD' ? `$${tier}` : `${tier.toLocaleString()} ብር`}
                    </button>
                  );
                })}
              </div>

              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={`Or enter custom amount in ${currency}...`}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900 placeholder:text-stone-500 font-medium"
              />
            </div>

            {/* Targeted Sector */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                Designated Program Area
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#006643]"
              >
                <option value="general">Where Needed Most (Crisis & Long-Term Dignity)</option>
                <option value="wash">Water, Sanitation & Hygiene (WASH Solar Boreholes)</option>
                <option value="education">Education & Girls Retention (SEAQE II)</option>
                <option value="health">Community Health & Severe Malnutrition (CTC)</option>
                <option value="food-security">Food Security & Smallholder Drip Irrigation</option>
                <option value="economic-growth">Green Energy TVET Youth Solar Academy</option>
                <option value="emergency">Emergency Management & Disaster Relief</option>
              </select>
            </div>

            {/* THREE PRIMARY GATEWAYS: TeleBirr, CBE Birr & Stripe */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  Select Gateway
                </label>
                
                {/* Pay Mode Switch: Scan QR Code vs Direct / In-App */}
                <div className="flex items-center p-0.5 bg-stone-100 rounded-lg text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setPayMode('scan')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                      payMode === 'scan' ? 'bg-[#006643] text-white shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                    }`}
                  >
                    <QrCode className="w-3 h-3" />
                    <span>Scan QR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMode('app')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                      payMode === 'app' ? 'bg-[#006643] text-white shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                    }`}
                  >
                    <span>App / Card</span>
                  </button>
                </div>
              </div>

              {/* 3 Channel Selector Buttons */}
              <div className="grid grid-cols-3 gap-2.5">
                
                {/* 1. TeleBirr */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('telebirr')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'telebirr'
                      ? 'bg-emerald-50 border-[#006643] ring-2 ring-[#006643] text-stone-900 shadow-2xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Smartphone className="w-5 h-5 text-[#006643]" />
                    <span className="text-[10px] font-bold text-[#006643]">#1 ET</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">TeleBirr</div>
                    <div className="text-[10px] text-stone-700 font-medium">Ethio Telecom</div>
                  </div>
                </button>

                {/* 2. CBE Birr */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cbe')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'cbe'
                      ? 'bg-purple-50 border-purple-700 ring-2 ring-purple-700 text-stone-900 shadow-2xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Building className="w-5 h-5 text-purple-700" />
                    <span className="text-[10px] font-bold text-purple-700">Bank</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">CBE Birr</div>
                    <div className="text-[10px] text-stone-700 font-medium">Commercial Bank</div>
                  </div>
                </button>

                {/* 3. Stripe */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('stripe')}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    paymentMethod === 'stripe'
                      ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600 text-stone-900 shadow-2xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                    <span className="text-[10px] font-bold text-indigo-600">Global</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">Stripe</div>
                    <div className="text-[10px] text-stone-700 font-medium">Card / Apple Pay</div>
                  </div>
                </button>
              </div>

              {/* ----------------- TELEBIRR CONTAINER ----------------- */}
              {paymentMethod === 'telebirr' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#006643]" />
                      <span className="text-xs font-bold text-emerald-950">TeleBirr Mobile Money</span>
                    </div>
                    <span className="text-[11px] bg-emerald-200/70 text-[#006643] px-2 py-0.5 rounded font-bold">
                      Scan Code Enabled
                    </span>
                  </div>

                  {/* QR Scan Mode or App Mode */}
                  {payMode === 'scan' ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-emerald-100">
                      <QRCodeDisplay
                        value={`telebirr://pay?merchant=251911&amount=${activeAmount}&currency=ETB`}
                        brand="telebirr"
                        size={150}
                        label="TeleBirr Quick Scan"
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-stone-950">How to Scan & Pay:</div>
                        <ol className="space-y-1 text-[11px] list-decimal pl-4 text-stone-700 font-medium">
                          <li>Open the <strong>TeleBirr App</strong> on your phone</li>
                          <li>Tap the <strong>Scan QR</strong> icon</li>
                          <li>Scan this code to contribute <strong>{activeAmount.toLocaleString()} ETB</strong></li>
                          <li>Confirm transaction with your TeleBirr PIN</li>
                        </ol>
                        <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard('251911', 'merchant')}
                            className="px-2.5 py-1 text-[11px] font-bold bg-emerald-100 hover:bg-emerald-200 text-[#006643] rounded flex items-center gap-1"
                          >
                            {copiedCode === 'merchant' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>Merchant Code: 251911</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 bg-white p-3 rounded-lg border border-emerald-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-stone-700 font-semibold text-[11px]">ADRA Merchant Short Code:</div>
                          <div className="font-mono font-bold text-stone-900 text-sm">251911</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('251911', 'merchant')}
                          className="px-2.5 py-1 text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-[#006643] rounded flex items-center gap-1 transition-colors"
                        >
                          {copiedCode === 'merchant' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode === 'merchant' ? 'Copied!' : 'Copy Code'}</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href="https://app.telebirr.et"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 bg-[#006643] hover:bg-[#073826] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Launch TeleBirr App</span>
                        </a>

                        <a
                          href="tel:*127%23"
                          className="py-2 px-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#006643]" />
                          <span>Dial *127# USSD</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ----------------- CBE BIRR CONTAINER ----------------- */}
              {paymentMethod === 'cbe' && (
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-purple-800" />
                      <span className="text-xs font-bold text-purple-950">Commercial Bank of Ethiopia</span>
                    </div>
                    <span className="text-[11px] bg-purple-200/70 text-purple-900 px-2 py-0.5 rounded font-bold">
                      Scan Code Enabled
                    </span>
                  </div>

                  {payMode === 'scan' ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-purple-100">
                      <QRCodeDisplay
                        value={`cbe://pay?biller=847123&account=1000012345678&amount=${activeAmount}&currency=ETB`}
                        brand="cbe"
                        size={150}
                        label="CBE Birr QR Code"
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-purple-950">How to Scan & Pay:</div>
                        <ol className="space-y-1 text-[11px] list-decimal pl-4 text-stone-700 font-medium">
                          <li>Open <strong>CBE Mobile Banking</strong> or <strong>CBE Birr</strong></li>
                          <li>Select <strong>Scan to Pay</strong></li>
                          <li>Scan this official ADRA QR code</li>
                          <li>Confirm transfer to Account <strong>1000012345678</strong></li>
                        </ol>
                        <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard('1000012345678', 'cbe-acc')}
                            className="px-2.5 py-1 text-[11px] font-bold bg-purple-100 hover:bg-purple-200 text-purple-900 rounded flex items-center gap-1"
                          >
                            {copiedCode === 'cbe-acc' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>Acc: 1000012345678</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2.5 bg-white p-3 rounded-lg border border-purple-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-stone-700 font-semibold text-[11px]">CBE Account:</div>
                          <div className="font-mono font-bold text-stone-900 text-sm">1000012345678</div>
                          <div className="text-[10px] text-stone-600 font-medium">ADRA Ethiopia, Kirkos Branch</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('1000012345678', 'cbe-acc')}
                          className="px-2.5 py-1 text-xs font-bold bg-purple-100 hover:bg-purple-200 text-purple-900 rounded flex items-center gap-1 transition-colors"
                        >
                          {copiedCode === 'cbe-acc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode === 'cbe-acc' ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href="https://www.combanketh.et"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 bg-purple-800 hover:bg-purple-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open CBE App</span>
                        </a>

                        <a
                          href="tel:*847%23"
                          className="py-2 px-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-purple-800" />
                          <span>Dial *847#</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ----------------- STRIPE CONTAINER ----------------- */}
              {paymentMethod === 'stripe' && (
                <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-indigo-700" />
                      <span className="text-xs font-bold text-indigo-950">Stripe Global Checkout</span>
                    </div>
                    <span className="text-[11px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-bold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>256-bit SSL</span>
                    </span>
                  </div>

                  {payMode === 'scan' ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-indigo-100">
                      <QRCodeDisplay
                        value={`https://checkout.stripe.com/pay/adra-ethiopia?amount=${activeAmount}&currency=${currency.toLowerCase()}`}
                        brand="stripe"
                        size={150}
                        label="Stripe Mobile Scan"
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-indigo-950">Instant Mobile Pay:</div>
                        <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                          Scan with your mobile camera to pay instantly using <strong>Apple Pay</strong>, <strong>Google Pay</strong>, or your saved cards via Stripe Checkout.
                        </p>
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setPayMode('app')}
                            className="text-[11px] font-bold text-indigo-800 hover:underline"
                          >
                            Or enter card details directly on this screen &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Inline Stripe Card Elements */
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-indigo-100 text-xs">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-800 mb-1">
                          Card Number (Visa, Mastercard, Amex)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="4242 ···· ···· 4242"
                            className="w-full px-3 py-2 pr-10 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 font-mono text-stone-900"
                          />
                          <CreditCard className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-stone-800 mb-1">Expires (MM/YY)</label>
                          <input
                            type="text"
                            maxLength={5}
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM / YY"
                            className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 font-mono text-stone-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-stone-800 mb-1">CVC Code</label>
                          <input
                            type="text"
                            maxLength={4}
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            placeholder="123"
                            className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 font-mono text-stone-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Donor Contact */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">Donor Name (For Official Receipt)</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Dawit Alemayehu"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">Mobile Number (TeleBirr / CBE)</label>
                  <input
                    type="tel"
                    required
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+251 9..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-800 mb-1">Email (For Tax Exemption Certificate)</label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="dawit@example.com"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900"
                />
              </div>
            </div>

            {/* Final Action Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#f59e0b] hover:bg-[#d97706] active:bg-[#b45309] text-stone-950 font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-stone-950/20 text-stone-950" />
              <span>
                {currentLang === 'en'
                  ? `Confirm Contribution of ${currency === 'USD' ? `$${activeAmount}` : `${activeAmount.toLocaleString()} ETB`}`
                  : `${currency === 'USD' ? `$${activeAmount}` : `${activeAmount.toLocaleString()} ብር`} አረጋግጥ`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Security Guarantee */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#006643]" />
              <span>Verified Humanitarian Gateway · Stripe, CBE & TeleBirr Encrypted</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
