import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

interface FaqSectionProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#F6F1E7]/50 border-t border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            Clear, transparent answers to help you make the best decision for your child's Islamic education.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#082D7B]/10 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus-visible:outline-2 focus-visible:outline-[#082D7B] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#082D7B] font-semibold pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#082D7B] text-white rotate-180' : 'bg-[#082D7B]/6 text-[#082D7B]'
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#151918]/80 leading-relaxed font-sans border-t border-[#082D7B]/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#082D7B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-lg text-[#082D7B] font-semibold">
              Have a specific question about your child?
            </h3>
            <p className="text-xs text-[#151918]/70 mt-0.5">
              Our academic advisors are available on WhatsApp to discuss your family's needs.
            </p>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#082D7B] bg-[#082D7B]/8 hover:bg-[#082D7B]/15 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#082D7B]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
