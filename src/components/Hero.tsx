import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Compass } from 'lucide-react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Control video playback loops:
  // - Laptop / Desktop: 5.0s to 55.0s
  // - Mobile: 0.0s to 7.0s
  useEffect(() => {
    const setupVideoLoop = (video: HTMLVideoElement | null, startTime: number, endTime: number) => {
      if (!video) return () => {};

      const handleLoadedMetadata = () => {
        if (startTime > 0) {
          video.currentTime = startTime;
        }
      };

      const handleCanPlay = () => {
        if (video.currentTime < startTime || video.currentTime >= endTime) {
          video.currentTime = startTime;
        }
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime;
          video.play().catch(() => {});
        }
      };

      const handleEnded = () => {
        video.currentTime = startTime;
        video.play().catch(() => {});
      };

      if (video.readyState >= 1) {
        if (video.currentTime < startTime || video.currentTime >= endTime) {
          video.currentTime = startTime;
        }
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    };

    // Laptop/Desktop video: 5s to 55s
    const cleanupDesktop = setupVideoLoop(desktopVideoRef.current, 5.0, 55.0);
    // Mobile video: 0.0s to 7.0s
    const cleanupMobile = setupVideoLoop(mobileVideoRef.current, 0.0, 7.0);

    return () => {
      cleanupDesktop();
      cleanupMobile();
    };
  }, []);

  // Parallax effect on both desktop & mobile background video
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const targets = [desktopVideoRef.current, mobileVideoRef.current].filter(Boolean);
      if (targets.length > 0) {
        gsap.to(targets, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('website-content') || document.getElementById('gallery-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolio = document.getElementById('portfolio-section') || document.getElementById('recent-projects');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between bg-[#0a0a0a] text-[#f7f5ef]"
    >
      {/* Background Architectural Video with Reveal & Luxury Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#080808]">
        {/* Desktop / Laptop Background Video (Plays from 5.0s to 55.0s loop, muted) */}
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop"
          className="hidden md:block w-full h-full object-cover object-center scale-105"
        >
          <source src="/hero-video.mp4#t=5,55" type="video/mp4" />
        </video>

        {/* Mobile Background Video (Plays from 0.0s to 7.0s loop, muted) */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          className="block md:hidden w-full h-full object-cover object-center scale-105"
        >
          <source src="/hero-video-mobile.mp4#t=0,7" type="video/mp4" />
        </video>

        {/* Editorial Vignette & Warm Luxury Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]/80 pointer-events-none" />
      </div>

      {/* Top spacer for header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-28 px-6 md:px-16 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-white/70"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-beacon-ping" />
          <span>Architectural Studio · Erode</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[11px]">
          <span>Erode</span>
          <span>·</span>
          <span>Tamil Nadu</span>
        </div>
      </motion.div>

      {/* Center / Lower Main Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pb-16 md:pb-24">
        {/* Subtitle tag: Slides from Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6 flex items-center space-x-4"
        >
          <div className="h-[1px] w-12 bg-[#c5a880]" />
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#c5a880] font-light">
            Bridging dream & reality
          </p>
        </motion.div>

        {/* Big Serif Headline: Masked upward reveal with subtle skew */}
        <div className="overflow-hidden">
          <motion.h1
            ref={headlineRef}
            initial={{ opacity: 0, y: '100%', skewY: 2 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] max-w-5xl text-balance"
          >
            Create the <span className="italic font-light">unimaginable</span>.
            <span className="sr-only"> — Best Architects in Erode &amp; Tamil Nadu | Nedunthatchan Architects</span>
          </motion.h1>
        </div>

        {/* Narrative & Portfolio CTA: Opposing Left <-> Right Entrances */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Narrative: Blur-to-focus fade from Left */}
          <motion.p
            initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-white/80 font-light max-w-md leading-relaxed tracking-wide"
          >
            Nedunthatchan Architects is an award-winning architectural firm in Erode, orchestrating bespoke luxury villas, modern residences, and turnkey interiors defined by sculptural light and honest materiality.
          </motion.p>

          {/* Explore Button: Slides from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-6"
          >
            <button
              onClick={scrollToPortfolio}
              className="group flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Status Bar with GPS Coordinates: Rises from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 border-t border-white/10 px-6 md:px-16 py-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-white/60"
      >
        <div className="flex items-center space-x-3">
          <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Coordinates 11.3209° N, 77.7073° E · Erode Atelier</span>
        </div>

        <div>
          <span
            className="cursor-pointer hover:text-white transition-colors"
            onClick={scrollToNextSection}
          >
            Scroll Down ↓
          </span>
        </div>
      </motion.div>
    </section>
  );
};
