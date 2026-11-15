import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/teamData';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 800ms
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 800);

    // Auto-dismiss popup after 3 seconds of visibility (total 3800ms)
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 3800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleOpenWhatsApp = () => {
    window.open(studioInfo.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        {/* 5-Second Auto Popup Message (Perfect Laptop & Mobile Positioning) */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={handleOpenWhatsApp}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenWhatsApp();
              }}
              className="absolute bottom-full mb-3 right-0 sm:bottom-0 sm:mb-0 sm:right-full sm:mr-3.5 w-72 bg-[#161616]/95 backdrop-blur-md text-[#f7f5ef] p-3.5 rounded-xl shadow-2xl border border-white/10 z-50 cursor-pointer group/popup hover:border-[#25D366]/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold">
                    Nedunthatchan Atelier
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(false);
                  }}
                  className="text-white/40 hover:text-white transition-colors p-0.5 rounded focus:outline-none"
                  aria-label="Close message"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-white/85 font-light mt-1.5 leading-snug">
                Need architectural planning or design assistance? Chat with us directly on WhatsApp!
              </p>

              <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#25D366]">
                <span className="flex items-center space-x-1 font-medium group-hover/popup:underline">
                  <MessageCircle className="w-3 h-3 inline mr-1" />
                  <span>Open WhatsApp</span>
                </span>
                <span className="text-[10px] text-white/40 font-mono">Ar. Karthikraja G</span>
              </div>

              {/* Speech pointer arrow on Laptop/Desktop (points right at WhatsApp icon) */}
              <div className="hidden sm:block absolute bottom-3.5 -right-1.5 w-3 h-3 bg-[#161616] rotate-45 border-r border-t border-white/10 pointer-events-none" />

              {/* Speech pointer arrow on Mobile (points down at WhatsApp icon) */}
              <div className="sm:hidden absolute -bottom-1.5 right-4 w-3 h-3 bg-[#161616] rotate-45 border-r border-b border-white/10 pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Tooltip (shown on laptop hover only when 5s popup has closed) */}
        {!showPopup && (
          <div
            className={`hidden sm:flex absolute right-full mr-3 items-center px-3 py-1 rounded-full bg-[#161616]/95 backdrop-blur-md text-[#f7f5ef] text-[11px] font-medium tracking-wide shadow-xl border border-white/10 transition-all duration-200 whitespace-nowrap pointer-events-none ${
              isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-2 scale-95'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-1.5 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </div>
        )}

        {/* Floating Action Button with One-Time Entrance/Wiggle Animation */}
        <motion.a
          href={studioInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Nedunthatchan Architects on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.22, 0.92, 1.08, 1],
            rotate: [0, -10, 10, -5, 5, 0],
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.4,
            times: [0, 0.35, 0.6, 0.8, 1],
            ease: 'easeOut',
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:bg-[#20ba59] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 shrink-0"
        >
          {/* Red Color Notification Dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 z-20">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white shadow-sm" />
          </span>

          {/* Official WhatsApp Vector Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 drop-shadow-sm"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>
      </div>
    </aside>
  );
};
