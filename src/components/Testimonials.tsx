import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';

export function Testimonials() {
  const sampleTestimonials = [
    {
      id: 1,
      quote:
        "My 6-year-old son started Noorani Qaida with zero Arabic knowledge. Within two months with his female teacher, he is identifying joined letters and pronouncing Makharij correctly. She is incredibly patient, gentle, and encouraging with young kids.",
      author: "Sister Amina K.",
      role: "Mother of 6-year-old student",
      location: "London, UK",
      course: "Noorani Qaida",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "As a busy working sister, finding a dedicated female teacher with flexible evening hours was an answered prayer. Her Tajweed instruction is clear, deeply knowledgeable, and methodical. My recitation rules and confidence have improved tremendously.",
      author: "Sister Fatima R.",
      role: "Adult Sister Learner",
      location: "Toronto, Canada",
      course: "Quran with Tajweed",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Having one dedicated female teacher for my 11-year-old daughter made all the difference. Our daughter feels completely at ease, looks forward to every lesson, and the teacher provides direct WhatsApp updates on every Juz completed.",
      author: "Sister Zainab M.",
      role: "Mother of 11-year-old student",
      location: "Dallas, Texas, USA",
      course: "Quran Reading (Nazra)",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F5EC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs uppercase font-semibold text-[#A5823E] tracking-widest">
              Student &amp; Parent Experiences
            </span>
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123F32] font-normal tracking-tight mb-4 text-balance">
            Voices of Our Learning Community
          </h2>
          
          {/* Explicit Sample Content Notice */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-md text-xs text-amber-800 mt-1">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Sample Student Feedback (Illustrative Content)</span>
          </div>

          <IslamicDivider className="mt-6" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-[#C6A15B]/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C6A15B]/40" />
                </div>

                {/* Course label */}
                <p className="text-xs font-semibold text-[#123F32] mb-3">
                  Course: {t.course}
                </p>

                {/* Quote Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100">
                <p className="font-serif text-base text-[#123F32] font-semibold">
                  {t.author}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span>{t.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Subtext */}
        <p className="text-center text-xs text-slate-500 mt-10 max-w-xl mx-auto">
          *Note: Content above represents illustrative sample testimonials demonstrating typical student learning progression and parent communication at The Quran Hub.
        </p>

      </div>
    </section>
  );
}
