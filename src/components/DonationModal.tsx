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
  Lock
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { UI_COPY } from '../data/uiCopy';
import { MARKET_EXCHANGE_RATE_USD_TO_ETB } from '../data/adraData';
import { QRCodeDisplay } from './QRCodeDisplay';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialSector?: string;
  initialAmount?: number;
}

type CanonicalSector =
  | 'general'
  | 'wash'
  | 'education'
  | 'health'
  | 'food-security'
  | 'economic-growth'
  | 'emergency'
  | 'peace-building';

function normalizeSector(raw?: string): CanonicalSector {
  if (!raw) return 'general';
  const s = raw.toLowerCase();
  if (s.includes('wash') || s.includes('water')) return 'wash';
  if (s.includes('edu')) return 'education';
  if (s.includes('emerg') || s.includes('disaster')) return 'emergency';
  if (s.includes('peace') || s.includes('cohesion') || s.includes('conflict')) return 'peace-building';
  if (s.includes('health') || s.includes('nutrition') || s.includes('psycho')) return 'health';
  if (s.includes('energy') || s.includes('economic') || s.includes('enterprise') || s.includes('tvet')) return 'economic-growth';
  if (s.includes('food') || s.includes('agri') || s.includes('livelihood')) return 'food-security';
  return 'general';
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialSector,
  initialAmount
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const copy = UI_COPY[currentLang] || UI_COPY.en;
  const dCopy = copy.donateModal;
  const qrCopy = copy.qr;
  const impactCopy = copy.impact;
  const common = copy.common;

  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount || 1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<CanonicalSector>(normalizeSector(initialSector));
  const [paymentMethod, setPaymentMethod] = useState<'telebirr' | 'cbe' | 'stripe'>('telebirr');

  // Pay mode: 'scan' (QR code) or 'app' (manual details / card fields)
  const [payMode, setPayMode] = useState<'scan' | 'app'>('scan');

  // Donor details
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [receiptSaved, setReceiptSaved] = useState(false);

  // Stripe card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  // Success state
  const [receipt, setReceipt] = useState<{
    referenceId: string;
    amount: number;
    currency: 'ETB' | 'USD';
    date: string;
    sectorKey: CanonicalSector;
    method: string;
    donor: string;
  } | null>(null);

  useEffect(() => {
    if (initialAmount) {
      setSelectedAmount(initialAmount);
      setCustomAmount('');
    }
    if (initialSector !== undefined) {
      setSelectedSector(normalizeSector(initialSector));
    }
  }, [initialAmount, initialSector]);

  useEffect(() => {
    if (!isOpen) {
      setReceipt(null);
      setReceiptSaved(false);
      setCopiedCode(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const etbOptions = [1000, 3250, 6500, 13000, 32500];
  const usdOptions = [10, 25, 50, 100, 250];
  const amountTiers = currency === 'ETB' ? etbOptions : usdOptions;

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;
  const etbShort = currentLang === 'am' || currentLang === 'ti' ? 'ብር' : 'ETB';

  const sectorLabels: Record<CanonicalSector, string> = {
    general: dCopy.sectors.general,
    wash: dCopy.sectors.wash,
    education: dCopy.sectors.education,
    health: dCopy.sectors.health,
    'food-security': dCopy.sectors.foodSecurity,
    'economic-growth': dCopy.sectors.economicGrowth,
    emergency: dCopy.sectors.emergency,
    'peace-building': dCopy.sectors.peaceBuilding
  };

  const copyToClipboard = (text: string, type: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleProcessDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = `ADRA-ET-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptSaved(false);
    setReceipt({
      referenceId: refNum,
      amount: activeAmount,
      currency,
      date: new Date().toISOString().slice(0, 10),
      sectorKey: selectedSector,
      method: paymentMethod.toUpperCase(),
      donor: donorName.trim()
    });
  };

  const formattedCtaAmount =
    currency === 'USD'
      ? `$${activeAmount.toLocaleString()}`
      : `${activeAmount.toLocaleString()} ${etbShort}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative max-h-[94vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label={dCopy.closeAria}
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
                {t.donate.completeTitle}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 font-editorial">
                {dCopy.thankYouTemplate.replace('{donor}', receipt.donor || dCopy.generousDonor)}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 font-medium max-w-md mx-auto">
                {dCopy.ackSubtitle}
              </p>
            </div>

            {/* Official Receipt Box */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-left text-xs space-y-3 font-sans">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-stone-900">{dCopy.receiptRef}</span>
                <span className="font-mono font-bold text-[#006643]">{receipt.referenceId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">{dCopy.contribAmount}</span>
                <span className="font-bold text-stone-900 text-sm tabular-nums">
                  {receipt.currency === 'USD'
                    ? `$${receipt.amount.toLocaleString()}`
                    : `${receipt.amount.toLocaleString()} ${etbShort}`}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-stone-700 font-semibold shrink-0">{dCopy.designatedSector}</span>
                <span className="font-bold text-stone-900 text-right">{sectorLabels[receipt.sectorKey]}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">{dCopy.paymentGateway}</span>
                <span className="font-bold text-[#006643]">{receipt.method}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-700 font-semibold">{dCopy.dateIssued}</span>
                <span className="text-stone-800 font-medium tabular-nums">{receipt.date}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-700 leading-snug font-medium">
                {dCopy.taxNote}
              </div>
            </div>

            {receiptSaved && (
              <div className="px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-900 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#006643] shrink-0" />
                <span>{dCopy.receiptSavedMsg} ({receipt.referenceId})</span>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setReceiptSaved(true)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{dCopy.saveReceiptBtn}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-[#006643] hover:bg-[#073826] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                {common.finish}
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
            <div className="flex items-center justify-between text-[11px] px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-950 border border-emerald-200 font-medium gap-2">
              <span>
                {dCopy.rateLabel} <strong>1 USD ≈ {MARKET_EXCHANGE_RATE_USD_TO_ETB}.00 ETB</strong> {dCopy.rateFloat}
              </span>
              <span className="font-mono text-[10px] text-emerald-800 font-bold shrink-0">{dCopy.nbeVerified}</span>
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
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                    currency === 'ETB' ? 'bg-[#006643] text-white shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  {impactCopy.currencyEtbLabel}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency('USD');
                    setSelectedAmount(25);
                  }}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                    currency === 'USD' ? 'bg-[#006643] text-white shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  {impactCopy.currencyUsdLabel}
                </button>
              </div>

              <div className="flex rounded-lg overflow-hidden p-0.5 bg-stone-200/70">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                    frequency === 'once' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  {dCopy.oneTime}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`w-1/2 py-1.5 rounded-md text-center transition-all cursor-pointer ${
                    frequency === 'monthly' ? 'bg-white text-stone-950 shadow-xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                  }`}
                >
                  {dCopy.monthly}
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800">
                <span>{dCopy.selectAmount}</span>
                <span className="text-[#006643] font-bold tabular-nums">
                  {currency === 'ETB' ? `${activeAmount.toLocaleString()} ${etbShort}` : `$${activeAmount}`}
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
                      className={`py-2 px-1 rounded-lg text-xs font-bold tabular-nums border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#006643] text-white border-[#006643] shadow-xs'
                          : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300'
                      }`}
                    >
                      {currency === 'USD' ? `$${tier}` : `${tier.toLocaleString()} ${etbShort}`}
                    </button>
                  );
                })}
              </div>

              <input
                type="number"
                min="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={`${dCopy.customPlaceholderPrefix} ${currency}...`}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900 placeholder:text-stone-500 font-medium"
              />
            </div>

            {/* Targeted Sector */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                {dCopy.programAreaLabel}
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value as CanonicalSector)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#006643]"
              >
                <option value="general">{dCopy.sectors.general}</option>
                <option value="wash">{dCopy.sectors.wash}</option>
                <option value="education">{dCopy.sectors.education}</option>
                <option value="health">{dCopy.sectors.health}</option>
                <option value="food-security">{dCopy.sectors.foodSecurity}</option>
                <option value="economic-growth">{dCopy.sectors.economicGrowth}</option>
                <option value="emergency">{dCopy.sectors.emergency}</option>
                <option value="peace-building">{dCopy.sectors.peaceBuilding}</option>
              </select>
            </div>

            {/* THREE PRIMARY GATEWAYS: TeleBirr, CBE Birr & Stripe */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                  {dCopy.selectGateway}
                </label>
                
                {/* Pay Mode Switch: Scan QR Code vs Direct / In-App */}
                <div className="flex items-center p-0.5 bg-stone-100 rounded-lg text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setPayMode('scan')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                      payMode === 'scan' ? 'bg-[#006643] text-white shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                    }`}
                  >
                    <QrCode className="w-3 h-3" />
                    <span>{dCopy.scanQrTab}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMode('app')}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                      payMode === 'app' ? 'bg-[#006643] text-white shadow-2xs font-bold' : 'text-stone-700 hover:text-stone-950 font-semibold'
                    }`}
                  >
                    <span>{dCopy.appCardTab}</span>
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
                    <span className="text-[10px] font-bold text-[#006643]">{dCopy.telebirrTag}</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">TeleBirr</div>
                    <div className="text-[10px] text-stone-700 font-medium">{dCopy.telebirrSub}</div>
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
                    <span className="text-[10px] font-bold text-purple-700">{dCopy.cbeTag}</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">CBE Birr</div>
                    <div className="text-[10px] text-stone-700 font-medium">{dCopy.cbeSub}</div>
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
                    <span className="text-[10px] font-bold text-indigo-600">{dCopy.stripeTag}</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold">Stripe</div>
                    <div className="text-[10px] text-stone-700 font-medium">{dCopy.stripeSub}</div>
                  </div>
                </button>
              </div>

              {/* ----------------- TELEBIRR CONTAINER ----------------- */}
              {paymentMethod === 'telebirr' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-[#006643]" />
                      <span className="text-xs font-bold text-emerald-950">{dCopy.telebirrHeader}</span>
                    </div>
                    <span className="text-[11px] bg-emerald-200/70 text-[#006643] px-2 py-0.5 rounded font-bold">
                      {dCopy.scanCodeEnabled}
                    </span>
                  </div>

                  {/* QR Scan Mode or App Mode */}
                  {payMode === 'scan' ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-emerald-100">
                      <QRCodeDisplay
                        value={`telebirr://pay?merchant=251911&amount=${activeAmount}&currency=ETB`}
                        brand="telebirr"
                        size={150}
                        label={qrCopy.telebirrQuickLabel}
                        currentLang={currentLang}
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-stone-950">{dCopy.howToScanPay}</div>
                        <ol className="space-y-1 text-[11px] list-decimal pl-4 text-stone-700 font-medium">
                          {dCopy.telebirrSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                        <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard('251911', 'merchant')}
                            className="px-2.5 py-1 text-[11px] font-bold bg-emerald-100 hover:bg-emerald-200 text-[#006643] rounded flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCode === 'merchant' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedCode === 'merchant' ? dCopy.copied : `${dCopy.merchantCodeLabel} 251911`}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 bg-white p-3 rounded-lg border border-emerald-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-stone-700 font-semibold text-[11px]">{dCopy.merchantShortCode}</div>
                          <div className="font-mono font-bold text-stone-900 text-sm">251911</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('251911', 'merchant')}
                          className="px-2.5 py-1 text-xs font-bold bg-emerald-100 hover:bg-emerald-200 text-[#006643] rounded flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedCode === 'merchant' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode === 'merchant' ? dCopy.copied : dCopy.copyCode}</span>
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
                          <span>{dCopy.launchTelebirr}</span>
                        </a>

                        <a
                          href="tel:*127%23"
                          className="py-2 px-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#006643]" />
                          <span>{dCopy.dialTelebirrUssd}</span>
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
                      <span className="text-xs font-bold text-purple-950">{dCopy.cbeHeader}</span>
                    </div>
                    <span className="text-[11px] bg-purple-200/70 text-purple-900 px-2 py-0.5 rounded font-bold">
                      {dCopy.scanCodeEnabled}
                    </span>
                  </div>

                  {payMode === 'scan' ? (
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-purple-100">
                      <QRCodeDisplay
                        value={`cbe://pay?biller=847123&account=1000012345678&amount=${activeAmount}&currency=ETB`}
                        brand="cbe"
                        size={150}
                        label={qrCopy.cbeQrLabel}
                        currentLang={currentLang}
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-purple-950">{dCopy.howToScanPay}</div>
                        <ol className="space-y-1 text-[11px] list-decimal pl-4 text-stone-700 font-medium">
                          {dCopy.cbeSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                        <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard('1000012345678', 'cbe-acc')}
                            className="px-2.5 py-1 text-[11px] font-bold bg-purple-100 hover:bg-purple-200 text-purple-900 rounded flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCode === 'cbe-acc' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedCode === 'cbe-acc' ? dCopy.copied : '1000012345678'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2.5 bg-white p-3 rounded-lg border border-purple-100 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-stone-700 font-semibold text-[11px]">{dCopy.cbeAccountLabel}</div>
                          <div className="font-mono font-bold text-stone-900 text-sm">1000012345678</div>
                          <div className="text-[10px] text-stone-600 font-medium">{dCopy.cbeBranchLabel}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('1000012345678', 'cbe-acc')}
                          className="px-2.5 py-1 text-xs font-bold bg-purple-100 hover:bg-purple-200 text-purple-900 rounded flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          {copiedCode === 'cbe-acc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCode === 'cbe-acc' ? dCopy.copied : dCopy.copyBtn}</span>
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
                          <span>{dCopy.openCbeApp}</span>
                        </a>

                        <a
                          href="tel:*847%23"
                          className="py-2 px-3 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-purple-800" />
                          <span>{dCopy.dialCbeUssd}</span>
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
                      <span className="text-xs font-bold text-indigo-950">{dCopy.stripeHeader}</span>
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
                        label={qrCopy.stripeMobileLabel}
                        currentLang={currentLang}
                      />
                      <div className="space-y-2 text-xs text-stone-800 text-center sm:text-left">
                        <div className="font-bold text-indigo-950">{dCopy.instantMobilePay}</div>
                        <p className="text-[11px] text-stone-700 font-medium leading-relaxed">
                          {dCopy.stripeMobileDesc}
                        </p>
                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setPayMode('app')}
                            className="text-[11px] font-bold text-indigo-800 hover:underline cursor-pointer"
                          >
                            {dCopy.enterCardLink}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Inline Stripe Card Elements */
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-indigo-100 text-xs">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-800 mb-1">
                          {dCopy.cardNumberLabel}
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
                          <label className="block text-[11px] font-bold text-stone-800 mb-1">{dCopy.expiryLabel}</label>
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
                          <label className="block text-[11px] font-bold text-stone-800 mb-1">{dCopy.cvcLabel}</label>
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
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">{dCopy.donorNameLabel}</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={dCopy.donorNamePlaceholder}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006643] text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-800 mb-1">{dCopy.donorPhoneLabel}</label>
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
                <label className="block text-[11px] font-bold text-stone-800 mb-1">{dCopy.donorEmailLabel}</label>
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
              <span>{dCopy.confirmTemplate.replace('{amount}', formattedCtaAmount)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Security Guarantee */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#006643]" />
              <span>{dCopy.securityFooter}</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
