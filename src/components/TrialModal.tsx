import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Send, Mail, Copy, Check, RotateCcw, AlertCircle } from 'lucide-react';
import { IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl, getEmailUrl, ACADEMY_CONFIG } from '../config';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

interface SubmittedTrialData {
  name: string;
  whatsapp: string;
  course: string;
  studentType: string;
  preferredTime: string;
}

export function TrialModal({ isOpen, onClose, initialCourse = 'Noorani Qaida' }: TrialModalProps) {
  const [course, setCourse] = useState(initialCourse);
  const [studentType, setStudentType] = useState('Child (Age 4-15)');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [preferredTime, setPreferredTime] = useState('Evening (5 PM - 9 PM)');
  const [submittedData, setSubmittedData] = useState<SubmittedTrialData | null>(null);
  const [copied, setCopied] = useState(false);

  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});
  const [numberHint, setNumberHint] = useState('');

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const resetForm = () => {
    setName('');
    setWhatsapp('');
    setStudentType('Child (Age 4-15)');
    setPreferredTime('Evening (5 PM - 9 PM)');
    setCourse(initialCourse || 'Noorani Qaida');
    setSubmittedData(null);
    setErrors({});
    setNumberHint('');
    setCopied(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleWhatsAppInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/[^0-9]/g, '');

    if (rawValue !== digitsOnly) {
      setNumberHint('Numbers only (0-9) are allowed in this field.');
    } else {
      setNumberHint('');
    }

    setWhatsapp(digitsOnly);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { name?: string; whatsapp?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    if (!whatsapp) {
      newErrors.whatsapp = 'Please enter your WhatsApp phone number.';
    } else if (!/^[0-9]{7,15}$/.test(whatsapp)) {
      newErrors.whatsapp = 'Enter 7 to 15 digits only, including country code (e.g. 923059444336).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatRequestText = (data: SubmittedTrialData) => {
    return [
      `Assalamualaikum, I would like to book a Free Demo Class at ${ACADEMY_CONFIG.name} with the female teacher.`,
      ``,
      `Name: ${data.name}`,
      `WhatsApp Number: ${data.whatsapp}`,
      `Course: ${data.course}`,
      `Student Category: ${data.studentType}`,
      `Preferred Time: ${data.preferredTime}`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedData({
      name: name.trim(),
      whatsapp,
      course,
      studentType,
      preferredTime,
    });
  };

  const handleCopySummary = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(formatRequestText(submittedData));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
  };

  const previewText = formatRequestText({
    name: name.trim() || 'Prospective Student',
    whatsapp: whatsapp || 'Not provided',
    course,
    studentType,
    preferredTime,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#C6A15B]/40 p-6 sm:p-8 z-10 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close trial modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedData ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 text-[#A5823E]">
              <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
              <span className="text-xs uppercase font-semibold tracking-wider">
                Zero Obligation · 3 Free Classes
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#123F32] font-semibold mb-2">
              Book Your Free Trial
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Enter your details below to send your demo class request directly to our female teacher on WhatsApp ({ACADEMY_CONFIG.phoneDisplay}) or Email.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Select Desired Course
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Noorani Qaida', 'Quran Reading', 'Quran Tajweed'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCourse(c)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        course === c
                          ? 'border-[#123F32] bg-[#123F32] text-white shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Type & Instructor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Category *
                  </label>
                  <select
                    value={studentType}
                    onChange={(e) => setStudentType(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#C6A15B]"
                  >
                    <option value="Child (Age 4-15)">Child (Age 4-15)</option>
                    <option value="Adult Sister">Adult Sister (Female Learner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Assigned Instructor
                  </label>
                  <div className="text-xs bg-[#F8F5EC] border border-[#C6A15B]/40 rounded-lg p-2.5 text-[#123F32] font-medium flex items-center gap-1.5 truncate">
                    <IslamicStar className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span>Certified Female Teacher</span>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name / Parent's Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="e.g. Ayesha Siddiqui"
                  className={`w-full text-xs bg-slate-50 border rounded-lg p-2.5 text-slate-800 focus:outline-none ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#C6A15B]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    value={whatsapp}
                    onChange={handleWhatsAppInputChange}
                    placeholder="e.g. 923059444336"
                    className={`w-full text-xs bg-slate-50 border rounded-lg p-2.5 text-slate-800 focus:outline-none tabular-nums ${
                      errors.whatsapp
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-200 focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.whatsapp ? (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  ) : numberHint ? (
                    <p className="mt-1 text-[11px] text-amber-700">{numberHint}</p>
                  ) : (
                    <p className="mt-1 text-[11px] text-slate-400">Include country code, numbers only</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-[#C6A15B]"
                  >
                    <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                    <option value="Night / Flexible">Night / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1B5846] rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#DFC07D]" />
                  <span>Submit Trial Request</span>
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-[11px] text-slate-400 font-medium">
                    OR INSTANT CHAT
                  </span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <a
                  href={getWhatsAppUrl(previewText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-medium text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/40 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send Directly via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-3">
            <div className="text-center mb-5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl text-[#123F32] font-semibold mb-1.5">
                Demo Request Ready, {submittedData.name}!
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Send your formatted demo class request directly to our female teacher via{' '}
                <strong className="text-[#123F32]">WhatsApp ({ACADEMY_CONFIG.phoneDisplay})</strong> or{' '}
                <strong className="text-[#123F32]">Email ({ACADEMY_CONFIG.email})</strong> below.
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-4 bg-[#F8F5EC] border border-[#C6A15B]/30 rounded-xl mb-5 text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#C6A15B]/20">
                <span className="font-semibold text-[#123F32]">Request Summary</span>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#123F32] hover:text-[#1B5846] cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Details'}</span>
                </button>
              </div>
              <p><span className="text-slate-500">Student / Parent:</span> <strong>{submittedData.name}</strong></p>
              <p><span className="text-slate-500">WhatsApp Number:</span> <strong className="tabular-nums">{submittedData.whatsapp}</strong></p>
              <p><span className="text-slate-500">Course:</span> <strong>{submittedData.course}</strong> ({submittedData.studentType})</p>
              <p><span className="text-slate-500">Preferred Slot:</span> <strong>{submittedData.preferredTime}</strong></p>
            </div>

            {/* Delivery Channels */}
            <div className="flex flex-col gap-2.5 mb-5">
              <a
                href={getWhatsAppUrl(formatRequestText(submittedData))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send to Teacher on WhatsApp</span>
              </a>

              <a
                href={getEmailUrl(
                  `Free Demo Class Request – ${submittedData.name} (${submittedData.course})`,
                  formatRequestText(submittedData)
                )}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/40 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C6A15B]" />
                <span>Send via Email ({ACADEMY_CONFIG.email})</span>
              </a>
            </div>

            {/* Submit Another or Close */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#123F32] hover:bg-[#F8F5EC] rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Book Another Demo Class</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
