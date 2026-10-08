import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle, ArrowUp } from 'lucide-react';
import { MADRASA_CONFIG } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';
import { useNavigate, useLocation } from '../router';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenTrialModal: () => void;
  onNavigate?: (page: 'home' | 'about', hashTarget?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenTrialModal, onNavigate }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname === '';

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className={`relative bg-[#061430] text-[#F6F1E7] pb-6 rounded-t-[22px] sm:rounded-t-[48px] lg:rounded-t-[56px] border-t border-white/10 overflow-hidden shadow-[0_-20px_50px_rgba(8,42,97,0.25)] ${
        isHome ? 'pt-42 sm:pt-40 lg:pt-44' : 'pt-16 sm:pt-20 lg:pt-24'
      }`}
    >
      {/* Islamic Background Pattern */}
      <HeroBgPattern isDark opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-8 border-b border-white/10">

          {/* Brand Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Header / Navbar Image Logo Lockup */}
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="flex items-center gap-3.5 mb-5 group cursor-pointer"
              aria-label="Islah Online Madrasa"
            >
              <img
                src="/assets/img/iom-star-logo.webp"
                alt="Islah Online Madrasa"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105 select-none"
              />
              <div className="flex flex-col text-left select-none">
                <span className="font-sans font-bold text-2xl sm:text-[28px] tracking-tight text-white leading-none">
                  islah
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] text-[#C9A45C] font-semibold tracking-widest uppercase leading-none mt-1">
                  Online Madrasa
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed mb-6 font-sans">
              Islah Online Madrasa provides structured online Quran and authentic Islamic education for children, helping students learn, grow, and build a strong foundation in Deen.
            </p>

            {/* <div className="text-xs text-[#C9A45C] font-mono mb-6 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md inline-block">
              Official Portal: {MADRASA_CONFIG.domain}
            </div> */}

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <button
                type="button"
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
                  alert(`Instagram: ${MADRASA_CONFIG.instagramPlaceholder || '@islahonlinemadrasa'}`);
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
                  alert(`YouTube: ${MADRASA_CONFIG.youtubePlaceholder || '@islahonlinemadrasa'}`);
                }}
                className="w-9 h-9 rounded-md bg-white/5 hover:bg-[#FF0000]/20 border border-white/10 flex items-center justify-center text-white hover:text-red-400 transition-colors"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans">
              {/* <li>
                <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-white transition-colors cursor-pointer">Home</a>
              </li> */}
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
              {/* <li>
                <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-white transition-colors cursor-pointer">Contact Us</a>
              </li> */}
            </ul>
          </div>

          {/* Courses / Programs (2 cols) */}
          {/* <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 font-sans">
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Noorani Qaida</a>
              </li>
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Quran with Tajweed</a>
              </li>
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Hifz Program</a>
              </li>
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Islamic Studies</a>
              </li>
              <li>
                <a href="/curriculum" onClick={(e) => handleLink(e, '/curriculum')} className="hover:text-white transition-colors cursor-pointer">Arabic Language</a>
              </li>
            </ul>
          </div> */}

          {/* Contact & Support (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Serving students globally across GCC, UK, USA, Canada & worldwide.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href="callto:+1234567890" className="hover:text-white transition-colors">123 456 7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href={`mailto:${MADRASA_CONFIG.emailDisplay}`} className="hover:text-white transition-colors">
                  {MADRASA_CONFIG.emailDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="w-full py-2.5 px-4 bg-[#C9A45C] hover:bg-[#b8934b] text-[#082A61] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Enquiry Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} Islah Online Madrasa. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a> */}
            <button
              type="button"
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
