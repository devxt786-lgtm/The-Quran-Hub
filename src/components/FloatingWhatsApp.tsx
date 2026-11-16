import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, ACADEMY_CONFIG } from '../config';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#123F32] text-white text-xs py-2 px-3.5 rounded-xl shadow-xl border border-[#C6A15B]/40 animate-fade-in relative">
          <span className="font-serif text-[#DFC07D] font-normal">Need assistance?</span>
          <span className="text-[#F8F5EC]/90">Chat with an advisor</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#F8F5EC]/60 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#123F32] border-t border-r border-[#C6A15B]/40 rotate-45 pointer-events-none" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Open WhatsApp chat with The Quran Hub"
        title="Chat on WhatsApp"
      >
        {/* Soft pulse wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-sm" />
      </a>
    </div>
  );
}
