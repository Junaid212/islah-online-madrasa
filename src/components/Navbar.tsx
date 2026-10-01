import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { MADRASA_CONFIG } from '../data/madrasaData';
import { useNavigate, useLocation } from '../router';

interface NavbarProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAbout = pathname === '/about' || pathname === '/about/';
  const isHome = pathname === '/' || pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkIsActive = (to: string) => {
    if (to === '/') {
      return pathname === '/' || pathname === '';
    }
    return pathname === to || pathname.startsWith(to + '/');
  };

  const navLinks = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'about', label: 'About Us', to: '/about' },
    { key: 'curriculum', label: 'Our Curriculum', to: '/curriculum' },
    { key: 'teaching-approach', label: 'Teaching Approach', to: '/teaching-approach' },
    { key: 'workshops', label: 'Workshops', to: '/workshops' },
    { key: 'student-achievements', label: 'Achievements', to: '/student-achievements' },
    { key: 'admissions', label: 'Contact Us', to: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(to);
  };

  return (
    <>
      {/* Floating Header Wrapper */}
      <header
        className={`fixed left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300 ${
          isScrolled ? 'top-2 sm:top-3.5' : 'top-3 sm:top-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Main Capsule Navbar Assembly */}
          <div className="relative pointer-events-auto flex items-center w-full">
            
            {/* 1. Left Islamic 8-Pointed Star Logo Badge (Overhanging Capsule) */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="group relative z-20 shrink-0 -mr-4 sm:-mr-5 focus-visible:outline-2 focus-visible:outline-[#082D7B] rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer"
              aria-label="Islah Online Madrasa Home"
            >
              <img
                src="/assets/img/iom-star-logo.webp"
                alt="Islah Online Madrasa"
                className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain drop-shadow-[0_4px_14px_rgba(8,45,123,0.18)] select-none"
              />
            </a>

            {/* 2. White Capsule Pill Body (Only right side rounded) */}
            <div
              className={`flex-1 min-h-[52px] sm:min-h-[54px] bg-white/95 backdrop-blur-md rounded-r-full rounded-l-none border border-l-0 border-[#082D7B]/12 pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-1.5 sm:py-2 flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300 ${
                isScrolled
                  ? 'shadow-[0_12px_36px_-6px_rgba(8,45,123,0.12)] border-[#082D7B]/20'
                  : 'shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Brand Typography Lockup (Beside logo with bit gap) */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
                className="flex flex-col text-left select-none shrink-0 group focus-visible:outline-none cursor-pointer"
                aria-label="Islah Online Madrasa"
              >
                <span className="font-sans font-bold text-2xl sm:text-xl md:text-2xl tracking-tight text-[#082D7B] group-hover:text-[#2563EB] transition-colors leading-none">
                  islah
                </span>
                <span className="font-mono text-[6px] sm:text-[7px] text-[#082D7B] font-medium tracking-wide leading-none mt-1">
                  Online Madrasa
                </span>
              </a>

              {/* Navigation Links (Desktop) */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium text-[#334155] ml-2">
                {navLinks.map((link) => {
                  const isActive = checkIsActive(link.to);

                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={(e) => handleLinkClick(e, link.to)}
                      className={`relative font-medium transition-colors duration-200 whitespace-nowrap py-1 cursor-pointer ${
                        isActive
                          ? 'text-[#082D7B] font-bold'
                          : 'text-[#334155] hover:text-[#082D7B]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#C9A45C] rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                {/* WhatsApp Pill Button (Outline style from screenshot) */}
                {/* <button
                  onClick={onOpenWhatsApp}
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#082D7B] bg-white border border-[#082D7B]/30 hover:bg-[#082D7B]/5 transition-all duration-200 shadow-2xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#082D7B]"
                  title="Chat with Islah on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#082D7B] stroke-[2]" />
                  <span>WhatsApp</span>
                </button> */}

                {/* Book Free Trial Button (Solid Royal Blue Pill from screenshot) */}
                <button
                  onClick={() => onOpenTrialModal()}
                  className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold text-[#082D7B] bg-white border border-[#082D7B]/30 hover:bg-[#082D7B]/5 transition-all duration-200 shadow-2xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#082D7B]"
                >
                  <span>Admission</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </button>

                {/* Mobile Menu Hamburger Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-[#082D7B] hover:bg-[#082D7B]/10 rounded-full transition-colors"
                  aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>

          </div>

          {/* Floating Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pointer-events-auto fixed top-24 left-4 right-4 max-w-md mx-auto rounded-3xl bg-white/98 backdrop-blur-xl border border-[#082D7B]/15 shadow-2xl p-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4 z-50">
              <div className="flex flex-col space-y-4">
                <div className="pb-3 border-b border-[#082D7B]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/img/iom-star-logo.webp"
                      alt="Islah Online Madrasa"
                      className="w-12 h-12 object-contain"
                    />
                    <a
                      href="/home"
                      className="flex flex-col text-left select-none shrink-0 group focus-visible:outline-none cursor-pointer"
                      aria-label="Islah Online Madrasa"
                    >
                      <span className="font-sans font-bold text-2xl sm:text-xl md:text-2xl tracking-tight text-[#082D7B] group-hover:text-[#2563EB] transition-colors leading-none">
                        islah
                      </span>
                      <span className="font-mono text-[6px] sm:text-[7px] text-[#082D7B] font-medium tracking-wide leading-none mt-1">
                        Online Madrasa
                      </span>
                    </a>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-[#151918]/60 hover:text-[#082D7B] hover:bg-[#082D7B]/10 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-1 pt-1">
                  {navLinks.map((link) => {
                    const isActive = checkIsActive(link.to);

                    return (
                      <a
                        key={link.label}
                        href={link.to}
                        onClick={(e) => handleLinkClick(e, link.to)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-[#082D7B]/10 text-[#082D7B] font-bold'
                            : 'text-[#334155] hover:text-[#082D7B] hover:bg-[#082D7B]/5'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#C9A45C]' : 'opacity-40'}`} />
                      </a>
                    );
                  })}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="pt-3 border-t border-[#082D7B]/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenTrialModal();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#082D7B] hover:bg-[#062464] text-white rounded-full font-semibold text-sm shadow-sm transition-all"
                  >
                    <span>Book Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenWhatsApp();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-[#082D7B] border border-[#082D7B]/30 rounded-full font-semibold text-sm hover:bg-[#082D7B]/5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#082D7B]" />
                    <span>WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-[#151918]/50 pt-1">
                    {MADRASA_CONFIG.domain}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
};
