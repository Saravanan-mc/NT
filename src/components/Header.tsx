import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/teamData';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      (window as any).__lenis?.stop();
    } else {
      document.body.style.overflow = '';
      (window as any).__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      (window as any).__lenis?.start();
    };
  }, [mobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (id === 'top') {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(element, { offset: -70, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 220);
  };

  const navLinks = [
    { label: 'Home', target: 'top' },
    { label: 'Recent Works', target: 'recent-projects' },
    { label: 'About Studio', target: 'about-section' },
    { label: 'Contact Atelier', target: 'contact-section' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#f7f5ef]/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-[#161616]/10 text-[#161616]'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5 sm:py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Insignia Brand Logo with Subtle Hover Reveal */}
          <button
            onClick={() => scrollToSection('top')}
            className="group flex items-center space-x-3.5 tracking-[0.2em] uppercase text-left cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Nedunthatchan Architects Logo"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col items-start">
              <span className="font-serif text-base md:text-lg font-medium tracking-[0.16em] leading-tight group-hover:opacity-80 transition-opacity">
                Nedunthatchan
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] opacity-75 uppercase font-sans font-light">
                Architects
              </span>
            </div>
          </button>

          {/* Desktop Navigation (Kinetic hover underline) */}
          <nav className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.18em] font-medium">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="opacity-75 hover:opacity-100 text-hover-slide transition-opacity cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Header CTA Button: Direct WhatsApp Routing */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={studioInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 border transition-all duration-300 flex items-center space-x-2 group ${
                isScrolled
                  ? 'border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-[#f7f5ef]'
                  : 'border-white/80 text-white hover:bg-white hover:text-[#161616]'
              }`}
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className={`lg:hidden p-2 rounded-full border transition-colors cursor-pointer ${
              isScrolled
                ? 'border-[#161616]/20 text-[#161616] hover:bg-black/5'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* FULL-SCREEN LUXURY MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0e0e0e]/98 backdrop-blur-2xl text-[#f7f5ef] flex flex-col justify-between overflow-y-auto"
            data-lenis-prevent="true"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Nedunthatchan Architects"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <span className="font-serif text-sm uppercase tracking-[0.16em] block">
                    Nedunthatchan
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880] block font-light">
                    Architects Atelier
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#c5a880] text-white hover:text-[#c5a880] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Animated Nav Links: Each text animates with lateral wipe and fade */}
            <div className="px-6 py-8 flex flex-col space-y-4 my-auto">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-mono"
              >
                Studio Navigation
              </motion.span>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.target}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="w-full text-left font-serif text-3xl sm:text-4xl font-light text-white hover:text-[#c5a880] transition-colors py-2 flex items-center justify-between border-b border-white/10 group cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#c5a880] transition-colors">
                      0{idx + 1} →
                    </span>
                  </button>
                </motion.div>
              ))}

              {/* Direct WhatsApp Callout in Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-6"
              >
                <a
                  href={studioInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 shadow-lg hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Mobile Footer Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="p-6 border-t border-white/10 text-xs text-white/60 space-y-2 bg-black/40"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-xs">Ar. Karthikraja G, B.Arch</p>
                  <p className="text-[10px] text-[#c5a880] uppercase tracking-wider font-mono">
                    COA Reg: {studioInfo.coaRegistration}
                  </p>
                </div>
                <a
                  href={`tel:${studioInfo.phoneRaw}`}
                  className="px-3 py-1.5 border border-white/20 text-white text-[10px] uppercase tracking-wider flex items-center space-x-1.5 hover:border-[#c5a880]"
                >
                  <Phone className="w-3 h-3 text-[#c5a880]" />
                  <span>Call Atelier</span>
                </a>
              </div>
              <p className="text-[10px] text-white/45">
                Kasipalayam, Erode, Tamil Nadu · All-India Bespoke Commissions
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
