import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, BookOpen, Quote } from 'lucide-react';
import { StudentPerformanceItem, Testimonial } from '../data/madrasaData';
import { IslamicPattern } from './IslamicPattern';

interface VideoModalProps {
  performanceItem?: StudentPerformanceItem | null;
  testimonialItem?: Testimonial | null;
  onClose: () => void;
  onBookTrial: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  performanceItem,
  testimonialItem,
  onClose,
  onBookTrial,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!performanceItem && !testimonialItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#001E3C] text-white rounded-2xl shadow-2xl border border-[#C9A45C]/30 overflow-hidden flex flex-col max-h-[92vh]">

        {/* Top Control Bar */}
        <div className="p-4 bg-black/40 flex items-center justify-between border-b border-white/10 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              {performanceItem ? 'Student Recitation Showcase' : 'Parent Video Testimonial'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Player Area */}
        <div className="relative aspect-video bg-gradient-to-b from-[#082D7B] via-[#001E3C] to-black flex items-center justify-center p-6 overflow-hidden">
          <IslamicPattern opacity={0.12} strokeColor="#C9A45C" variant="stars" />

          {/* Simulated Educational Player Content */}
          <div className="relative z-10 text-center max-w-lg">

            {performanceItem && (
              <>
                <div className="w-16 h-16 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-[#C9A45C]" />
                </div>
                <div className="font-arabic text-2xl sm:text-3xl text-[#F6F1E7] mb-2 leading-relaxed">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
                <p className="text-xs text-[#C9A45C] font-semibold uppercase tracking-widest mb-1">
                  {performanceItem.surahOrTopic}
                </p>
                {/* <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {performanceItem.title}
                </h3> */}
              </>
            )}

            {testimonialItem && (
              <>
                <div className="w-16 h-16 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] mx-auto mb-4 flex items-center justify-center">
                  <Quote className="w-7 h-7 text-[#C9A45C]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                  "{testimonialItem.keyHighlight}"
                </h3>
                <p className="text-xs text-[#C9A45C]">
                  {testimonialItem.parentName} · {testimonialItem.location}
                </p>
              </>
            )}

            {/* Sound Wave Animation Visualizer */}
            <div className="flex items-center justify-center gap-1.5 h-8 my-4">
              {[40, 75, 100, 60, 90, 45, 80, 50, 95, 70, 35, 85].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 bg-[#C9A45C] rounded-full transition-all duration-300 ${isPlaying ? 'opacity-90' : 'opacity-30'
                    }`}
                  style={{
                    height: isPlaying ? `${(h * (progress % 50 + 50)) / 100}%` : '20%',
                  }}
                />
              ))}
            </div>

          </div>

          {/* Bottom Player Overlay Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col gap-2">

            {/* Scrubber Bar */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-[#C9A45C] h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 text-white/70 hover:text-white cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-[11px] tabular-nums text-white/70">
                  {performanceItem?.duration || testimonialItem?.videoDuration || '1:30'}
                </span>
              </div>

              {/* <div className="text-[11px] text-[#C9A45C] font-medium">
                Live Madrasa Audio Recording
              </div> */}
            </div>

          </div>

        </div>

        {/* Narrative / Contextual Notes */}
        {/* <div className="p-6 bg-[#082D7B] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <div className="text-left">
            <h4 className="font-serif text-base text-white font-medium">
              Experience this standard of learning for your child
            </h4>
            <p className="text-xs text-white/70 mt-0.5 font-sans">
              Book a free trial class to meet an instructor and evaluate your child's pace.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookTrial();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-[#C9A45C] hover:bg-[#dfba74] text-[#001E3C] font-semibold text-xs rounded-md shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Trial Class</span>
          </button>
        </div> */}

      </div>
    </div>
  );
};
