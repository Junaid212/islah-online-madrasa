import React from 'react';
import { Award, BookOpen, Globe2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TEACHERS, Teacher } from '../data/madrasaData';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

export const TeachersSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F6F1E7]/60 border-t border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Qualified Faculty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
            Learn From Teachers <br />
            <span className="italic">Who Care Deeply</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            Every instructor at Islah combines authentic Quranic recitation credentials with patient, child-friendly pedagogical training.
          </p>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, idx) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#082D7B]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Teacher Editorial Portrait Box */}
              <div className="relative h-60 bg-gradient-to-b from-[#082D7B] to-[#001E3C] p-6 flex flex-col justify-between overflow-hidden">
                <IslamicPattern opacity={0.08} strokeColor="#C9A45C" variant="stars" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-[11px] text-[#C9A45C] font-medium">
                    Verified Instructor
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Award className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                </div>

                {/* Stylized Scholarly Silhouette & Monogram */}
                <div className="relative z-10 flex flex-col items-center text-center my-auto">
                  <div className="w-20 h-20 rounded-full border-2 border-[#C9A45C]/50 bg-[#082D7B] flex items-center justify-center shadow-inner mb-2 overflow-hidden">
                    {teacher.image ? (
                      <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-serif text-2xl text-[#C9A45C] font-bold">
                        {teacher.name.replace('[', '').charAt(0)}
                      </span>
                    )}
                  </div>
                  <p className="font-serif text-lg text-white font-medium">
                    {teacher.name}
                  </p>
                  <p className="text-xs text-[#C9A45C]">
                    {teacher.title}
                  </p>
                </div>
              </div>

              {/* Teacher Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Qualification Label */}
                  <div className="mb-4 pb-4 border-b border-[#082D7B]/8">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#082D7B] block mb-0.5">
                      Credentials
                    </span>
                    <p className="text-xs text-[#151918]/80 font-medium">
                      {teacher.qualification}
                    </p>
                  </div>

                  {/* Specialisation */}
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#082D7B] block mb-0.5">
                      Specialisation
                    </span>
                    <p className="text-xs text-[#151918]/70 leading-relaxed">
                      {teacher.specialisation}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#151918]/75 leading-relaxed font-sans mb-6">
                    {teacher.bio}
                  </p>
                </div>

                {/* Languages & Experience footer */}
                <div className="pt-4 border-t border-[#082D7B]/8 flex items-center justify-between text-[11px] text-[#151918]/60">
                  <div className="flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-[#082D7B]/60" />
                    <span>{teacher.languages.join(', ')}</span>
                  </div>
                  <span className="italic text-[#082D7B]">
                    {teacher.experiencePlaceholder}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Teacher Safeguarding note */}
        <div className="mt-12 p-4 rounded-xl bg-white/80 border border-[#082D7B]/10 max-w-2xl mx-auto flex items-center gap-3 text-xs text-[#151918]/75">
          <ShieldCheck className="w-5 h-5 text-[#082D7B] shrink-0" />
          <span>
            <strong>Our Faculty Policy:</strong> All teachers undergo rigorous verification in Tajweed accuracy, child safeguarding, and ethical pedagogy. Male and female instructors available upon family preference.
          </span>
        </div>

      </div>
    </section>
  );
};
