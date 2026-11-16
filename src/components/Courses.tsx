import React, { useState } from 'react';
import { Check, ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { IslamicDivider, IslamicStar } from './IslamicDecor';
import { CourseData, CourseModal } from './CourseModal';
import { getWhatsAppUrl } from '../config';

const COURSES: CourseData[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    arabicTitle: 'القاعدة النورانية',
    tagline: 'Foundation of Arabic Alphabet & Accurate Phonetics',
    image: '/src/assets/images/course_noorani_qaida_1794325113660.jpg',
    alt: 'Traditional Noorani Qaida Arabic learning primer book with wooden pointer',
    level: 'Beginner (No prior Arabic needed)',
    duration: '2 - 3 Months (Self-Paced)',
    idealFor: 'Children (4+) & Sisters (Beginners)',
    description:
      'The essential stepping stone for anyone who wishes to read the Holy Quran from scratch. Focuses on individual Arabic letters, joint letters, vowels (Fatha, Kasra, Damma), Tanween, and Sukoon.',
    features: [
      'Accurate letter pronunciation & Makharij',
      'Recognition of isolated and joined letter shapes',
      'Short and long vowels (Harkaat & Maddah)',
      'Practical exercises with a patient female teacher',
    ],
    syllabus: [
      {
        module: 'Arabic Alphabet & Sounds',
        topics: ['29 Single Arabic letters (Mufradat)', 'Exact throat & tongue articulation points'],
      },
      {
        module: 'Compound Letters & Shapes',
        topics: ['Joint letter forms (Murakkabat)', 'Letter connecting rules (beginning, middle, end)'],
      },
      {
        module: 'Movements & Vowels (Harkaat)',
        topics: ['Zabar, Zair, Peysh recognition', 'Tanween (double vowels) and Noon Sakin rules'],
      },
      {
        module: 'Sukoon, Shaddah & Soft Letters',
        topics: ['Jazm / Sukoon application', 'Tashdeed doubling and silent letters'],
      },
    ],
  },
  {
    id: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    arabicTitle: 'قراءة القرآن الكريم',
    tagline: 'Fluent Recitation with Rhythm & Proper Flow',
    image: '/src/assets/images/course_quran_reading_1794325115810.jpg',
    alt: 'Open Holy Quran pages with gold illumination and clear Arabic script',
    level: 'Elementary to Intermediate',
    duration: '6 - 12 Months (Complete Quran)',
    idealFor: 'Students with basic Qaida knowledge',
    description:
      'Transition from basic letter recognition into continuous, smooth recitation of Quranic verses. Students read directly from the Mushaf with proper rhythm, stopping rules, and daily revision.',
    features: [
      'Full recitation of the 30 Juz with dedicated 1-on-1 guidance',
      'Mastery of Quranic punctuation and stopping signs (Waqf)',
      'Building recitation speed, stamina, and fluency',
      'Daily revision and memorization of common short Surahs',
    ],
    syllabus: [
      {
        module: 'Short Surahs Recitation (Juz 30)',
        topics: ['Surah An-Nas to Surah Ad-Duha', 'Word-by-word guidance and listening'],
      },
      {
        module: 'Stopping & Pausing Signs (Rumuz al-Awqaf)',
        topics: ['Compulsory, permissible, and prohibited stops', 'Breathing control during long verses'],
      },
      {
        module: 'Continuous Nazra Reading',
        topics: ['Surah Al-Baqarah initiation', 'Smooth sentence connection without repetition'],
      },
      {
        module: 'Daily Duas & Islamic Etiquette',
        topics: ['Etiquettes of holding the Holy Quran', 'Everyday Masnoon prayers and Adhkar'],
      },
    ],
  },
  {
    id: 'quran-with-tajweed',
    title: 'Quran with Tajweed',
    arabicTitle: 'تجويد القرآن الكريم',
    tagline: 'Precision Rules & Melodious Tarteel Recitation',
    image: '/src/assets/images/course_quran_tajweed_1794325116648.jpg',
    alt: 'Color-coded Tajweed Holy Quran with annotated recitation rules',
    level: 'Intermediate to Advanced',
    duration: '4 - 8 Months',
    idealFor: 'Sisters & kids wanting to perfect recitation',
    description:
      'Fulfill the Divine command: "And recite the Quran with measured recitation." Learn the theoretical and applied rules of Tajweed, including Noon Sakinah, Meem Sakinah, Mudood, and heavy/light letters.',
    features: [
      'Comprehensive rules of Ahkam An-Noon & Al-Meem',
      'Rules of Qalqalah (echoing sound) & Ghunnah (nasalization)',
      'Tafkheem (heavy) and Tarqeeq (light) letter rules',
      'Vocal pitch control and authentic Islamic Tarteel rhythm',
    ],
    syllabus: [
      {
        module: 'Makharij & Sifat al-Huroof',
        topics: ['Deep throat, tongue, and lip articulation points', 'Inherent letter characteristics (Sifat)'],
      },
      {
        module: 'Noon & Meem Sakinah Rules',
        topics: ['Izhar, Idgham, Iqlab, and Ikhfa', 'Meem Sakinah rules and Ghunnah timings'],
      },
      {
        module: 'Mudood (Prolongations)',
        topics: ['Natural Madd (Asli) vs. Derived Madd (Far’ee)', 'Madd Lazim, Madd Muttasil, Madd Munfasil'],
      },
      {
        module: 'Practical Recitation Preparation',
        topics: ['Comprehensive oral evaluation', 'Personalized recitation review with certified female teacher'],
      },
    ],
  },
];

interface CoursesProps {
  onOpenTrialModal: (preselectedCourse?: string) => void;
}

export function Courses({ onOpenTrialModal }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#F8F5EC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs uppercase font-semibold text-[#A5823E] tracking-widest">
              Structured Islamic Curriculum
            </span>
            <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#123F32] font-normal tracking-tight mb-4 text-balance">
            Our Core Quran Courses
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From first Arabic syllables to advanced melodic Tajweed, each course is guided one-on-one by our dedicated female teacher for sisters and children.
          </p>

          <IslamicDivider className="mt-6" />
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Course Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B271F]">
                  <img
                    src={course.image}
                    alt={course.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Top Level Marker (unboxed text in pill-free style or quiet indicator) */}
                  <div className="absolute top-4 left-4 bg-[#123F32]/90 backdrop-blur-xs text-[#DFC07D] text-xs font-medium px-3 py-1 rounded-md border border-[#C6A15B]/30">
                    {course.level}
                  </div>

                  {/* Arabic script title overlay */}
                  <div className="absolute bottom-3 right-4 text-right">
                    <span className="font-amiri text-2xl text-[#DFC07D] drop-shadow-md">
                      {course.arabicTitle}
                    </span>
                  </div>
                </div>

                {/* Course Body Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.idealFor}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#123F32] font-semibold mb-2 group-hover:text-[#1B5846] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#123F32]/10 text-[#123F32] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Card Action Buttons */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-100/80 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/30 rounded-xl transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>View Syllabus</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(`Assalamualaikum, I am interested in joining the ${course.title} course at The Quran Hub.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-[#123F32] bg-[#F8F5EC] hover:bg-[#25D366]/10 border border-[#C6A15B]/30 hover:border-[#25D366] rounded-xl transition-colors shrink-0"
                    title={`Inquire about ${course.title} via WhatsApp`}
                    aria-label={`Inquire about ${course.title} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenTrialModal(course.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1B5846] rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC07D]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Modal */}
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onSelectTrial={(courseTitle) => onOpenTrialModal(courseTitle)}
        />
      </div>
    </section>
  );
}
