import React from 'react';
import { useNavigate } from '../router';
import { HeroBgPattern } from './IslamicPattern';

interface FinalCtaProps {
  onOpenTrialModal?: () => void;
  onOpenWhatsApp?: () => void;
  onClick?: () => void;
  buttonText?: string;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
  onClick,
  buttonText = 'Contact Us',
}) => {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onClick) {
      onClick();
    } else if (onOpenTrialModal) {
      onOpenTrialModal();
    } else {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-0 sm:pt-0 lg:pt-0 pb-0 overflow-visible bg-[#F8F3EB] select-none">
      {/* Overlapping container sitting right above and into the footer */}
      <HeroBgPattern opacity={0.05}/>
      <div className="relative max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 z-20 -mb-38 sm:-mb-32 lg:-mb-36">
        
        {/* Outer White Card:
            Mobile: Rounded-t-[24px] with parabolic U-arch bottom
            Desktop: Rounded-l-[24px] with semicircular dome right
        */}
        <div className="relative w-full bg-[#F8F3EB] border-[2px] sm:border-[2.5px] border-white p-[3px] sm:p-[4px]  rounded-t-[24px] [border-bottom-left-radius:50%_150px] [border-bottom-right-radius:50%150px] sm:rounded-tl-[24px] sm:rounded-bl-[24px] sm:rounded-tr-[150px] sm:rounded-br-[150px] sm:[border-top-right-radius:150px_50%] sm:[border-bottom-right-radius:150px_50%]">
          
          {/* Inner Golden Line Border & Content Container */}
          <div className="relative w-full h-full border-[1.5px] border-[#C9A45C] rounded-t-[20px] [border-bottom-left-radius:50%_146px] [border-bottom-right-radius:50%_146px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] sm:rounded-tr-[150px] sm:rounded-br-[150px] sm:[border-top-right-radius:146px_50%] sm:[border-bottom-right-radius:146px_50%] overflow-hidden">
            
            {/* Islamic Background Pattern Tile */}
            <img src='/assets/img/arabic-cally.webp' alt='bg' className='absolute inset-0 w-full h-full object-cover opacity-60'/>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left px-6 sm:px-10 lg:px-12 pt-18 pb-24 sm:py-8 lg:py-10 gap-6 sm:gap-8">
              
              {/* Left Content Column */}
              <div className="flex-1 max-w-2xl flex flex-col items-center sm:items-start">
                {/* Gold Accent Dash/Pill */}
                <div className="w-12 h-1 bg-[#C9A45C] rounded-full mb-3 mx-auto sm:mx-0" />

                {/* Arabic Calligraphy */}
                <div
                  className="font-arabic text-xl sm:text-2xl text-[#E5A858] tracking-wide mb-2 select-none"
                  dir="rtl"
                >
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-2xl lg:text-[58px] font-bold leading-snug sm:leading-tight mb-5">
                  <span className="hidden sm:inline text-[#082D7B]">
                    Begin the Journey. <br/>Build the Foundation.
                  </span>
                  <span className="sm:hidden block text-[#082D7B]">Begin the Journey.</span>
                  <span className="sm:hidden block text-[#082D7B]">Build the Foundation.</span>
                  <span className="block text-[#E5A858] mt-1">
                    <span className="hidden sm:inline">Grow With the Qur'an.</span>
                    <span className="sm:hidden block">Grow With the</span>
                    <span className="sm:hidden block">Qur'an.</span>
                  </span>
                </h2>

                {/* Contact Us Button */}
                <button
                  type="button"
                  onClick={handleAction}
                  className="px-8 sm:px-9 py-2.5 sm:py-3 rounded-xl font-sans font-semibold text-sm sm:text-base text-[#082A61] bg-[#E5A858] hover:bg-[#d99745] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  {buttonText}
                </button>
              </div>

              {/* Desktop Right Dome: 8-Pointed Star Badge Logo Image */}
              <div className="hidden sm:flex shrink-0 items-center justify-center pr-2 lg:pr-6">
                <img
                  src="/assets/img/iom-star-logo.webp"
                  alt="Islah Online Madrasa"
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)] select-none"
                />
              </div>

            </div>

          </div>

          {/* Mobile Star Logo Badge (Sitting at the apex of the U-arch) */}
          <div className="sm:hidden absolute -bottom-11 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <img
              src="/assets/img/iom-star-logo.webp"
              alt="Islah Online Madrasa"
              className="w-24 h-24 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] select-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
