import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showPop, setShowPop] = useState(false);
  const whatsappUrl =
    'https://wa.me/919500975083?text=Hello%20Ar.%20Karthikraja%20G,%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20consultation%20with%20Nedunthatchan%20Architects.';

  // Pop up in 3 seconds, stay for 3 seconds, then cleanly dismiss
  useEffect(() => {
    const popTimer = setTimeout(() => {
      setShowPop(true);
    }, 3000);

    const dismissTimer = setTimeout(() => {
      setShowPop(false);
    }, 6000);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(dismissTimer);
    };
  }, []);

  const handleDismissPop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPop(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6 flex flex-col items-end select-none pointer-events-auto">
      {/* ONE-TIME MOBILE & DESKTOP POP UI SPEECH BUBBLE */}
      <AnimatePresence>
        {showPop && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 relative max-w-[240px] sm:max-w-[260px]"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-[#161616]/95 backdrop-blur-md text-[#f7f5ef] rounded-2xl shadow-2xl border border-white/15 relative text-left hover:border-[#25D366]/50 transition-colors cursor-pointer group"
            >
              {/* Dismiss Button */}
              <button
                onClick={handleDismissPop}
                aria-label="Close notification"
                className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-2.5 h-2.5" />
              </button>

              <div className="pr-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c5a880] block font-medium mb-0.5">
                  Ar. Karthikraja G · Atelier
                </span>
                <p className="font-serif text-xs sm:text-sm font-light text-white leading-snug group-hover:text-[#25D366] transition-colors">
                  Inquire directly on WhatsApp
                </p>
                <span className="text-[10px] text-white/50 tracking-wider flex items-center space-x-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block" />
                  <span>Instant Response</span>
                </span>
              </div>

              {/* Bottom speech bubble triangular tail pointing to WhatsApp icon */}
              <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[#161616] border-r border-b border-white/15 transform rotate-45" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLEAN, MINIMAL ROUND WHATSAPP ICON (Animates in once on page load) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Inquiry with Nedunthatchan Architects"
        title="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        {/* Simple, Crisp WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.712 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Top Red Dot Notification Badge */}
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF3B30] border-[1.5px] border-white shadow-sm flex items-center justify-center pointer-events-none" />
      </motion.a>
    </div>
  );
};
