import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { QuranHubLogo } from './IslamicDecor';
import { getWhatsAppUrl, ACADEMY_CONFIG } from '../config';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#123F32]/95 backdrop-blur-md shadow-md border-b border-[#C6A15B]/20 py-3'
            : 'bg-[#123F32] border-b border-[#C6A15B]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
              aria-label="The Quran Hub Home"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0B271F] border border-[#C6A15B]/35 flex items-center justify-center p-1 shadow-sm transition-transform group-hover:scale-105">
                <QuranHubLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-white tracking-wide font-normal">
                  The Quran Hub
                </span>
                <span className="font-amiri text-xs text-[#DFC07D] tracking-wider -mt-1">
                  مركز القرآن التعليمي
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F8F5EC]/90">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#DFC07D] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6A15B] hover:after:w-full after:transition-all whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Quick WhatsApp */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#DFC07D] hover:text-white border border-[#C6A15B]/40 hover:border-[#C6A15B] rounded-lg transition-colors whitespace-nowrap"
                title="Chat with The Quran Hub on WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#123F32] bg-[#C6A15B] hover:bg-[#DFC07D] active:scale-95 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F8F5EC] hover:bg-[#0B271F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#123F32] border-l border-[#C6A15B]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C6A15B]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0B271F] border border-[#C6A15B]/35 flex items-center justify-center p-0.5">
                    <QuranHubLogo className="w-full h-full" />
                  </div>
                  <span className="font-serif text-lg text-white font-normal">The Quran Hub</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-[#F8F5EC]/80 hover:text-white hover:bg-[#0B271F]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-[#F8F5EC] hover:bg-[#0B271F] hover:text-[#DFC07D] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Actions */}
            <div className="pt-6 border-t border-[#C6A15B]/20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#123F32] bg-[#C6A15B] hover:bg-[#DFC07D] rounded-lg shadow-sm transition-all"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#DFC07D] bg-[#0B271F] border border-[#C6A15B]/40 hover:border-[#C6A15B] rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-[#DFC07D]" />
                <span>WhatsApp: {ACADEMY_CONFIG.phoneDisplay}</span>
              </a>

              <p className="text-center text-xs text-[#F8F5EC]/60 pt-2 font-amiri">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
