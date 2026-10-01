/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route } from './router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { TeachingApproachPage } from './pages/TeachingApproachPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { StudentAchievementsPage } from './pages/StudentAchievementsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VideoModal } from './components/VideoModal';
import { StudentPerformanceItem, Testimonial, MADRASA_CONFIG } from './data/madrasaData';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState<string | undefined>();
  const [activePerformanceItem, setActivePerformanceItem] = useState<StudentPerformanceItem | null>(null);
  const [activeTestimonialItem, setActiveTestimonialItem] = useState<Testimonial | null>(null);

  // Initialize Lenis smooth scroll with respect for prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenTrialModal = (courseName?: string) => {
    setPreSelectedCourse(courseName);
    setIsTrialModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      "As-salamu alaykum, I would like to enquire about online Quran and Islamic classes at Islah Online Madrasa."
    );
    window.open(`https://wa.me/${MADRASA_CONFIG.phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FBF9F5] text-[#151918] flex flex-col font-sans selection:bg-[#C9A45C]/30 selection:text-[#082D7B]">

        {/* 1. Capsule Sticky Navigation */}
        <Navbar
          onOpenTrialModal={handleOpenTrialModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 2. Page Router Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                  onSelectPerformance={(item) => setActivePerformanceItem(item)}
                  onSelectTestimonial={(item) => setActiveTestimonialItem(item)}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route
              path="/curriculum"
              element={
                <CurriculumPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route
              path="/teaching-approach"
              element={
                <TeachingApproachPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route
              path="/workshops"
              element={
                <WorkshopsPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route
              path="/student-achievements"
              element={
                <StudentAchievementsPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                  onSelectPerformance={(item) => setActivePerformanceItem(item)}
                  onSelectTestimonial={(item) => setActiveTestimonialItem(item)}
                />
              }
            />
            <Route
              path="/admissions"
              element={
                <AdmissionsPage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenTrialModal={handleOpenTrialModal}
                  onOpenWhatsApp={handleOpenWhatsApp}
                  onSelectPerformance={(item) => setActivePerformanceItem(item)}
                  onSelectTestimonial={(item) => setActiveTestimonialItem(item)}
                />
              }
            />
          </Routes>
        </main>

        {/* 3. Dark Editorial Footer */}
        <Footer
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenTrialModal={() => handleOpenTrialModal()}
        />

        {/* 4. Floating WhatsApp Action */}
        <FloatingWhatsApp onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 5. Free Trial Booking Modal */}
        <FreeTrialModal
          isOpen={isTrialModalOpen}
          onClose={() => setIsTrialModalOpen(false)}
          preSelectedCourse={preSelectedCourse}
        />

        {/* 6. Video Playback Modal */}
        <VideoModal
          performanceItem={activePerformanceItem}
          testimonialItem={activeTestimonialItem}
          onClose={() => {
            setActivePerformanceItem(null);
            setActiveTestimonialItem(null);
          }}
          onBookTrial={() => handleOpenTrialModal()}
        />

      </div>
    </BrowserRouter>
  );
}
