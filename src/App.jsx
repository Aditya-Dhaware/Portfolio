import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import useScrollReveal from './hooks/useScrollReveal';
import useTheme from './hooks/useTheme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerMarquee from './components/TickerMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GithubCommandCenter from './components/GithubCommandCenter';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

import './styles/index.css';
import './styles/components.css';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const lenisRef = useRef(null);

  // Initialize lazy scroll reveals (scroll-triggered appearance of components)
  useScrollReveal();

  // Initialize buttery smooth scrolling via Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
    };
  }, []);

  // Pause Lenis virtual scrolling when modal is open so the modal can scroll natively
  useEffect(() => {
    if (isResumeModalOpen) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [isResumeModalOpen]);

  return (
    <div className="portfolio-app-root">
      {/* Ambient Lighting & Cyber Grid Background */}
      <div className="bg-cyber-grid" aria-hidden="true" />
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />

      {/* Floating Pill Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeModalOpen(true)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        {/* Hero Section with animated typewriter & stats */}
        <Hero />

        {/* Infinite Scrolling Ticker */}
        <TickerMarquee />

        {/* Concise Narrative & Interactive Code Terminal */}
        <About />

        {/* Production Experience (PVG's College ERP Billing Engine) */}
        <Experience />

        {/* Selected Work (Xoom, Wanderlust, TradeX, ERP with crisp Problem-Solution-Impact) */}
        <Projects />

        {/* Technical Mastery Matrix */}
        <Skills />

        {/* Live GitHub Contribution Map & Dev Station Specs */}
        <GithubCommandCenter theme={theme} />

        {/* Academic Degrees & Professional Certifications */}
        <EducationCertifications />

        {/* Contact & Project Briefing Terminal */}
        <Contact />
      </main>

      {/* Site Footer with live Pune Clock */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
        theme={theme}
      />
    </div>
  );
}
