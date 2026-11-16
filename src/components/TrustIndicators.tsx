import React from 'react';
import { Award, UserCheck, CalendarClock, GraduationCap } from 'lucide-react';

export function TrustIndicators() {
  const indicators = [
    {
      icon: Award,
      title: "Qualified Female Teacher",
      subtitle: "Certified Alimah & Qariyah",
      description: "An experienced, certified female Quran teacher holding authentic recitation Ijazah credentials with patient, gentle teaching methods.",
    },
    {
      icon: UserCheck,
      title: "One-to-One Classes",
      subtitle: "Solo Dedicated Teacher",
      description: "Consistent private lessons with the same dedicated female teacher—no rotating tutors, ensuring personalized rapport and steady progress.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Timings",
      subtitle: "24/7 Global Availability",
      description: "Schedule your sessions at times that suit school, home, or work commitments across US, UK, Canada, and Gulf time zones.",
    },
    {
      icon: GraduationCap,
      title: "Kids & Sisters Welcome",
      subtitle: "Ages 4+ & Female Learners",
      description: "A comfortable, private, and encouraging learning environment tailored specifically for young children and sisters of all ages.",
    },
  ];

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-[#C6A15B]/30 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-start p-4 rounded-xl hover:bg-[#F8F5EC]/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#123F32] text-[#DFC07D] flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-lg text-[#123F32] font-semibold mb-1">
                  {item.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#A5823E] uppercase tracking-wider mb-2">
                  {item.subtitle}
                </p>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
