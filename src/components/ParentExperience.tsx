import React from 'react';
import { MessageSquare, CalendarClock, ShieldCheck, HeartHandshake, Award, Compass } from 'lucide-react';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

export const ParentExperience: React.FC = () => {
  const parentHighlights = [
    {
      title: "Direct WhatsApp Communication",
      description: "Direct line to your child's teacher and administration. No waiting days for an email reply.",
      icon: MessageSquare,
    },
    {
      title: "Recorded Audio Updates",
      description: "Listen to your child reciting with the teacher, allowing you to celebrate their improvements together.",
      icon: Award,
    },
    {
      title: "Flexible Timezone Scheduling",
      description: "Convenient evening and weekend slots tailored around school hours in the UK, USA, Canada, and Gulf.",
      icon: CalendarClock,
    },
    {
      title: "Vetted & Safe Classrooms",
      description: "Parent-supervised virtual classrooms with family-friendly safeguarding and respectful decorum.",
      icon: ShieldCheck,
    },
    {
      title: "1-on-1 Individual Focus",
      description: "Your child has the instructor's complete attention without the distractions of crowded classrooms.",
      icon: HeartHandshake,
    },
    {
      title: "Clear, Manageable Milestones",
      description: "Structured pathways designed to avoid burnout, keeping your child inspired to love learning.",
      icon: Compass,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#F6F1E7]/50 border-t border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Family-Centered Education
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
            Peace of Mind <br />
            <span className="italic">for Every Parent</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            We partner with you to make Islamic education a joyful, reliable, and stress-free part of your family routine.
          </p>
        </div>

        {/* 6 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parentHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-[#082D7B]/10 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#082D7B]/8 text-[#082D7B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#082D7B]" />
                </div>
                <h3 className="font-serif text-lg text-[#082D7B] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#151918]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
