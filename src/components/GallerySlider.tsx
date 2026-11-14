import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { heroGallery, projectsData, HeroGalleryItem } from '../data/projectsData';
import { ArrowLeft, ArrowRight, MoveHorizontal, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface GallerySliderProps {
  onSelectProject?: (project: Project) => void;
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollAmount = clientWidth * 0.75;
      containerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  const handleItemClick = (index: number) => {
    if (onSelectProject && projectsData[index]) {
      onSelectProject(projectsData[index]);
    }
  };

  return (
    <section id="gallery-section" className="py-20 md:py-32 bg-[#faf8f2] border-b border-[#161616]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#8c7b6d] mb-3">
            <span>01 / Signature Atelier Creations</span>
            <span className="w-8 h-[1px] bg-[#8c7b6d]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#161616]">
            Architectural Works
          </h2>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#161616]/50">
            <MoveHorizontal className="w-4 h-4" />
            <span>Swipe or drag carousel</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous architectural work"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#161616]/20 flex items-center justify-center text-[#161616] hover:bg-[#161616] hover:text-[#f7f5ef] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next architectural work"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#161616]/20 flex items-center justify-center text-[#161616] hover:bg-[#161616] hover:text-[#f7f5ef] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Carousel: Fast native touch snap on mobile, smooth drag/wheel on laptop */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex space-x-4 md:space-x-8 px-6 md:px-12 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-6 select-none touch-pan-x"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {heroGallery.map((item: HeroGalleryItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="flex-shrink-0 snap-center w-[84vw] sm:w-[480px] md:w-[600px] group relative cursor-pointer"
            onClick={() => handleItemClick(index)}
          >
            {/* Visual: Full vivid natural color, NO black & white, hover zoom-in */}
            <div className="relative aspect-[16/11] overflow-hidden bg-[#161616]/5 border border-[#161616]/10 shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              />
              {/* Subtle architectural vignette overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Design Nature Floating Pill Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium shadow-sm">
                {item.designNature}
              </div>
            </div>

            {/* Design Nature and Look Explanation */}
            <div className="pt-4 border-b border-[#161616]/10 pb-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#8c7b6d] block mb-1 font-medium">
                    {item.designNature}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#161616] font-light group-hover:text-[#8c7b6d] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[#161616] font-medium flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform pt-1 shrink-0">
                  <span className="hidden sm:inline">Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8c7b6d]" />
                </span>
              </div>

              {/* Design Look and Materiality Explanation */}
              <p className="text-xs text-[#161616]/75 mt-2 font-light leading-relaxed">
                <span className="text-[#8c7b6d] uppercase tracking-wider text-[10px] mr-1.5 font-medium">Look & Character:</span>
                {item.look}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar Track */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6">
        <div className="w-full h-[2px] bg-[#161616]/10 relative">
          <div
            className="h-full bg-[#161616] transition-all duration-300"
            style={{ width: `${Math.max(16, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
