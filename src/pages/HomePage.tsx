import React, { useRef, useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { RecentProjects } from '../components/RecentProjects';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {
  onOpenConsultation?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !heroWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Butter-smooth scale-down and subtle dimming of the hero video as the site smoothly glides over it
      gsap.to(heroWrapperRef.current, {
        scale: 0.94,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '#website-content',
          start: 'top bottom',
          end: 'top top',
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full relative">
      {/* 1. STICKY HERO VIDEO LAYER (Pinned to top as page scrolls over it) */}
      <div
        id="hero"
        ref={heroWrapperRef}
        className="sticky top-0 w-full h-screen z-0 origin-center will-change-transform"
      >
        <Hero />
      </div>

      {/* 2. CURTAIN OVERLAY: THE REST OF THE WEBSITE MOVES OVER THE VIDEO WITH ZERO RADIUS & SMOOTH TRANSITION */}
      <div
        id="website-content"
        className="relative z-10 bg-[#faf8f2] rounded-none shadow-[0_-25px_60px_rgba(0,0,0,0.5)] border-t border-black/10"
      >
        {/* 2. MASTER ARCHITECTURAL PORTFOLIO: ALL UNIQUE WORKS (EACH APPEARING EXACTLY ONCE) */}
        <RecentProjects onSelectProject={setSelectedProject} />

        {/* 3. ABOUT STUDIO, PHILOSOPHY & LEADERSHIP */}
        <AboutSection />

        {/* 4. CONTACT & LOCATION */}
        <ContactSection />
      </div>

      {/* Interactive Project Multi-Slide Carousel & Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        projects={projectsData}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        onOpenConsultation={onOpenConsultation}
      />
    </main>
  );
};
