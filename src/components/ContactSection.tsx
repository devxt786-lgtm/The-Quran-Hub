import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, Send, CheckCircle2, Globe, Copy, Check, RotateCcw, AlertCircle } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl, getEmailUrl, ACADEMY_CONFIG } from '../config';

interface SubmittedContactData {
  fullName: string;
  phone: string;
  email: string;
  courseInterest: string;
  learnerType: string;
  message: string;
}

export function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseInterest, setCourseInterest] = useState('Noorani Qaida');
  const [learnerType, setLearnerType] = useState('Child (4-14 years)');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<SubmittedContactData | null>(null);
  const [copied, setCopied] = useState(false);

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({});
  const [numberHint, setNumberHint] = useState('');

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/[^0-9]/g, '');

    if (rawValue !== digitsOnly) {
      setNumberHint('Numbers only (0-9) are allowed in this field.');
    } else {
      setNumberHint('');
    }

    setPhone(digitsOnly);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { fullName?: string; phone?: string; email?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!phone) {
      newErrors.phone = 'Please enter your WhatsApp phone number.';
    } else if (!/^[0-9]{7,15}$/.test(phone)) {
      newErrors.phone = 'Enter 7 to 15 digits only, including country code (e.g. 923059444336).';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address or leave blank.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatInquiryText = (data: SubmittedContactData) => {
    return [
      `Assalamualaikum, I am interested in online Quran classes at ${ACADEMY_CONFIG.name} with the female teacher.`,
      ``,
      `Name: ${data.fullName}`,
      `WhatsApp Number: ${data.phone}`,
      `Course: ${data.courseInterest}`,
      `Learner Category: ${data.learnerType}`,
      data.email ? `Email: ${data.email}` : null,
      `Preferred Timing / Notes: ${data.message || 'Please share available class schedules.'}`,
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedData({
      fullName: fullName.trim(),
      phone,
      email: email.trim(),
      courseInterest,
      learnerType,
      message: message.trim(),
    });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setCourseInterest('Noorani Qaida');
    setLearnerType('Child (4-14 years)');
    setMessage('');
    setErrors({});
    setNumberHint('');
    setCopied(false);
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(formatInquiryText(submittedData));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  const previewText = formatInquiryText({
    fullName: fullName.trim() || 'Prospective Student',
    phone: phone || 'Not provided',
    email: email.trim(),
    courseInterest,
    learnerType,
    message: message.trim(),
  });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#123F32] text-[#F8F5EC] relative overflow-hidden">
      {/* Background Islamic star geometry */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6A15B 1px, transparent 1px), radial-gradient(#C6A15B 1px, #123F32 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#DFC07D]" />
            <span className="text-xs uppercase font-semibold text-[#DFC07D] tracking-widest">
              Get In Touch
            </span>
            <IslamicStar className="w-4 h-4 text-[#DFC07D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4 text-balance">
            Begin Your Sacred Journey Today
          </h2>
          
          <p className="text-base sm:text-lg text-[#F8F5EC]/85 leading-relaxed">
            Reach out via WhatsApp for immediate assistance, or fill out the trial inquiry form to send your details to our female teacher.
          </p>

          <IslamicDivider className="mt-6" />
        </div>

        {/* 2-Column Grid: Contact Information & WhatsApp Spotlight on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Primary WhatsApp Feature Box */}
            <div className="bg-[#0B271F] border-2 border-[#C6A15B]/50 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#DFC07D] font-semibold">
                    Instant Chat Support
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                    WhatsApp Admissions Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#F8F5EC]/80 leading-relaxed mb-6">
                Connect directly with our female Quran teacher. Inquire about classes for yourself or your child, ask any questions, and schedule your free 3-day trial classes immediately.
              </p>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={getWhatsAppUrl("Assalamualaikum, I am interested in online Quran classes with the female teacher.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 rounded-xl shadow-md transition-all mb-4"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat with us on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#DFC07D] pt-2 border-t border-[#C6A15B]/20">
                <span>Direct Number:</span>
                <span className="font-mono font-medium">{ACADEMY_CONFIG.phoneDisplay}</span>
              </div>
            </div>

            {/* Additional Contact Info Details */}
            <div className="bg-[#0E3328] rounded-2xl p-6 border border-[#C6A15B]/20 space-y-4">
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Globe className="w-5 h-5 text-[#DFC07D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Global Availability</p>
                  <p className="text-[#F8F5EC]/75">{ACADEMY_CONFIG.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-[#DFC07D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Fast Response Guarantee</p>
                  <p className="text-[#F8F5EC]/75">{ACADEMY_CONFIG.responseRate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Mail className="w-5 h-5 text-[#DFC07D] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-white">Admissions Email</p>
                  <a
                    href={`mailto:${ACADEMY_CONFIG.email}`}
                    className="text-[#F8F5EC]/75 hover:text-[#DFC07D] transition-colors break-all"
                  >
                    {ACADEMY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Trial / Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#C6A15B]/40 text-left">
            {!submittedData ? (
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="font-serif text-2xl text-[#123F32] font-semibold">
                      Book a Free Trial Class
                    </h3>
                    <p className="text-xs text-slate-500">
                      Zero registration fee · Sends directly to WhatsApp or Email
                    </p>
                  </div>
                  <IslamicStar className="w-6 h-6 text-[#C6A15B] shrink-0" />
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        placeholder="e.g. Fatima Zahra"
                        className={`w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border rounded-xl p-3 text-slate-800 focus:outline-none ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#123F32]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number (Digits Only) *
                      </label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{7,15}"
                        maxLength={15}
                        required
                        value={phone}
                        onChange={handlePhoneInputChange}
                        placeholder="e.g. 923059444336"
                        className={`w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border rounded-xl p-3 text-slate-800 focus:outline-none tabular-nums ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 focus:border-[#123F32]'
                        }`}
                      />
                      {errors.phone ? (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      ) : numberHint ? (
                        <p className="mt-1 text-[11px] text-amber-700">{numberHint}</p>
                      ) : (
                        <p className="mt-1 text-[11px] text-slate-400">Include country code, numbers only</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Course Interested In
                      </label>
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#123F32]"
                      >
                        <option value="Noorani Qaida">Noorani Qaida (Beginners)</option>
                        <option value="Quran Reading (Nazra)">Quran Reading (Nazra)</option>
                        <option value="Quran with Tajweed">Quran with Tajweed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Learner Category
                      </label>
                      <select
                        value={learnerType}
                        onChange={(e) => setLearnerType(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#123F32]"
                      >
                        <option value="Child (4-14 years)">Child (4-14 years)</option>
                        <option value="Adult Sister">Adult Sister (Female Learner)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="e.g. yourname@example.com"
                      className={`w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border rounded-xl p-3 text-slate-800 focus:outline-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#123F32]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Timing or Any Special Notes
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Available weekdays 6:00 PM EST. Looking for gentle guidance for my daughter."
                      className="w-full text-xs sm:text-sm bg-[#F8F5EC]/60 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#123F32]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1B5846] rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#DFC07D]" />
                      <span>Submit Trial Request</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(previewText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-medium text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/40 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              /* Success message state */
              <div className="py-4">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#123F32] flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#123F32] font-semibold mb-2">
                    Inquiry Ready to Send, {submittedData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your details are formatted below. Send your inquiry directly to our female teacher on{' '}
                    <strong className="text-[#123F32]">WhatsApp ({ACADEMY_CONFIG.phoneDisplay})</strong> or{' '}
                    <strong className="text-[#123F32]">Email ({ACADEMY_CONFIG.email})</strong>.
                  </p>
                </div>

                {/* Request Summary Box */}
                <div className="p-4 bg-[#F8F5EC] border border-[#C6A15B]/30 rounded-xl mb-6 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#C6A15B]/20">
                    <span className="font-semibold text-[#123F32]">Submitted Inquiry Details</span>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#123F32] hover:text-[#1B5846] cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Details'}</span>
                    </button>
                  </div>
                  <p><span className="text-slate-500">Name:</span> <strong>{submittedData.fullName}</strong></p>
                  <p><span className="text-slate-500">WhatsApp Number:</span> <strong className="tabular-nums">{submittedData.phone}</strong></p>
                  <p><span className="text-slate-500">Course &amp; Learner:</span> <strong>{submittedData.courseInterest}</strong> ({submittedData.learnerType})</p>
                  {submittedData.email && (
                    <p><span className="text-slate-500">Email:</span> <strong>{submittedData.email}</strong></p>
                  )}
                  {submittedData.message && (
                    <p><span className="text-slate-500">Notes:</span> {submittedData.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-4">
                  <a
                    href={getWhatsAppUrl(formatInquiryText(submittedData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={getEmailUrl(
                      `Trial Class Inquiry – ${submittedData.fullName} (${submittedData.courseInterest})`,
                      formatInquiryText(submittedData)
                    )}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/40 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C6A15B]" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#123F32] hover:bg-[#F8F5EC] rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
