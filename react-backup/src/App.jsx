import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AffiliatePage from './pages/AffiliatePage';
import FAQPage from './pages/FAQPage';
import ChallengesPage from './pages/ChallengesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
