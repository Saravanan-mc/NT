import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface ArchitectureSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'villas' | 'sanctuaries'>('all');

  const architectureProjects = projectsData.filter((p) => p.category === 'architecture');

  const filteredProjects = activeFilter === 'all'
    ? architectureProjects
    : activeFilter === 'villas'
    ? architectureProjects.filter((p) => p.title.toLowerCase().includes('villa') || p.subtitle.toLowerCase().includes('villa'))
    : architectureProjects.filter((p) => !p.title.toLowerCase().includes('villa'));

  const handleProjectClick = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section id="portfolio-section" className="py-24 md:py-36 bg-[#faf8f2] border-b border-[#161616]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#161616]/15 gap-8">
          <div>
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#8c7b6d] mb-3">
              <span>04 / Portfolio Archive</span>
              <span className="w-8 h-[1px] bg-[#8c7b6d]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#161616]">
              Architectural Works
            </h2>
            <p className="text-xs md:text-sm text-[#161616]/70 font-light leading-relaxed mt-3 max-w-xl">
              Sculptural private residences, contemporary cantilevered pavilions, and contextually grounded monoliths crafted with natural timber, monolithic stone, and passive solar illumination.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.2em] self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`pb-1 transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'border-b-2 border-[#161616] text-[#161616] font-medium'
                  : 'text-[#161616]/50 hover:text-[#161616]'
              }`}
            >
              All Works ({architectureProjects.length})
            </button>
            <span className="text-[#161616]/20">/</span>
            <button
              onClick={() => setActiveFilter('villas')}
              className={`pb-1 transition-colors cursor-pointer ${
                activeFilter === 'villas'
                  ? 'border-b-2 border-[#161616] text-[#161616] font-medium'
                  : 'text-[#161616]/50 hover:text-[#161616]'
              }`}
            >
              Villas
            </button>
            <span className="text-[#161616]/20">/</span>
            <button
              onClick={() => setActiveFilter('sanctuaries')}
              className={`pb-1 transition-colors cursor-pointer ${
                activeFilter === 'sanctuaries'
                  ? 'border-b-2 border-[#161616] text-[#161616] font-medium'
                  : 'text-[#161616]/50 hover:text-[#161616]'
              }`}
            >
              Sanctuaries
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <button
                onClick={() => handleProjectClick(project)}
                className="block overflow-hidden relative mb-5 cursor-pointer text-left w-full"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#161616]/5 border border-[#161616]/10">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Design Nature badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#161616]/85 backdrop-blur-sm text-[#f7f5ef] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] line-clamp-1">
                  {project.designNature}
                </div>
              </button>

              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8c7b6d] font-medium block">
                  {project.designNature}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#161616] group-hover:text-[#8c7b6d] transition-colors">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="hover:opacity-80 transition-opacity text-left cursor-pointer"
                  >
                    {project.title}
                  </button>
                </h3>

                {/* Explicit Look Description */}
                <p className="text-xs text-[#161616]/75 font-light leading-relaxed line-clamp-2">
                  <span className="text-[#8c7b6d] font-medium">Look:</span> {project.look}
                </p>

                <button
                  onClick={() => handleProjectClick(project)}
                  className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.2em] text-[#161616] font-medium pt-2 group-hover:text-[#8c7b6d] transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
