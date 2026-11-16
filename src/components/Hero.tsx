import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Users } from 'lucide-react';
import { IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl } from '../config';
import heroQuranImg from '../assets/images/hero_quran_rehal_1794325114695.jpg';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export function Hero({ onOpenTrialModal }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#123F32] text-[#F8F5EC] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Islamic Geometric Star Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6A15B 1px, transparent 1px), radial-gradient(#C6A15B 1px, #123F32 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric radial glow */}
      <div 
        className="absolute -top-32 right-1/4 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Arabic Bismillah Kicker */}
            <div className="flex items-center gap-2 mb-4 text-[#DFC07D]">
              <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
              <span className="font-amiri text-lg sm:text-xl font-normal tracking-wide">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] tracking-tight mb-6 text-balance">
              Learn the Holy Quran with{' '}
              <span className="text-[#DFC07D] italic underline decoration-[#C6A15B]/40 underline-offset-8">
                Confidence &amp; Ease
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F8F5EC]/85 font-normal leading-relaxed mb-8 max-w-2xl">
              Personalized, one-to-one live Quran classes tailored for children and sisters.
              Learn Noorani Qaida, Nazra Quran, and Tajweed with a certified, patient female Quran teacher from the comfort and privacy of your home.
            </p>

            {/* Action Buttons: Book Trial + WhatsApp */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#123F32] bg-[#C6A15B] hover:bg-[#DFC07D] active:scale-98 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-4 h-4 text-[#123F32]" />
              </button>

              <a
                href={getWhatsAppUrl("Assalamualaikum, I would like to book a free trial class with the female teacher at The Quran Hub.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-medium text-[#F8F5EC] bg-[#0B271F]/80 hover:bg-[#0B271F] border border-[#C6A15B]/40 hover:border-[#C6A15B] rounded-xl transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Clean Unboxed Trust Metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#F8F5EC]/75">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DFC07D]" />
                <span>3-Day Free Trial</span>
              </span>
              <span aria-hidden="true" className="text-[#C6A15B]/50">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#DFC07D]" />
                <span>Flexible Schedule</span>
              </span>
              <span aria-hidden="true" className="text-[#C6A15B]/50">·</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#DFC07D]" />
                <span>Dedicated Female Teacher</span>
              </span>
            </div>
          </div>

          {/* Right Column: Quran Photography Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative arched border framing */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-2xl bg-[#0B271F]">
                {/* Visual Asset */}
                <img
                  src={heroQuranImg}
                  alt="Holy Quran on an ornate wooden rehal stand with peaceful sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full aspect-[4/3] object-cover hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle scrim for reverence and contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123F32]/80 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle callout card pinned inside bottom frame */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B271F]/90 backdrop-blur-md border border-[#C6A15B]/30 rounded-xl p-3.5 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm sm:text-base text-white font-normal">
                        Certified Female Quran Teacher
                      </p>
                      <p className="text-xs text-[#DFC07D] font-normal">
                        Solo dedicated instructor · Ijazah certified &amp; fluent in English &amp; Urdu
                      </p>
                    </div>
                    <IslamicStar className="w-5 h-5 text-[#C6A15B] shrink-0 ml-2" />
                  </div>
                </div>
              </div>

              {/* Decorative corner accent element */}
              <div 
                className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#C6A15B]/50 rounded-bl-xl pointer-events-none hidden sm:block" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#C6A15B]/50 rounded-tr-xl pointer-events-none hidden sm:block" 
                aria-hidden="true" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
