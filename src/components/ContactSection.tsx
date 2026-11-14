import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, ExternalLink, Award, Star, Compass, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/teamData';

export const ContactSection: React.FC = () => {
  const office = studioInfo.offices[0];

  return (
    <section id="contact-section" className="py-24 md:py-36 bg-[#f7f5ef] border-b border-[#161616]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header: Left <-> Right Opposing Entrances */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#161616]/15 gap-8">
          {/* Header Title: Slides from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#8c7b6d] mb-3">
              <span>Connect & Direct Engagement</span>
              <span className="w-8 h-[1px] bg-[#8c7b6d]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#161616]">
              Contact Atelier
            </h2>
          </motion.div>

          {/* Header Ethos Quote: Slides from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-0 max-w-lg"
          >
            <p className="text-xs md:text-sm text-[#161616]/75 font-light leading-relaxed italic font-serif">
              "{studioInfo.ethos}"
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c7b6d] mt-2 font-medium">
              — {studioInfo.founder} ({studioInfo.degree}) · {studioInfo.coaRegistration}
            </p>
          </motion.div>
        </div>

        {/* 2-Column Balanced Luxury Showcase: Left Studio Info <-> Right Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Enters from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 flex flex-col justify-between"
          >
            <div className="bg-[#faf8f2] border border-[#161616]/10 p-8 sm:p-10 space-y-6 hover:border-[#161616]/30 transition-colors shadow-sm">
              <div className="flex items-start justify-between border-b border-[#161616]/10 pb-5">
                <div>
                  <h3 className="font-serif text-3xl font-light text-[#161616]">
                    {office.city} Atelier
                  </h3>
                  <p className="text-xs text-[#8c7b6d] uppercase tracking-[0.2em] font-medium mt-1">
                    {office.role}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 bg-[#161616] text-[#f7f5ef] px-3 py-1.5 text-xs font-medium rounded-none shadow-sm">
                  <Star className="w-3.5 h-3.5 text-[#c5a880] fill-[#c5a880]" />
                  <span>{studioInfo.googleReviewRating}</span>
                </div>
              </div>

              {/* Founder Credential Ribbon: Diagonal Pop */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="flex items-center space-x-3.5 bg-[#f3efe6] p-4 border border-[#161616]/5 text-xs text-[#161616]"
              >
                <Award className="w-5 h-5 text-[#8c7b6d] flex-shrink-0" />
                <div className="leading-snug">
                  <span className="font-medium text-sm text-[#161616] block">{studioInfo.founder}</span>
                  <span className="text-[#161616]/65 block text-[11px] uppercase tracking-wider mt-0.5">
                    {studioInfo.degree} · Council of Architecture Reg: {studioInfo.coaRegistration}
                  </span>
                </div>
              </motion.div>

              {/* Verified Atelier Specifications: Cascading Stagger */}
              <div className="space-y-4 text-xs text-[#161616]/80 pt-1">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-[#8c7b6d] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#161616] block">{office.address}</span>
                    <span className="text-[11px] text-[#161616]/60">
                      Landmark: {office.landmark} · {office.area}, {office.city} — {office.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Compass className="w-4 h-4 text-[#8c7b6d] flex-shrink-0" />
                  <span className="font-mono text-[11px] text-[#161616]/75">
                    Coordinates: {office.coordinates}
                  </span>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Phone className="w-4 h-4 text-[#8c7b6d] flex-shrink-0" />
                  <a
                    href={`tel:${studioInfo.phoneRaw}`}
                    className="hover:text-[#8c7b6d] transition-colors font-medium text-sm text-[#161616]"
                  >
                    {studioInfo.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Clock className="w-4 h-4 text-[#8c7b6d] flex-shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </div>

              {/* Quick Action Contact CTAs: Staggered Diagonal Entrance */}
              <div className="pt-4 border-t border-[#161616]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${studioInfo.phoneRaw}`}
                  className="py-3 px-4 bg-[#161616] text-[#f7f5ef] text-[11px] uppercase tracking-[0.18em] font-medium text-center hover:bg-[#8c7b6d] transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={`https://wa.me/${studioInfo.phoneRaw.replace('+', '')}?text=Hello%20Nedunthatchan%20Architects,%20I%20would%20like%20to%20discuss%20an%20architectural%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.18em] font-medium text-center hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Principal Access Dialogue Banner: Blur-to-focus fade from bottom */}
            <motion.div
              initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-[#161616] text-[#f7f5ef] space-y-4 shadow-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] block font-medium">
                Private Client Appointments & Site Reviews
              </span>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                For confidential inquiries, residential estates, or site appointments with {studioInfo.founder}, we welcome patrons across Erode, Coimbatore, Tiruppur, Salem, Chennai, and throughout Tamil Nadu.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs border-t border-white/10 text-white/60 gap-2">
                <span>By Prior Private Arrangement</span>
                <span className="text-[#c5a880] uppercase tracking-wider font-mono text-[11px]">COA: {studioInfo.coaRegistration}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Full-Height Interactive Google Map enters from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="bg-[#faf8f2] border border-[#161616]/10 p-3 shadow-md flex flex-col h-full justify-between">
              {/* Full-Height Embedded Google Map - Always in Full Natural Color */}
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-[#161616]/5 overflow-hidden border border-[#161616]/10">
                <iframe
                  title="Nedunthatchan Architects Location"
                  src={office.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-all duration-300"
                />
              </div>

              {/* Map Footer Bar with One-Click Directions */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#161616]/10 mt-3">
                <div>
                  <span className="uppercase tracking-[0.2em] text-[10px] text-[#8c7b6d] block font-medium">
                    Kasipalayam, Erode
                  </span>
                  <span className="font-serif text-lg text-[#161616] block">
                    Nedunthatchan Architects
                  </span>
                  <span className="text-xs text-[#161616]/60">
                    Near Lakshmi Nei Store, Valayakara Street
                  </span>
                </div>

                <a
                  href={office.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#161616] text-[#f7f5ef] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#8c7b6d] transition-colors flex items-center justify-center space-x-2 shrink-0 self-start sm:self-auto cursor-pointer shadow-sm group"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
