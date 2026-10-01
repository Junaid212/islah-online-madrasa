import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { MADRASA_CONFIG } from '../data/madrasaData';

interface FloatingWhatsAppProps {
  onOpenTrialModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenTrialModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientNumber, setClientNumber] = useState(MADRASA_CONFIG.phoneNumber);
  const [userQuery, setUserQuery] = useState('');
  const [showConfig, setShowConfig] = useState(false);

  const presets = [
    "As-salamu alaykum, I would like to inquire about Quran classes for my child.",
    "Can you share more information about your Noorani Qaida & Tajweed courses?",
    "How do trial classes work and what are the available timings?",
  ];

  const handleSend = (text: string) => {
    const finalMessage = encodeURIComponent(text || "As-salamu alaykum, I would like to learn more about Islah Online Madrasa.");
    window.open(`https://wa.me/${clientNumber}?text=${finalMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">

      {/* WhatsApp Chat Popover Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-[#082D7B]/15 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">

          {/* Popover Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">
                  Islah Online Madrasa
                </h4>
                <p className="text-[11px] text-white/80">
                  Admissions Team · Typically replies in minutes
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#EFEAE2] space-y-3 max-h-[320px] overflow-y-auto text-xs">

            {/* Madrasa Welcome Bubble */}
            <div className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-2xs max-w-[85%] text-[#151918]">
              <p className="font-medium text-[#075E54] mb-1">
                As-salamu alaykum wa rahmatullah!
              </p>
              <p className="leading-relaxed text-[#151918]/80">
                Welcome to Islah Online Madrasa. How may we assist you with your child's Islamic education journey today?
              </p>
              <span className="text-[9px] text-[#151918]/40 block text-right mt-1">
                Just now
              </span>
            </div>

            {/* Quick Inquiry Options */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-semibold text-[#151918]/50 block">
                Suggested questions:
              </span>
              {presets.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(msg)}
                  className="w-full text-left p-2 rounded-lg bg-white/90 hover:bg-white text-[11px] text-[#075E54] border border-[#082D7B]/10 shadow-2xs transition-colors cursor-pointer"
                >
                  "{msg}"
                </button>
              ))}
            </div>

            {/* Quick config option for client number testing */}
            <div className="pt-2 border-t border-[#151918]/10 text-[10px] text-[#151918]/60 flex items-center justify-between">
              <span>Target: wa.me/{clientNumber}</span>
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="text-[#075E54] underline font-medium"
              >
                {showConfig ? 'Hide' : 'Change Number'}
              </button>
            </div>

            {showConfig && (
              <div className="p-2 bg-white rounded border border-[#082D7B]/20 space-y-1">
                <label className="text-[10px] font-semibold text-[#082D7B]">
                  Set WhatsApp Number (digits only):
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={clientNumber}
                    onChange={(e) => setClientNumber(e.target.value)}
                    className="w-full px-2 py-1 text-xs border rounded"
                    placeholder="447000000000"
                  />
                </div>
              </div>
            )}

          </div>

          {/* Popover Footer Input */}
          <div className="p-3 bg-white border-t border-[#082D7B]/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend(userQuery);
              }}
              className="flex-grow px-3 py-2 text-xs border border-[#082D7B]/15 rounded-md focus:outline-none focus:ring-1 focus:ring-[#075E54]"
            />
            <button
              onClick={() => handleSend(userQuery)}
              className="p-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md shadow-xs transition-colors cursor-pointer"
              aria-label="Send message on WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Pill / Button */}
      <div className="relative group">

        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex items-center gap-2.5 px-3 py-3 bg-[#0D2D72] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer font-medium text-xs sm:text-sm active:scale-95"
          aria-label="Contact Islah Online Madrasa on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          {/* <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span> */}
        </button>

      </div>

    </div>
  );
};
