import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Palette,
  Compass,
  Layers,
  Film,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  projects?: Project[];
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  onOpenConsultation?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects = [],
  onClose,
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Build the list of visual media slides for this project
  const slides: { type: 'image' | 'video'; src: string; caption?: string }[] = [];

  if (project?.galleryImages && project.galleryImages.length > 0) {
    project.galleryImages.forEach((img, idx) => {
      slides.push({
        type: 'image',
        src: img,
        caption: `${project.title} · Perspective 0${idx + 1}`
      });
    });
  } else if (project?.heroImage) {
    slides.push({
      type: 'image',
      src: project.heroImage,
      caption: `${project.title} · Elevation View`
    });
  }

  if (project?.video) {
    slides.push({
      type: 'video',
      src: project.video,
      caption: `${project.title} · Architectural Walkthrough Reel`
    });
  }

  // Handle Lenis pause and body scroll lock cleanly without jitter or layout shift
  useEffect(() => {
    if (!project) return;

    // Pause Lenis global smooth scroll so wheel events belong strictly to the modal
    (window as any).__lenis?.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Reset scroll of modal to top when a new project opens
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setActiveSlide(0);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      // Resume Lenis smooth scroll when modal closes
      (window as any).__lenis?.start();
    };
  }, [project?.id]);

  // Separate keyboard navigation listener
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project?.id, slides.length, onClose]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Find index in full project list for project-level carousel navigation
  const currentProjectIndex = projects.findIndex((p) => p.id === project?.id);
  const prevProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentProjectIndex < projects.length - 1 ? projects[currentProjectIndex + 1] : projects[0];

  const switchToProject = (target: Project) => {
    if (onSelectProject) {
      onSelectProject(target);
      setActiveSlide(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const currentMedia = slides[activeSlide] || slides[0];

  return (
    <AnimatePresence>
      {project && (
        <div
          ref={scrollContainerRef}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
          data-lenis-prevent="true"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Pinned Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Centering Wrapper: min-h-full allows natural scrolling from top to bottom without clipping */}
          <div className="min-h-full flex items-center justify-center p-3 sm:p-6 md:p-8 relative pointer-events-none">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#faf8f2] text-[#161616] border border-[#161616]/10 shadow-2xl z-10 flex flex-col pointer-events-auto my-6 sm:my-10"
              data-lenis-prevent="true"
            >
              {/* 1. STICKY TOP APP BAR */}
              <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#faf8f2]/95 backdrop-blur-sm border-b border-[#161616]/10">
                <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#8c7b6d]">
                  <span>Nedunthatchan Case Study</span>
                  <span className="w-6 h-[1px] bg-[#8c7b6d]" />
                  <span className="text-[#161616] font-medium hidden sm:inline">
                    {project.categoryLabel || 'Architectural Work'}
                  </span>
                </div>

                {/* Cross-Project Carousel Quick Nav in Header */}
                {projects.length > 1 && (
                  <div className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-[#161616]">
                    <button
                      onClick={() => switchToProject(prevProject)}
                      className="px-3 py-1.5 border border-[#161616]/20 hover:bg-[#161616] hover:text-[#f7f5ef] transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev Work</span>
                    </button>
                    <span className="text-[#8c7b6d] px-2 font-mono text-[11px]">
                      {currentProjectIndex + 1} / {projects.length}
                    </span>
                    <button
                      onClick={() => switchToProject(nextProject)}
                      className="px-3 py-1.5 border border-[#161616]/20 hover:bg-[#161616] hover:text-[#f7f5ef] transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Next Work</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-[#161616] text-[#f7f5ef] flex items-center justify-center hover:bg-[#8c7b6d] transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 2. MAIN BODY */}
              <div className="p-6 sm:p-8 md:p-12 space-y-10">
                {/* Title Header */}
                <div>
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8c7b6d] font-medium mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#8c7b6d]" />
                    <span>{project.designNature}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#161616] tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-serif italic text-lg sm:text-xl text-[#8c7b6d] mt-2">
                    "{project.subtitle}"
                  </p>
                </div>

                {/* 3. MULTI-SLIDE MEDIA CAROUSEL VIEWER */}
                <div
                  className="relative bg-[#0d0d0d] overflow-hidden border border-[#161616]/10 shadow-lg"
                  data-lenis-prevent="true"
                >
                  {/* Main Media Stage */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      {currentMedia?.type === 'video' ? (
                        <motion.div
                          key="video-slide"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex items-center justify-center bg-black"
                        >
                          <video
                            src={currentMedia.src}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      ) : (
                        <motion.img
                          key={currentMedia?.src}
                          src={currentMedia?.src}
                          alt={currentMedia?.caption || project.title}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full h-full object-contain md:object-cover object-center"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop';
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Carousel Left & Right Arrow Buttons */}
                    {slides.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevSlide}
                          aria-label="Previous slide"
                          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all cursor-pointer z-10 hover:scale-105"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextSlide}
                          aria-label="Next slide"
                          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all cursor-pointer z-10 hover:scale-105"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Active Slide Counter Badge */}
                    <div className="absolute top-4 right-4 bg-black/75 text-white backdrop-blur-md px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase border border-white/10 z-10">
                      {currentMedia?.type === 'video'
                        ? 'Walkthrough Reel'
                        : `Perspective 0${activeSlide + 1} / 0${slides.length}`}
                    </div>
                  </div>

                  {/* Thumbnails Navigation Strip */}
                  {slides.length > 1 && (
                    <div
                      className="p-3 sm:p-4 bg-[#141414] border-t border-white/10 flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none"
                      data-lenis-prevent="true"
                    >
                      {slides.map((slide, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlide(idx)}
                          className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] overflow-hidden border-2 transition-all cursor-pointer ${activeSlide === idx
                            ? 'border-[#c5a880] scale-100 opacity-100'
                            : 'border-transparent opacity-50 hover:opacity-80'
                            }`}
                        >
                          {slide.type === 'video' ? (
                            <div className="w-full h-full bg-[#222] flex items-center justify-center text-white">
                              <Film className="w-4 h-4 text-[#c5a880]" />
                            </div>
                          ) : (
                            <img
                              src={slide.src}
                              alt=""
                              className="w-full h-full object-cover object-center"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src =
                                  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop';
                              }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. DEDICATED DESIGN NATURE & LOOK COMPARISON SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 bg-white border border-[#161616]/10 shadow-sm">
                  <div className="space-y-3 border-b md:border-b-0 md:border-r border-[#161616]/10 pb-6 md:pb-0 md:pr-6">
                    <div className="flex items-center space-x-2 text-[#8c7b6d] text-xs uppercase tracking-[0.2em] font-medium">
                      <Sparkles className="w-4 h-4 text-[#8c7b6d]" />
                      <span>Design Nature</span>
                    </div>
                    <h3 className="text-base sm:text-lg text-[#161616] font-medium leading-snug">
                      {project.designNature}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#161616]/75 font-light leading-relaxed">
                      Engineered with passive bioclimatic intelligence, micro-climatic shading projections, and structural integrity tailored to regional Tamil Nadu solar trajectories.
                    </p>
                  </div>

                  <div className="space-y-3 md:pl-2">
                    <div className="flex items-center space-x-2 text-[#8c7b6d] text-xs uppercase tracking-[0.2em] font-medium">
                      <Palette className="w-4 h-4 text-[#8c7b6d]" />
                      <span>Aesthetic Look & Materiality</span>
                    </div>
                    <h3 className="text-base sm:text-lg text-[#161616] font-medium leading-snug">
                      {project.look}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#161616]/75 font-light leading-relaxed">
                      Honest material expression featuring board-formed textures, bespoke timber joinery, crystalline architectural glazing, and hand-finished stone surfaces.
                    </p>
                  </div>
                </div>

                {/* 5. ARCHITECTURAL SPECS RIBBON */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#f3efe6] border border-[#161616]/10 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8c7b6d] block mb-1">
                      Architectural Style
                    </span>
                    <span className="font-medium text-[#161616] flex items-center space-x-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#8c7b6d] shrink-0" />
                      <span>{project.architecturalStyle || 'Contemporary Modernism'}</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8c7b6d] block mb-1">
                      Spatial Discipline
                    </span>
                    <span className="font-medium text-[#161616] flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#8c7b6d] shrink-0" />
                      <span>{project.categoryLabel || 'Bespoke Architecture'}</span>
                    </span>
                  </div>
                </div>

                {/* 6. SPATIAL VISION NARRATIVE */}
                <div className="space-y-4 max-w-4xl">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c7b6d] block font-mono">
                    Spatial Vision & Execution Narrative
                  </span>
                  <p className="text-sm sm:text-base text-[#161616]/80 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* 7. ARCHITECTURAL SPECIFICATIONS */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-[#161616]/10">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c7b6d] block font-mono">
                      Key Architectural Elements & Detailing
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#161616]/85">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2.5 p-3.5 bg-white border border-[#161616]/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8c7b6d] mt-1.5 shrink-0" />
                          <span className="font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 8. CAROUSEL PROJECT SWITCHER STRIP (COMPARE ALL WORKS IN REAL TIME) */}
                {projects.length > 1 && (
                  <div className="pt-8 border-t border-[#161616]/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c7b6d] block font-mono">
                          Compare & Explore Other Works
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl text-[#161616] font-light">
                          Browse All Signature Commissions
                        </h4>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => switchToProject(prevProject)}
                          aria-label="Previous work"
                          className="w-9 h-9 rounded-full border border-[#161616]/20 flex items-center justify-center hover:bg-[#161616] hover:text-white transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => switchToProject(nextProject)}
                          aria-label="Next work"
                          className="w-9 h-9 rounded-full border border-[#161616]/20 flex items-center justify-center hover:bg-[#161616] hover:text-white transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Horizontal carousel strip of all other projects */}
                    <div
                      className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none"
                      data-lenis-prevent="true"
                    >
                      {projects.map((p) => {
                        const isCurrent = p.id === project.id;
                        return (
                          <div
                            key={p.id}
                            onClick={() => switchToProject(p)}
                            className={`flex-shrink-0 w-52 sm:w-60 p-2.5 border transition-all cursor-pointer ${isCurrent
                              ? 'border-[#161616] bg-[#f0ece1]'
                              : 'border-[#161616]/10 bg-white hover:border-[#8c7b6d]'
                              }`}
                          >
                            <div className="aspect-[16/10] overflow-hidden bg-black/5 mb-2">
                              <img
                                src={p.heroImage}
                                alt={p.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop';
                                }}
                              />
                            </div>
                            <span className="text-[9px] uppercase tracking-wider text-[#8c7b6d] block truncate">
                              {p.designNature}
                            </span>
                            <h5 className="font-serif text-xs text-[#161616] font-medium truncate mt-0.5">
                              {p.title}
                            </h5>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 9. FOOTER ACTIONS */}
                <div className="pt-8 border-t border-[#161616]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#161616]/60">
                    Nedunthatchan Architects · Ar. Karthikraja G · Council of Architecture CA/2022/149864
                  </p>
                  <div className="flex items-center space-x-3">
                    <a
                      href={`https://wa.me/919500975083?text=Hello%20Ar.%20Karthikraja%2C%20I%20would%20like%20to%20inquire%20about%20a%20commission%20similar%20to%20${encodeURIComponent(project.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#161616] text-[#f7f5ef] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8c7b6d] transition-colors cursor-pointer flex items-center space-x-2"
                    >
                      <span>Inquire for Your Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a880]" />
                    </a>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 border border-[#161616]/30 text-[#161616] text-xs uppercase tracking-[0.2em] font-medium hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
