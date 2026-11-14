import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    location: '',
    preferredOffice: 'Erode Head Atelier',
    estimatedBudget: 'Above ₹1.5 Cr',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof AppointmentFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.location.trim()) errs.location = 'Project site location is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      (window as any).__lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      (window as any).__lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      (window as any).__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
          data-lenis-prevent="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10 relative pointer-events-none">
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#faf8f2] border border-[#161616]/20 p-6 sm:p-10 shadow-2xl z-10 pointer-events-auto my-6"
              data-lenis-prevent="true"
            >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#161616]/60 hover:text-[#161616] transition-colors"
              aria-label="Close appointment modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#161616] text-[#c5a880] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#161616]">
                  Inquiry Registered
                </h3>
                <p className="text-xs md:text-sm text-[#161616]/70 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Nedunthatchan Architects. Our principal atelier will review your project brief and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-[#161616] text-[#f7f5ef] text-xs uppercase tracking-[0.2em]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8c7b6d] block mb-1">
                    Private Client Services
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#161616]">
                    Begin Your Architectural Journey
                  </h3>
                  <p className="text-xs text-[#161616]/60 mt-1 font-light">
                    Direct communication with Ar. Karthikraja G (Founder & Principal Architect, CA/2022/149864).
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#f7f5ef] border px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616] ${
                          errors.fullName ? 'border-red-500' : 'border-[#161616]/20'
                        }`}
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#f7f5ef] border px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616] ${
                          errors.phone ? 'border-red-500' : 'border-[#161616]/20'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#f7f5ef] border px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616] ${
                          errors.email ? 'border-red-500' : 'border-[#161616]/20'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Site Location *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Erode / Coimbatore / Salem..."
                        className={`w-full bg-[#f7f5ef] border px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616] ${
                          errors.location ? 'border-red-500' : 'border-[#161616]/20'
                        }`}
                      />
                      {errors.location && <p className="text-[10px] text-red-500 mt-0.5">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Service Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                        className="w-full bg-[#f7f5ef] border border-[#161616]/20 px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616]"
                      >
                        <option value="Architecture">Comprehensive Architecture</option>
                        <option value="Interior Design">Haute Interior Design</option>
                        <option value="Turnkey Studio">Turnkey Architecture & Interior</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                        Preferred Studio Meeting
                      </label>
                      <select
                        value={formData.preferredOffice}
                        onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value as any })}
                        className="w-full bg-[#f7f5ef] border border-[#161616]/20 px-3 py-2.5 text-xs text-[#161616] focus:outline-none focus:border-[#161616]"
                      >
                        <option value="Erode Head Atelier">Erode Head Atelier (Kasipalayam)</option>
                        <option value="On-Site Site Meeting">On-Site Plot / Property Meeting</option>
                        <option value="Virtual Consultation">Virtual Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#161616] font-medium mb-1">
                      Project Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share estimated square footage, timeline, or specific requirements..."
                      className="w-full bg-[#f7f5ef] border border-[#161616]/20 px-3 py-2 text-xs text-[#161616] focus:outline-none focus:border-[#161616]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#161616] text-[#f7f5ef] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8c7b6d] transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? <span>Submitting...</span> : (
                        <>
                          <span>Request Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
        </div>
      )}
    </AnimatePresence>
  );
};

