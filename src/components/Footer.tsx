import React from 'react';
import { Phone, Mail, Globe, ArrowUp, Heart } from 'lucide-react';
import { QuranHubLogo, IslamicStar } from './IslamicDecor';
import { ACADEMY_CONFIG, getWhatsAppUrl } from '../config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B271F] text-[#F8F5EC] border-t border-[#C6A15B]/30 relative overflow-hidden">
      {/* Background Islamic star overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6A15B 1px, transparent 1px), radial-gradient(#C6A15B 1px, #0B271F 1px)`,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Hadith Banner */}
        <div className="mb-14 pb-12 border-b border-[#C6A15B]/20 text-center max-w-3xl mx-auto">
          <p className="font-amiri text-2xl sm:text-3xl text-[#DFC07D] leading-relaxed mb-3">
            «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
          </p>
          <p className="font-serif text-sm sm:text-base text-[#F8F5EC]/90 italic mb-1">
            "The best of you are those who learn the Quran and teach it."
          </p>
          <span className="text-xs text-[#DFC07D]/80 font-mono">— Sahih Al-Bukhari (5027)</span>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C6A15B]/20">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#123F32] border border-[#C6A15B]/45 flex items-center justify-center p-1 shadow-sm">
                <QuranHubLogo className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif text-2xl text-white font-normal">The Quran Hub</span>
                <span className="font-amiri text-xs text-[#DFC07D] block -mt-1">مركز القرآن التعليمي</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F5EC]/75 leading-relaxed mb-6">
              A dedicated online Quran teaching academy providing individualized, one-to-one Quranic education for children and sisters across the globe with a certified, patient female teacher.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#DFC07D] hover:text-white border border-[#C6A15B]/40 hover:border-[#C6A15B] rounded-lg px-3 py-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp: {ACADEMY_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-base text-[#DFC07D] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8F5EC]/80">
              <li>
                <a href="#home" className="hover:text-[#DFC07D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#DFC07D] transition-colors">Our Courses</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DFC07D] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#DFC07D] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DFC07D] transition-colors">Book Free Trial</a>
              </li>
            </ul>
          </div>

          {/* Core Programs */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif text-base text-[#DFC07D] font-semibold mb-4">
              Our Core Courses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8F5EC]/80">
              <li>
                <a href="#courses" className="hover:text-[#DFC07D] transition-colors flex items-center gap-1.5">
                  <IslamicStar className="w-3 h-3 text-[#C6A15B]" />
                  <span>Noorani Qaida (Beginners)</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#DFC07D] transition-colors flex items-center gap-1.5">
                  <IslamicStar className="w-3 h-3 text-[#C6A15B]" />
                  <span>Quran Reading (Nazra)</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#DFC07D] transition-colors flex items-center gap-1.5">
                  <IslamicStar className="w-3 h-3 text-[#C6A15B]" />
                  <span>Quran with Tajweed Rules</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#DFC07D] transition-colors flex items-center gap-1.5">
                  <IslamicStar className="w-3 h-3 text-[#C6A15B]" />
                  <span>Islamic Studies &amp; Daily Duas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Academy Contact */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif text-base text-[#DFC07D] font-semibold mb-4">
              Academy Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F8F5EC]/80">
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#DFC07D] shrink-0 mt-0.5" />
                <span>UK, US, Canada, Europe, Gulf &amp; Australia Time Zones</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#DFC07D] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="hover:text-[#DFC07D] transition-colors break-all"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC07D] shrink-0 mt-0.5" />
                <span>WhatsApp: {ACADEMY_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EC]/60">
          <p>© {new Date().getFullYear()} The Quran Hub. All rights reserved. Dedicated to authentic Quranic learning.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#DFC07D] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
