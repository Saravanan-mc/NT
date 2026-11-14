import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Palette, Film } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface RecentProjectsProps {
  onSelectProject?: (project: Project) => void;
}

const filterOptions: { id: 'all' | 'architecture' | 'interior' | 'commercial'; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'architecture', label: 'Residences' },
  { id: 'interior', label: 'Interiors' },
  { id: 'commercial', label: 'Commercial' },
];

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'architecture' | 'interior' | 'commercial'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section id="recent-projects" className="py-24 md:py-36 bg-[#f7f5ef] border-b border-[#161616]/10 relative overflow-hidden">
      <div id="portfolio-section" className="absolute -top-20 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: Multi-directional choreographies */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[#161616]/15 gap-8">
          <div>
            {/* 1. Counter Tag: Lateral slide from left with tracking expansion */}
            <motion.div
              initial={{ opacity: 0, x: -40, letterSpacing: '0.35em' }}
              whileInView={{ opacity: 1, x: 0, letterSpacing: '0.25em' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3 text-xs uppercase text-[#8c7b6d] mb-3"
            >
              <span>01 / Signature Architectural Portfolio</span>
              <span className="w-8 h-[1px] bg-[#8c7b6d]" />
            </motion.div>

            {/* 2. Main Title: Masked upward reveal with subtle skew */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: '100%', skewY: 2 }}
                whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#161616]"
              >
                Recent Works
              </motion.h2>
            </div>

            {/* 3. Subtitle Narrative: Soft blur-to-sharp fade from bottom */}
            <motion.p
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm text-[#161616]/75 font-light leading-relaxed mt-3 max-w-2xl"
            >
              Every signature creation appears once in our atelier archive. Explore completed residences, sacred heritage sanctuaries, bespoke interiors, and commercial landmarks.
            </motion.p>
          </div>

          {/* 4. Filter Tabs: Slide down with spring from top right */}
          <motion.div
            initial={{ opacity: 0, y: -25, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 p-1.5 bg-[#ede9de] border border-[#161616]/10 self-start md:self-end shadow-sm"
          >
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              const count =
                opt.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === opt.id).length;

              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer z-10 ${
                    isActive ? 'text-[#f7f5ef]' : 'text-[#161616]/70 hover:text-[#161616]'
                  }`}
                >
                  <span className="relative z-10">
                    {opt.label} ({count})
                  </span>

                  {/* Animated Spring Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#161616] shadow-sm z-0"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Editorial Works Collection: Multi-Directional Orchestration */}
        <div className="space-y-24 md:space-y-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Visual Media Column: Alternates Left <-> Right */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -65 : 65,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{ once: false, amount: 0.12 }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative overflow-hidden group card-hover-lift ${
                      isEven
                        ? 'lg:col-span-7'
                        : 'lg:col-span-7 lg:order-2'
                    }`}
                  >
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="block w-full overflow-hidden relative cursor-pointer text-left shadow-md bg-[#161616]/5 border border-[#161616]/10 group"
                    >
                      {/* Fixed Aspect Container with Guaranteed Visible Image & Fallback */}
                      <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative bg-[#161616]/10">
                        <motion.img
                          src={project.heroImage}
                          alt={project.title}
                          loading="eager"
                          initial={{ scale: 1.08 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false, amount: 0.12 }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          onError={(e) => {
                            // Ensure image is never broken
                            (e.currentTarget as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop';
                          }}
                          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 will-change-transform"
                        />

                        {/* Continuous Luxury Shimmer Beam on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                          <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-luxury-shimmer" />
                        </div>

                        {/* Hover Overlay with Tactile Pill Button */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-6 py-3 rounded-full bg-white/95 text-[#161616] text-xs uppercase tracking-[0.2em] font-medium shadow-2xl flex items-center space-x-2 backdrop-blur-sm">
                            <span>Open Project Carousel</span>
                            <ArrowUpRight className="w-4 h-4 text-[#8c7b6d]" />
                          </span>
                        </div>
                      </div>

                      {/* Top Floating Badges: Slide in from Top-Left */}
                      <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium shadow-sm">
                          {project.categoryLabel || 'Bespoke Work'}
                        </span>
                        {project.video && (
                          <span className="bg-[#161616]/90 text-white backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium flex items-center space-x-1 shadow-sm">
                            <Film className="w-3 h-3 text-[#c5a880]" />
                            <span>Reel</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Photo Count Badge: Slide in from Bottom-Right */}
                      <div className="absolute bottom-4 right-4 bg-black/75 text-white backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase z-10 border border-white/10">
                        {project.galleryImages?.length || 1} Perspectives
                      </div>
                    </button>

                    <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#8c7b6d]">
                      <span className="font-medium text-[#161616] truncate max-w-[65%]">{project.designNature}</span>
                      <span className="text-[#8c7b6d]">{project.categoryLabel || 'Bespoke Work'}</span>
                    </div>
                  </motion.div>

                  {/* Content Column: Alternates Right <-> Left with Distinct Per-Text Animations */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? 65 : -65,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: false, amount: 0.12 }}
                    transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col justify-center ${
                      isEven
                        ? 'lg:col-span-5'
                        : 'lg:col-span-5 lg:order-1'
                    }`}
                  >
                    {/* 1. Category Tag: Lateral wipe from left with letter spacing expansion */}
                    <motion.div
                      initial={{ opacity: 0, x: -30, letterSpacing: '0.35em' }}
                      whileInView={{ opacity: 1, x: 0, letterSpacing: '0.25em' }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs uppercase text-[#8c7b6d] mb-2 font-medium"
                    >
                      {project.categoryLabel || 'Architectural Work'}
                    </motion.div>

                    {/* 2. Headline: Masked Upward Roll with Skew and Underline Reveal */}
                    <div className="overflow-hidden mb-4">
                      <motion.h3
                        initial={{ opacity: 0, y: '100%', skewY: 2 }}
                        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#161616] leading-tight"
                      >
                        <button
                          onClick={() => handleProjectClick(project)}
                          className="text-hover-slide hover:text-[#8c7b6d] text-left cursor-pointer transition-colors"
                        >
                          {project.title}
                        </button>
                      </motion.h3>
                    </div>

                    {/* 3. Explicit Design Nature & Look Description Boxes (Opposing Diagonal Slides) */}
                    <div className="space-y-3 mb-6">
                      {/* Design Nature: Slides in diagonally from bottom-left */}
                      <motion.div
                        initial={{ opacity: 0, x: -35, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className="p-3.5 bg-[#f0ece1] border-l-2 border-[#8c7b6d] text-xs transition-transform duration-500 hover:translate-x-1.5 shadow-sm"
                      >
                        <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-[#8c7b6d] font-medium mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#8c7b6d]" />
                          <span>Design Nature</span>
                        </div>
                        <p className="text-[#161616] font-medium leading-snug">{project.designNature}</p>
                      </motion.div>

                      {/* Look & Materiality: Slides in diagonally from bottom-right */}
                      <motion.div
                        initial={{ opacity: 0, x: 35, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="p-3.5 bg-[#f0ece1] border-l-2 border-[#161616]/30 text-xs transition-transform duration-500 hover:translate-x-1.5 shadow-sm"
                      >
                        <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-[#8c7b6d] font-medium mb-1">
                          <Palette className="w-3.5 h-3.5 text-[#8c7b6d]" />
                          <span>Look & Materiality</span>
                        </div>
                        <p className="text-[#161616]/85 font-light leading-relaxed">{project.look}</p>
                      </motion.div>
                    </div>

                    {/* 4. Description Paragraph: Cinematic Blur-to-Sharp Dissolve */}
                    <motion.p
                      initial={{ opacity: 0, y: 25, filter: 'blur(5px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                      className="text-sm text-[#161616]/75 font-light leading-relaxed mb-6"
                    >
                      {project.description}
                    </motion.p>

                    {/* 5. Architectural Highlights: Staggered Lateral Cascade */}
                    {project.features && project.features.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-[#161616]/10 pt-4 mb-6"
                      >
                        <ul className="space-y-2 text-xs text-[#161616]/70">
                          {project.features.slice(0, 2).map((feat, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false, amount: 0.15 }}
                              transition={{ duration: 0.5, delay: 0.32 + i * 0.08 }}
                              className="flex items-center space-x-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] shrink-0" />
                              <span>{feat}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* 6. Case Study CTA: Magnetic Scale & Pop Bounce */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94, y: 15 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        onClick={() => handleProjectClick(project)}
                        className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-medium text-[#161616] group cursor-pointer border-b border-[#161616] pb-1 hover:border-[#8c7b6d] hover:text-[#8c7b6d] transition-all"
                      >
                        <span>Open Project Carousel & Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
