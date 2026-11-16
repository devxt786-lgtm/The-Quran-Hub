import React from 'react';
import { MessageSquare, CalendarCheck, Laptop, ArrowRight } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl } from '../config';

interface HowItWorksProps {
  onOpenTrialModal: () => void;
}

export function HowItWorks({ onOpenTrialModal }: HowItWorksProps) {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      subtitle: 'Message via WhatsApp or Online Form',
      description:
        'Reach out to our female teacher directly via WhatsApp or submit our 60-second trial request form with your basic learning preferences.',
      icon: MessageSquare,
      action: 'Quick Inquiry',
    },
    {
      step: '02',
      title: 'Book a Free Trial',
      subtitle: 'Select Schedule with Your Female Teacher',
      description:
        'Choose convenient days and time slots that fit your family’s routine. Learn directly with our certified female Quran teacher at your preferred pace.',
      icon: CalendarCheck,
      action: 'Zero Obligation',
    },
    {
      step: '03',
      title: 'Start Learning',
      subtitle: 'Join Your 1-on-1 Virtual Classroom',
      description:
        'Log into your interactive lesson via Zoom or Google Meet on computer, tablet, or phone. Experience 3 full trial classes before making any decision.',
      icon: Laptop,
      action: 'Learn with Ease',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#123F32] text-[#F8F5EC] relative overflow-hidden">
      {/* Background Islamic star overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6A15B 1px, transparent 1px), radial-gradient(#C6A15B 1px, #123F32 1px)`,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#DFC07D]" />
            <span className="text-xs uppercase font-semibold text-[#DFC07D] tracking-widest">
              Simple 3-Step Process
            </span>
            <IslamicStar className="w-4 h-4 text-[#DFC07D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4 text-balance">
            How It Works
          </h2>
          
          <p className="text-base sm:text-lg text-[#F8F5EC]/80 leading-relaxed">
            Begin your Quran learning journey in three effortless steps. No registration fees, no credit card required upfront.
          </p>

          <IslamicDivider className="mt-6" />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#0B271F] rounded-2xl p-8 border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all flex flex-col justify-between group shadow-lg text-left"
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#DFC07D]">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#123F32] border border-[#C6A15B]/40 text-[#DFC07D] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-[#DFC07D] font-medium tracking-wide mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#F8F5EC]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C6A15B]/20 flex items-center justify-between text-xs text-[#DFC07D]">
                  <span>{item.action}</span>
                  <IslamicStar className="w-3.5 h-3.5 text-[#C6A15B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner below steps */}
        <div className="mt-14 max-w-2xl mx-auto text-center bg-[#0B271F]/80 border border-[#C6A15B]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
          <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
            Ready to experience a free trial lesson?
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F5EC]/80 mb-6">
            Get evaluated by our certified female teacher and discover personalized learning at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#123F32] bg-[#C6A15B] hover:bg-[#DFC07D] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Book Your Free Trial</span>
              <ArrowRight className="w-4 h-4 text-[#123F32]" />
            </button>
            <a
              href={getWhatsAppUrl("Assalamualaikum, I'd like to book my free trial class as per the 3 steps on your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#F8F5EC] border border-[#C6A15B]/50 hover:bg-[#123F32] rounded-xl transition-all"
            >
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
