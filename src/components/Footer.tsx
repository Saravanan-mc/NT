import React from 'react';
import { studioInfo } from '../data/teamData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-[#f7f5ef] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top brand & back to top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-14 mb-16 gap-8">
          <div className="flex items-center space-x-5">
            <img
              src="/logo.png"
              alt="Nedunthatchan Architects Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-lg border border-white/10"
            />
            <div>
              <span className="font-serif text-2xl sm:text-4xl font-light tracking-[0.16em] block uppercase">
                NEDUNTHATCHAN ARCHITECTS
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a880] font-light mt-1 block">
                Architectural Works · Bespoke Interiors · Structural Synergy
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* 4-column minimal links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-xs font-light">
          {/* Navigation */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
              Navigation
            </span>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Studio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact Atelier
                </button>
              </li>
            </ul>
          </div>

          {/* Erode Atelier */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
              Erode Head Atelier
            </span>
            <p className="text-white/70 leading-relaxed">
              {studioInfo.offices[0].doorNo}, {studioInfo.offices[0].street}, {studioInfo.offices[0].landmark}, {studioInfo.offices[0].area}, {studioInfo.offices[0].city} - {studioInfo.offices[0].pincode}, {studioInfo.offices[0].state}
            </p>
            <p className="text-white/70">
              T: <a href={`tel:${studioInfo.phoneRaw}`} className="hover:text-white transition-colors">{studioInfo.phone}</a>
            </p>
            <p className="pt-1">
              <a
                href={studioInfo.offices[0].googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline uppercase tracking-wider text-[10px]"
              >
                View on Google Maps →
              </a>
            </p>
          </div>

          {/* Principal & Credentials */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
              Principal & Atelier
            </span>
            <p className="text-white/90 font-medium">
              {studioInfo.founder} ({studioInfo.degree})
            </p>
            <p className="text-white/60 text-[11px]">
              Council of Architecture Reg: {studioInfo.coaRegistration}
            </p>
            <div className="pt-2 text-white/50 text-[11px] italic font-serif leading-relaxed">
              "{studioInfo.ethos}"
            </div>
            <div className="text-[11px] text-[#c5a880] font-medium pt-1">
              Google Rating: {studioInfo.googleReviewRating}
            </div>
          </div>

          {/* Socials & Legal */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
              Social Dispatches
            </span>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* YouTube */}
              <a
                href="https://youtube.com/@karthickraja583?si=j-iuMlALTFUs_qeB"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube - @karthickraja583"
                aria-label="YouTube @karthickraja583"
                className="w-10 h-10 border border-white/20 hover:border-[#FF0000] bg-white/[0.04] hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nt__architects/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram - @nt__architects"
                aria-label="Instagram @nt__architects"
                className="w-10 h-10 border border-white/20 hover:border-[#E1306C] bg-white/[0.04] hover:bg-[#E1306C] text-white flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@nt__architects"
                target="_blank"
                rel="noopener noreferrer"
                title="Threads - @nt__architects"
                aria-label="Threads @nt__architects"
                className="w-10 h-10 border border-white/20 hover:border-white bg-white/[0.04] hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.203-8.184-3.503C2.264 18.318 1.48 15.19 1.66 11.2 2.03 3.02 8.44.024 12.58 0c4.148-.024 8.784 1.83 10.428 6.46.99 2.79.625 6.096-.983 8.84-1.782 3.04-4.872 4.7-8.718 4.7-2.613 0-4.63-.848-5.836-2.454-.954-1.27-1.393-2.908-1.27-4.733.228-3.468 2.593-5.59 5.892-5.59 1.745 0 3.25.615 4.35 1.777.29-.16.57-.33.84-.52.92-.64 1.55-1.54 1.81-2.58.53-2.09-.34-4.04-2.31-5.18-1.89-1.09-4.32-1.47-7.23-1.12-5.4.65-9.67 4.96-9.98 10.05-.33 5.4 3.06 10.15 8.08 11.32 3.8.88 7.39-.12 9.87-2.73l1.52 1.48c-3.03 3.19-7.38 4.41-11.96 3.32z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Nedunthatchan-Architects-61564874193582/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook - Nedunthatchan Architects"
                aria-label="Facebook Nedunthatchan Architects"
                className="w-10 h-10 border border-white/20 hover:border-[#1877F2] bg-white/[0.04] hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 group shadow-sm"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <p className="text-[11px] text-white/45 pt-1 font-light leading-relaxed">
              Explore our architectural films, design stories & site walkthroughs.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-[0.15em] text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Nedunthatchan Architects. All rights reserved.</p>
          <p>Erode, Tamil Nadu, India · COA Reg: {studioInfo.coaRegistration}</p>
        </div>
      </div>
    </footer>
  );
};

