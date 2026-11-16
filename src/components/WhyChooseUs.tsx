import React from 'react';
import { UserCheck, ShieldCheck, Clock, LineChart, CheckCircle2 } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';
import academySereneImg from '../assets/images/academy_serene_setting_1794325114981.jpg';

export function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Individualized 1-on-1 Guidance",
      description:
        "Every single minute is dedicated solely to you or your child with our dedicated female teacher. She corrects pronunciation immediately, repeating as many times as needed with patience, care, and gentle encouragement.",
      highlight: "100% focused attention at your individual pace",
    },
    {
      number: "02",
      title: "Dedicated Solo Female Teacher (Alimah & Qariyah)",
      description:
        "Learn directly with our certified female Quran teacher holding authentic Ijazah recitation credentials. Because she is a solo instructor, you or your child will always have the exact same familiar, trusted teacher every class—never rotating strangers.",
      highlight: "Consistent teacher for sisters & kids with zero staff rotations",
    },
    {
      number: "03",
      title: "Flexible Scheduling & Rescheduling",
      description:
        "Life is busy. Choose class slots that seamlessly fit your family routine. If a school event, holiday, or illness comes up, easily coordinate on WhatsApp to arrange a makeup class without losing your lesson.",
      highlight: "Flexible hours adapted to your international time zone",
    },
    {
      number: "04",
      title: "Interactive Classroom & Parent Progress Updates",
      description:
        "Our digital sessions feature clear audio, interactive color-coded Mushaf displays, and digital whiteboards. Parents receive direct updates tracking their child's lessons, letter recognition, and Tajweed progress.",
      highlight: "Direct communication with the teacher & clear milestone tracking",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs uppercase font-semibold text-[#A5823E] tracking-widest">
              The Quran Hub Difference
            </span>
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123F32] font-normal tracking-tight mb-4 text-balance">
            Why Choose The Quran Hub?
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We combine authentic Islamic Quranic tradition with modern, patient online pedagogy, ensuring your family develops a lifelong love for the Book of Allah.
          </p>

          <IslamicDivider className="mt-6" />
        </div>

        {/* 2-Column Showcase: Editorial Image on Left, 4 Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academy Atmosphere & Core Values */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-xl bg-[#0B271F]">
              <img
                src={academySereneImg}
                alt="Serene Islamic academy interior with carved archways and open Holy Quran"
                referrerPolicy="no-referrer"
                className="w-full h-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123F32]/90 via-[#123F32]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="font-amiri text-xl text-[#DFC07D] mb-1">
                  إِنَّ هَٰذَا ٱلْقُرْءَانَ يَهْدِى لِلَّتِى هِىَ أَقْوَمُ
                </p>
                <p className="font-serif text-sm text-[#F8F5EC]/90 italic">
                  "Indeed, this Quran guides to that which is most suitable."
                </p>
                <span className="text-xs text-[#DFC07D]/80 block mt-1 font-mono">Surah Al-Isra (17:9)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Benefits Grid */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="p-6 rounded-2xl bg-[#F8F5EC] border border-[#C6A15B]/25 hover:border-[#C6A15B]/60 transition-all text-left flex flex-col sm:flex-row gap-5 items-start"
              >
                {/* Number Indicator */}
                <div className="w-12 h-12 rounded-xl bg-[#123F32] text-[#DFC07D] font-serif text-lg font-semibold flex items-center justify-center shrink-0 shadow-xs">
                  {benefit.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[#123F32] font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {benefit.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123F32]">
                    <CheckCircle2 className="w-4 h-4 text-[#A5823E] shrink-0" />
                    <span>{benefit.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
