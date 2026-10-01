import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { WhyIslah } from '../components/WhyIslah';
import { AboutSection } from '../components/AboutSection';
import { VisionMission } from '../components/VisionMission';
import { CoursesSection } from '../components/CoursesSection';
import { LearningJourney } from '../components/LearningJourney';
import { TeachingMethod } from '../components/TeachingMethod';
import { TeachersSection } from '../components/TeachersSection';
import { StudentPerformance } from '../components/StudentPerformance';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { StudentProgressSection } from '../components/StudentProgressSection';
import { ParentExperience } from '../components/ParentExperience';
import { SocialSection } from '../components/SocialSection';
import { FaqSection } from '../components/FaqSection';
import { AdmissionSection } from '../components/AdmissionSection';
import { FinalCta } from '../components/FinalCta';
import { StudentPerformanceItem, Testimonial } from '../data/madrasaData';

interface HomePageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
  onSelectPerformance: (item: StudentPerformanceItem) => void;
  onSelectTestimonial: (item: Testimonial) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
  onSelectPerformance,
  onSelectTestimonial,
}) => {
  useEffect(() => {
    document.title = "Islah Online Madrasa | Online Quran & Islamic Education";
  }, []);

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        onOpenTrialModal={() => onOpenTrialModal()}
        onExploreCourses={handleExploreCourses}
        onOpenWhatsApp={onOpenWhatsApp}
      />

      {/* 2. Scroll Expand About Section */}
      <AboutSection
        onOpenTrialModal={() => onOpenTrialModal()}
        onOpenWhatsApp={onOpenWhatsApp}
      />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. Why Islah */}
      <WhyIslah onOpenTrialModal={() => onOpenTrialModal()} />

      {/* 5. Vision & Mission */}
      {/* <VisionMission /> */}

      {/* 6. Courses Section */}
      <CoursesSection
        onOpenTrialModal={onOpenTrialModal}
        onOpenWhatsApp={onOpenWhatsApp}
      />

      {/* 7. Learning Journey */}
      <LearningJourney onOpenTrialModal={() => onOpenTrialModal()} />

      {/* 8. Teaching Methodology */}
      <TeachingMethod />

      {/* 9. Teachers Section */}
      <TeachersSection />

      {/* 10. Student Performance Gallery */}
      <StudentPerformance onSelectPerformance={onSelectPerformance} />

      {/* 11. Parent Testimonials */}
      <TestimonialsSection onPlayVideoTestimonial={onSelectTestimonial} />

      {/* 12. Student Progress Dashboard */}
      <StudentProgressSection />

      {/* 13. Parent Experience */}
      <ParentExperience />

      {/* 14. Social Media (Life at Islah) */}
      <SocialSection />

      {/* 15. Admission / WhatsApp Major Conversion CTA */}
      <AdmissionSection
        onOpenTrialModal={() => onOpenTrialModal()}
        onOpenWhatsApp={onOpenWhatsApp}
      />

      {/* 16. FAQ Accordion */}
      <FaqSection onOpenWhatsApp={onOpenWhatsApp} />

      {/* 17. Final Immersive CTA */}
      <FinalCta onOpenTrialModal={() => onOpenTrialModal()} />
    </>
  );
};
