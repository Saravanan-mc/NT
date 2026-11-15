import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollToTop } from './components/ScrollToTop';
import { AppointmentModal } from './components/AppointmentModal';
import { Preloader } from './components/Preloader';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <Router>
      {/* Editorial Luxury Architectural Preloader */}
      <Preloader />

      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f7f5ef] text-[#161616] selection:bg-[#161616] selection:text-[#f7f5ef]">
          {/* Studio Header */}
          <Header onOpenConsultation={handleOpenConsultation} />

          {/* Unified Single-Page Application View */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Studio Footer */}
          <Footer />

          {/* Global WhatsApp Floating Action Icon */}
          <WhatsAppButton />

          {/* Global Appointment Consultation Modal */}
          <AppointmentModal
            isOpen={isConsultationOpen}
            onClose={handleCloseConsultation}
          />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;
