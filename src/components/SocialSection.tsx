import React from 'react';
import { Instagram, Youtube, Sparkles, ExternalLink, Play, Heart } from 'lucide-react';
import { MADRASA_CONFIG } from '../data/madrasaData';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

export const SocialSection: React.FC = () => {
  const socialClips = [
    {
      title: "Teacher Tajweed Tip: Mastering the Letters of Madd",
      platform: "YouTube",
      tag: "Recitation Masterclass",
      views: "1.2k views",
      duration: "3:40",
    },
    {
      title: "6-Year-Old Student Completing First Surah in Noorani Qaida",
      platform: "Instagram",
      tag: "Student Milestone",
      views: "4.5k views",
      duration: "0:45",
    },
    {
      title: "Weekly Friday Hadith Reflection for Young Minds",
      platform: "YouTube",
      tag: "Prophetic Manners",
      views: "850 views",
      duration: "4:15",
    },
    {
      title: "How to Build a 15-Minute Daily Quran Habit with Your Kids",
      platform: "Instagram",
      tag: "Parenting Guide",
      views: "2.8k views",
      duration: "1:00",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#FBF9F5] overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
              Community & Media
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
              Life at Islah Online Madrasa
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
              Explore recitation snippets, teacher insights, and weekly parenting reminders across our media channels.
            </p>
          </div>

          {/* Social Links buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Instagram channel: ${MADRASA_CONFIG.instagramPlaceholder}`);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#082D7B] bg-white border border-[#082D7B]/15 rounded-md hover:border-[#082D7B] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>Instagram</span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`YouTube channel: ${MADRASA_CONFIG.youtubePlaceholder}`);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#082D7B] bg-white border border-[#082D7B]/15 rounded-md hover:border-[#082D7B] transition-colors"
            >
              <Youtube className="w-4 h-4 text-[#FF0000]" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Media Clips Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialClips.map((clip, idx) => (
            <div
              key={clip.title}
              className="group bg-white rounded-xl overflow-hidden border border-[#082D7B]/10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video bg-[#001E3C] p-4 flex flex-col justify-between overflow-hidden">
                <IslamicPattern opacity={0.1} strokeColor="#C9A45C" variant="stars" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-[10px] font-semibold text-white">
                    {clip.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[#C9A45C] tabular-nums">
                    {clip.duration}
                  </span>
                </div>

                <div className="relative z-10 my-auto flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#C9A45C] text-[#001E3C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] text-white/60">
                  <span className="flex items-center gap-1">
                    {clip.platform === 'YouTube' ? (
                      <Youtube className="w-3.5 h-3.5 text-red-400" />
                    ) : (
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    )}
                    {clip.platform}
                  </span>
                  <span>{clip.views}</span>
                </div>
              </div>

              {/* Clip Title & Platform Link */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h4 className="font-serif text-sm font-semibold text-[#082D7B] line-clamp-2 mb-3">
                  {clip.title}
                </h4>
                <div className="pt-2 border-t border-[#082D7B]/8 flex items-center justify-between text-xs text-[#082D7B] font-medium">
                  <span>Watch on {clip.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Placeholders note */}
        <div className="mt-8 text-center text-xs text-[#151918]/50">
          Official media channels: {MADRASA_CONFIG.instagramPlaceholder} · {MADRASA_CONFIG.youtubePlaceholder}
        </div>

      </div>
    </section>
  );
};
