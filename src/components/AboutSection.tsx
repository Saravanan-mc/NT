import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Play
} from 'lucide-react';
import { studioInfo } from '../data/teamData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 md:py-36 bg-[#141414] text-[#f7f5ef] overflow-hidden border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index & Discipline Tags: Multi-directional entrances */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-white/10">
          {/* Index Label: Slides from Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880]"
          >
            <span>02 / Studio Philosophy</span>
            <span className="w-8 h-[1px] bg-[#c5a880]" />
          </motion.div>

          {/* Discipline Badges: Slide from Right with staggered scale */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em]"
          >
            {['Architecture', 'Interiors', 'Construction', 'PMC'].map((discipline, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80"
              >
                {discipline}
              </span>
            ))}
            <span className="px-2.5 py-1 bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#c5a880]">
              Licensed Architect · CA/2022/149864
            </span>
          </motion.div>
        </div>

        {/* Poetic Creed & Core Ethos: Masked Text Line Reveal & Kinetic Tracking */}
        <div className="max-w-5xl mb-20 space-y-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2 text-[10px] sm:text-xs text-[#c5a880] mb-3"
            >
              <span className="uppercase tracking-[0.25em] font-mono">Atelier Creed</span>
              <span className="text-white/40">·</span>
              <span className="font-tamil tracking-normal text-xs text-[#c5a880] font-normal" lang="ta">நற்பணி</span>
            </motion.div>

            {/* Tamil Motto */}
            <div className="py-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                lang="ta"
                className="font-serif font-tamil text-2xl sm:text-3xl md:text-4xl text-[#f7f5ef] font-light leading-relaxed tracking-normal"
              >
                “கண்டதும் இனித்திடும் <span className="text-[#c5a880]">நற்குடிலொன்று</span> செய்வோம்!”
              </motion.h2>
            </div>
          </div>

          {/* English Ethos: Blur-to-Sharp Kinetic Reveal */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-lg sm:text-2xl text-white/85 font-light leading-snug italic max-w-4xl pt-2"
            >
              “EVERY LIFE FORM HAS A REASON FOR ITS EXISTENCE., AND SO, WE ARE HERE TO DESIGN THE FUTURE OF OUR ERA!”
            </motion.p>
          </div>

          {/* Founder Subtitle: Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.2em] text-[#c5a880] font-light"
          >
            <span className="text-white font-medium">Ar. Karthikraja G, B.Arch</span>
            <span>·</span>
            <span>Founder & Principal Architect</span>
            <span>·</span>
            <span>Kasipalayam, Erode</span>
          </motion.div>
        </div>

        {/* Split Visual & Concise Atelier Overview: Left Image <-> Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 pb-20 border-b border-white/10">
          {/* Left: Atelier Workshop Visual enters from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -65, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-white/5 border border-white/10 group shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
              alt="Nedunthatchan Architects Atelier"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Right: Overview & Credentials enter from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Narrative with blur-in */}
            <motion.p
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-white/85 font-light leading-relaxed max-w-xl"
            >
              Sculpting climatically responsive architectural works, bespoke residences, and commercial landmarks across Tamil Nadu. Defined by pure geometry, natural light, and end-to-end turnkey precision.
            </motion.p>

            {/* Quick Credentials Strip: 3 Distinct Entrance Vectors (Left, Center, Right) */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
              {/* Stat 1: From Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-serif text-2xl sm:text-3xl text-white font-light block">5.0 ★</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">Google Rating</span>
              </motion.div>

              {/* Stat 2: From Down */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-serif text-2xl sm:text-3xl text-white font-light block">7+ Yrs</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">In Practice</span>
              </motion.div>

              {/* Stat 3: From Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-serif text-2xl sm:text-3xl text-white font-light flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-beacon-ping inline-block shrink-0" />
                  <span>24 / 7</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">Client Access</span>
              </motion.div>
            </div>

            {/* Quick Action & Official Social Channels: Staggered Scale-Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              <a
                href="tel:+919500975083"
                className="px-4 py-2 bg-white text-[#161616] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#c5a880] hover:text-white transition-colors flex items-center space-x-1.5 shadow-md"
              >
                <Phone className="w-3 h-3" />
                <span>Call Studio</span>
              </a>

              <a
                href="https://wa.me/919500975083?text=Hello%20Ar.%20Karthikraja%20G,%20I%20would%20like%20to%20consult%20with%20Nedunthatchan%20Architects."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity flex items-center space-x-1.5 shadow-md"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@karthickraja583?si=j-iuMlALTFUs_qeB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#FF0000]/15 border border-[#FF0000]/40 text-[#FF4D4D] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#FF0000] hover:text-white transition-all flex items-center space-x-1.5"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>YouTube</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nt__architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                Instagram
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@nt__architects"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                Threads
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Nedunthatchan-Architects-61564874193582/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Execution Methodology: Masked Header & Alternating Staggered Cards */}
        <div className="mb-24">
          <div className="mb-12 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs uppercase tracking-[0.25em] text-[#c5a880] block mb-2 font-mono"
            >
              Execution Methodology
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-4xl font-light text-white"
            >
              How We Sculpt Spaces from Blueprint to Reality
            </motion.h3>
          </div>

          {/* 4 Methodology Cards: Multi-directional Diagonal & Vertical Entrances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Solar & Wind Climatology',
                desc: 'Sun-path, thermal gradient, and monsoon wind analysis before drafting initial concepts.',
                direction: { x: -35, y: 25 },
              },
              {
                step: '02',
                title: 'Generative 3D & VR Modeling',
                desc: 'Proportion refinement through physical massing, photorealistic 3D renders, and VR walkthroughs.',
                direction: { x: 0, y: 40 },
              },
              {
                step: '03',
                title: 'Biophilic Integration',
                desc: 'Central courtyards, water bodies, teak louvers, and perforated terracotta jalis for passive cooling.',
                direction: { x: 0, y: 40 },
              },
              {
                step: '04',
                title: 'Turnkey Stewardship',
                desc: 'Meticulous on-site execution, material procurement, timeline adherence, and final key handover.',
                direction: { x: 35, y: 25 },
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: item.direction.x, y: item.direction.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-white/[0.03] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-lg group"
              >
                <span className="font-mono text-2xl font-light text-[#c5a880] block mb-4 group-hover:translate-x-1 transition-transform">
                  {item.step}
                </span>
                <h4 className="font-serif text-lg font-light text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Stats Row: Multi-directional Staggered Fan (Left, Center-Left, Center-Right, Right) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center sm:text-left">
          {[
            { value: '5.0 ★', label: 'Google Verified Rating', dirX: -40, dirY: 0 },
            { value: '7+', label: 'Years in Practice', dirX: 0, dirY: 35 },
            { value: '120+', label: 'Built Luxury Projects', dirX: 0, dirY: 35 },
            { value: '100%', label: 'Turnkey Stewardship', dirX: 40, dirY: 0 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: stat.dirX, y: stat.dirY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <span className="font-serif text-2xl sm:text-4xl text-white font-light block">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] block font-light">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
