import React, { useState } from 'react';
import { CheckCircle2, Award, Calendar, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

export const StudentProgressSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'reading' | 'hifz' | 'tajweed'>('reading');

  const sampleProgressData = {
    reading: {
      studentName: 'Zayd M. (Age 8)',
      startingPoint: 'Noorani Qaida - Lesson 4',
      currentStage: 'Reading directly from Juz 1 with fluency',
      nextGoal: 'Complete Juz Amma Nazirah with Waqf rules',
      milestones: [
        { label: 'Alphabet & Single Letters (Huruf Mufradah)', status: 'Mastered' },
        { label: 'Compound Letter Forms (Murakkabat)', status: 'Mastered' },
        { label: 'Vowel Signs (Harakāt & Tanween)', status: 'Mastered' },
        { label: 'Letters of Madd & Leen', status: 'In Progress' },
        { label: 'Full Quranic Sentence Fluency', status: 'Upcoming' },
      ],
      weeklyHabitDays: 4,
    },
    hifz: {
      studentName: 'Maryam K. (Age 11)',
      startingPoint: 'Last 10 Surahs',
      currentStage: 'Surah Al-Mulk to Surah Al-Qalam (Juz Tabarak)',
      nextGoal: 'Complete oral examination for Juz 29',
      milestones: [
        { label: 'Juz 30 (Juz Amma) Full Memorisation', status: 'Mastered' },
        { label: 'Quarterly Manzil Revision Cycle', status: 'Mastered' },
        { label: 'Surah Al-Mulk Retention Check', status: 'Mastered' },
        { label: 'Surah Al-Qalam (Verses 1–30)', status: 'In Progress' },
        { label: 'Independent Tajweed Verification', status: 'Upcoming' },
      ],
      weeklyHabitDays: 5,
    },
    tajweed: {
      studentName: 'Ibrahim S. (Age 12)',
      startingPoint: 'Basic reading with heavy accent',
      currentStage: 'Ghunnah, Iqlab, and Qalqalah rules application',
      nextGoal: 'Mastery of Sifat al-Huroof and Heavy/Light Raa',
      milestones: [
        { label: 'Makharij Throat & Tongue Letters', status: 'Mastered' },
        { label: 'Noon Sakinah & Tanween Rules', status: 'Mastered' },
        { label: 'Meem Sakinah Rules (Idgham Shafawi)', status: 'Mastered' },
        { label: 'Qalqalah Levels (Sughra & Kubra)', status: 'In Progress' },
        { label: 'Madd Lazim Duration Accuracy', status: 'Upcoming' },
      ],
      weeklyHabitDays: 3,
    },
  };

  const current = sampleProgressData[selectedTrack];

  return (
    <section id="student-progress" className="relative py-20 lg:py-28 bg-[#FBF9F5] overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#082D7B]/8 text-xs font-semibold text-[#082D7B] mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>Transparent Reporting</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
              Every Step Forward <br />
              <span className="italic">Matters to Us</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
              Parents never have to guess what their child is studying. We track milestones, daily attendance, and vocal corrections in clear visual summaries.
            </p>
          </div>

          {/* Track Switcher (Functional buttons) */}
          <div className="inline-flex p-1 bg-[#F6F1E7] rounded-lg border border-[#082D7B]/10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedTrack('reading')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${selectedTrack === 'reading'
                  ? 'bg-[#082D7B] text-white shadow-xs'
                  : 'text-[#151918]/70 hover:text-[#082D7B]'
                }`}
            >
              Qur'an Reading
            </button>
            <button
              onClick={() => setSelectedTrack('hifz')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${selectedTrack === 'hifz'
                  ? 'bg-[#082D7B] text-white shadow-xs'
                  : 'text-[#151918]/70 hover:text-[#082D7B]'
                }`}
            >
              Hifz Track
            </button>
            <button
              onClick={() => setSelectedTrack('tajweed')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${selectedTrack === 'tajweed'
                  ? 'bg-[#082D7B] text-white shadow-xs'
                  : 'text-[#151918]/70 hover:text-[#082D7B]'
                }`}
            >
              Tajweed Mastery
            </button>
          </div>
        </div>

        {/* Dashboard Simulation Container */}
        <div className="bg-white rounded-2xl border border-[#082D7B]/15 shadow-sm p-6 sm:p-10">

          {/* Header Bar with required disclaimer label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#082D7B]/10 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                  Example Progress View
                </span>
                <span className="text-xs bg-[#082D7B]/8 text-[#082D7B] px-2 py-0.5 rounded font-mono">
                  Weekly Update
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#082D7B] font-semibold mt-1">
                {current.studentName}
              </h3>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-[#151918]/60 block">Consistent Habit</span>
              <div className="flex items-center sm:justify-end gap-1.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3.5 h-3.5 rounded-xs transition-colors ${i < current.weeklyHabitDays ? 'bg-[#082D7B]' : 'bg-[#082D7B]/15'
                      }`}
                    title={`Day ${i + 1} completed`}
                  />
                ))}
                <span className="text-xs font-medium text-[#082D7B] ml-1">
                  {current.weeklyHabitDays} Days / Week
                </span>
              </div>
            </div>
          </div>

          {/* Staging Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-[#082D7B]/10 text-sm">
            <div>
              <span className="text-xs text-[#151918]/60 block uppercase tracking-wider mb-1">
                Starting Baseline
              </span>
              <p className="font-medium text-[#151918]/90">
                {current.startingPoint}
              </p>
            </div>

            <div>
              <span className="text-xs text-[#151918]/60 block uppercase tracking-wider mb-1">
                Current Level
              </span>
              <p className="font-medium text-[#082D7B]">
                {current.currentStage}
              </p>
            </div>

            <div>
              <span className="text-xs text-[#151918]/60 block uppercase tracking-wider mb-1">
                Next Milestone Goal
              </span>
              <p className="font-medium text-[#C9A45C]">
                {current.nextGoal}
              </p>
            </div>
          </div>

          {/* Milestones Stepper */}
          <div className="pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#082D7B] mb-4">
              Curriculum Milestone Status
            </h4>

            <div className="space-y-3">
              {current.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#FBF9F5] border border-[#082D7B]/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C9A45C] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#151918]/85">
                      {m.label}
                    </span>
                  </div>

                  <div>
                    {m.status === 'Mastered' && (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Mastered</span>
                      </span>
                    )}
                    {m.status === 'In Progress' && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#C9A45C] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                        <span>Current Focus</span>
                      </span>
                    )}
                    {m.status === 'Upcoming' && (
                      <span className="text-xs text-[#151918]/40 font-medium">
                        Upcoming Stage
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note on genuine data */}
          <div className="mt-8 pt-4 border-t border-[#082D7B]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#151918]/60 gap-2">
            <span>
              Parents receive direct audio recordings and notes via WhatsApp after each live lesson.
            </span>
            <span className="italic">
              * Example Progress View for demonstration. Real student dashboards are configured upon enrollment.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
