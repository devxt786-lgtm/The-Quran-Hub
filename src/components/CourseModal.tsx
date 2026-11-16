import React from 'react';
import { X, Check, ArrowRight, MessageCircle, BookOpen, Clock, Users } from 'lucide-react';
import { IslamicStar } from './IslamicDecor';
import { getWhatsAppUrl } from '../config';

export interface CourseData {
  id: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  image: string;
  alt: string;
  level: string;
  duration: string;
  idealFor: string;
  description: string;
  features: string[];
  syllabus: {
    module: string;
    topics: string[];
  }[];
}

interface CourseModalProps {
  course: CourseData | null;
  onClose: () => void;
  onSelectTrial: (courseTitle: string) => void;
}

export function CourseModal({ course, onClose, onSelectTrial }: CourseModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C6A15B]/30 p-6 sm:p-8 z-10 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close syllabus modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-[#A5823E]">
          <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
          <span className="font-amiri text-lg font-normal">{course.arabicTitle}</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#123F32] font-semibold mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-slate-600 mb-6">{course.description}</p>

        {/* Metadata row */}
        <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#F8F5EC] rounded-xl border border-[#C6A15B]/20 text-xs mb-6">
          <div>
            <span className="text-slate-500 block mb-0.5">Level</span>
            <span className="font-semibold text-[#123F32]">{course.level}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Pace / Duration</span>
            <span className="font-semibold text-[#123F32]">{course.duration}</span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Recommended For</span>
            <span className="font-semibold text-[#123F32] truncate block">{course.idealFor}</span>
          </div>
        </div>

        {/* Syllabus Breakdown */}
        <div className="mb-6">
          <h4 className="font-serif text-lg text-[#123F32] font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C6A15B]" />
            <span>Curriculum Outline</span>
          </h4>

          <div className="space-y-3">
            {course.syllabus.map((s, idx) => (
              <div key={s.module} className="border border-slate-100 rounded-xl p-3.5 bg-slate-50/50">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#123F32]">
                    Module 0{idx + 1}: {s.module}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                  {s.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <a
            href={getWhatsAppUrl(`Assalamualaikum, I am inquiring about the ${course.title} course syllabus.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#123F32] bg-[#F8F5EC] hover:bg-[#F3ECE0] border border-[#C6A15B]/30 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ask via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectTrial(course.title);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1B5846] rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <span>Book Free Trial for this Course</span>
            <ArrowRight className="w-4 h-4 text-[#DFC07D]" />
          </button>
        </div>
      </div>
    </div>
  );
}
