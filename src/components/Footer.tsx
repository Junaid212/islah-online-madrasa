import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle, ArrowUp } from 'lucide-react';
import { IslahLogo } from './IslahLogo';
import { MADRASA_CONFIG } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';
import { useNavigate } from '../router';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenTrialModal: () => void;
  onNavigate?: (page: 'home' | 'about', hashTarget?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenTrialModal, onNavigate }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    if (onNavigate) {
      if (to === '/about') {
        onNavigate('about');
      } else if (to.startsWith('/#')) {
        onNavigate('home', to.replace('/', ''));
      } else {
        onNavigate('home');
      }
    } else {
      navigate(to);
    }
  };

  return (
    <footer className="relative bg-[#151918] text-[#F6F1E7] pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <HeroBgPattern isDark opacity={0.04} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">

          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <IslahLogo theme="dark" size="md" variant="horizontal" className="mb-4" />

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed mb-6 font-sans">
              Islah Online Madrasa provides structured online Quran and authentic Islamic education for children, helping students learn, grow, and build a strong foundation in Deen.
            </p>

            <div className="text-xs text-[#C9A45C] font-mono mb-6">
              Official Portal: {MADRASA_CONFIG.domain}
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#25D366]/20 border border-white/10 flex items-center justify-center text-white hover:text-[#25D366] transition-colors cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Instagram: ${MADRASA_CONFIG.instagramPlaceholder}`);
                }}
                className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#E1306C]/20 border border-white/10 flex items-center justify-center text-white hover:text-[#E1306C] transition-colors"
                title="Instagram Channel"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`YouTube: ${MADRASA_CONFIG.youtubePlaceholder}`);
                }}
                className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#FF0000]/20 border border-white/10 flex items-center justify-center text-white hover:text-red-400 transition-colors"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans">
              <li>
                <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-white transition-colors cursor-pointer">Home</a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-white transition-colors cursor-pointer">About Us</a>
              </li>
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Our Curriculum</a>
              </li>
              <li>
                <a href="/teaching-approach" onClick={(e) => handleLink(e, '/teaching-approach')} className="hover:text-white transition-colors cursor-pointer">Teaching Approach</a>
              </li>
              <li>
                <a href="/workshops" onClick={(e) => handleLink(e, '/workshops')} className="hover:text-white transition-colors cursor-pointer">Workshops & Activities</a>
              </li>
              <li>
                <a href="/student-achievements" onClick={(e) => handleLink(e, '/student-achievements')} className="hover:text-white transition-colors cursor-pointer">Student Achievements</a>
              </li>
              <li>
                <a href="/admissions" onClick={(e) => handleLink(e, '/admissions')} className="hover:text-white transition-colors cursor-pointer">Admissions & Contact</a>
              </li>
            </ul>
          </div>

          {/* Courses (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans">
              <li>
                <a href="/#courses" onClick={(e) => handleLink(e, '/#courses')} className="hover:text-white transition-colors cursor-pointer">Noorani Qaida</a>
              </li>
              <li>
                <a href="/#courses" onClick={(e) => handleLink(e, '/#courses')} className="hover:text-white transition-colors cursor-pointer">Quran with Tajweed</a>
              </li>
              <li>
                <a href="/#courses" onClick={(e) => handleLink(e, '/#courses')} className="hover:text-white transition-colors cursor-pointer">Hifz Program</a>
              </li>
              <li>
                <a href="/#courses" onClick={(e) => handleLink(e, '/#courses')} className="hover:text-white transition-colors cursor-pointer">Islamic Studies</a>
              </li>
              <li>
                <a href="/#courses" onClick={(e) => handleLink(e, '/#courses')} className="hover:text-white transition-colors cursor-pointer">Arabic Language</a>
              </li>
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-sans">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href='' className="hover:text-white transition-colors">
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href='' className="hover:text-white transition-colors">
                  
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>Serving students globally across UAE, Saudi Arabia, Qatar, UK, USA & worldwide.</span>
              </li>
            </ul>

            <div className="mt-5">
              <button
                onClick={onOpenTrialModal}
                className="w-full py-2.5 px-4 bg-[#C9A45C] hover:bg-[#b8934b] text-[#082D7B] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer"
              >
                Book Free Trial
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} Islah Online Madrasa. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
