/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedCourseForTrial, setSelectedCourseForTrial] = useState<string>('Noorani Qaida');

  const handleOpenTrialModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForTrial(courseName);
    }
    setTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] text-slate-800 font-sans flex flex-col selection:bg-[#123F32] selection:text-[#DFC07D] overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 3. Trust Indicators Strip */}
        <TrustIndicators />

        {/* 4. Three Course Cards */}
        <Courses onOpenTrialModal={handleOpenTrialModal} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. How It Works Section */}
        <HowItWorks onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 7. Student Testimonials (clearly marked sample content) */}
        <Testimonials />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Contact Section with WhatsApp CTA */}
        <ContactSection />
      </main>

      {/* 10. Footer with Academy Information */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Free Trial Booking Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrialModal}
        initialCourse={selectedCourseForTrial}
      />
    </div>
  );
}
