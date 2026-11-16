import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl } from '../config';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How does the Free 3-Day Trial work?",
    answer:
      "Our trial is 100% free with zero financial obligation. After you submit your request or message us on WhatsApp, we schedule three 30-minute one-to-one lessons. Our female teacher assesses your or your child's current Quran level, demonstrates our interactive classroom, and recommends the best course path. You only decide to continue if you are completely satisfied.",
  },
  {
    question: "What is the minimum age for children to start?",
    answer:
      "Children as young as 4 to 5 years old can start our Noorani Qaida curriculum. Our female teacher uses gentle, highly engaging visual methods, games, and short sessions to keep young minds attentive and enthusiastic about Arabic letters and phonetics.",
  },
  {
    question: "Who conducts the classes? Is there a dedicated female teacher?",
    answer:
      "Yes! All classes are taught exclusively by our certified, solo female Quran teacher (an Alimah & Qariyah with authentic recitation Ijazah). Sisters, teenage girls, and young children learn with complete comfort, modesty, and privacy with the same familiar, dedicated teacher every single class.",
  },
  {
    question: "What equipment and software do we need?",
    answer:
      "All you need is a stable internet connection and any computer, laptop, tablet (iPad/Android), or smartphone. Classes are conducted via Zoom or Google Meet with high-definition audio and an interactive screen-shared Quran.",
  },
  {
    question: "How do you handle different international time zones?",
    answer:
      "Our teacher accommodates students across multiple international time zones including the United States, Canada, the United Kingdom, Europe, and the Middle East. You can select class times that seamlessly fit before school, after school, or on weekends.",
  },
  {
    question: "What if I need to cancel or reschedule a class?",
    answer:
      "We understand that family life and school schedules can be unpredictable. Simply message the teacher directly via WhatsApp in advance, and she will happily arrange a makeup class at a convenient alternate time.",
  },
  {
    question: "Do you teach Salah (prayers), Kalimahs, and daily Duas as well?",
    answer:
      "Yes! In addition to Quran recitation and Tajweed, our female teacher includes fundamental Islamic manners, the step-by-step method of Salah (prayer) with translation, 6 Kalimahs, and essential daily Duas (for eating, sleeping, leaving home, etc.) as part of the student's holistic education.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs uppercase font-semibold text-[#A5823E] tracking-widest">
              Got Questions?
            </span>
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123F32] font-normal tracking-tight mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our female teacher, scheduling, curriculum, and trial classes.
          </p>

          <IslamicDivider className="mt-6" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C6A15B] bg-[#F8F5EC]/70 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#123F32] font-semibold pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#123F32] text-[#DFC07D] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-[#C6A15B]/20 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Help Kicker */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F8F5EC] border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-serif text-base text-[#123F32] font-semibold">
              Have another question not listed here?
            </p>
            <p className="text-xs text-slate-600">
              Our academic advisors are available on WhatsApp to answer your questions instantly.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Assalamualaikum, I have a question regarding online classes at The Quran Hub.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1B5846] rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
