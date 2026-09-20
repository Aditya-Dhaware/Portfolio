import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Sparkles, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import adityaPhoto from '../assets/aditya-photo.jpg';

export default function Hero() {
  const roles = [
    "Full-Stack MERN Developer",
    "React.js & Node.js Engineer",
    "MongoDB & Express Architect",
    "Real-Time WebRTC Developer",
    "FastAPI & Microservices Engineer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-main-grid">
          {/* Left Column: Text & Action CTAs */}
          <div className="hero-content-col">
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="status-indicator">
                <span className="status-indicator-ping"></span>
                <span className="status-indicator-core"></span>
              </span>
              <span>{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Hero Title */}
            <h1 className="hero-main-title">
              <span className="hero-gradient-text">ADITYA</span>{' '}
              <span className="editorial-italic">Dhaware.</span>
            </h1>

            {/* Dynamic Typing Role */}
            <div className="hero-role-bar">
              <Terminal size={18} color="var(--accent-cyan)" />
              <span>&gt; {displayText}</span>
              <span className="role-typing-cursor"></span>
            </div>

            {/* Bio Pitch */}
            <p className="hero-description">
              Full-Stack MERN Developer &amp; Software Engineer architecting scalable web applications with 
              MongoDB, Express.js, React.js, and Node.js. Combining robust MERN full-stack foundations with 
              real-time WebRTC communications from Pune, Maharashtra.
            </p>

            {/* Action Dock */}
            <div className="hero-actions-dock">
              <a href="#projects" className="primary-btn">
                <span>Explore Engineering Work</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="liquid-glass-btn">
                <Sparkles size={16} color="var(--accent-emerald)" />
                <span>Initiate Contact</span>
              </a>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="liquid-glass-btn"
              >
                <FolderGit2 size={16} color="var(--accent-cyan)" />
                <span>GitHub Profile ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Showcase */}
          <div className="hero-image-col">
            <div className="hero-profile-container">
              {/* Ambient Radial Glow */}
              <div className="hero-photo-glow" aria-hidden="true" />

              {/* Glassmorphic Photo Card */}
              <div className="hero-photo-card">
                <div className="hero-photo-inner">
                  <img 
                    src={adityaPhoto} 
                    alt="Aditya Dhaware - Full-Stack MERN Developer" 
                    className="hero-profile-img"
                    loading="eager"
                  />
                  <div className="hero-photo-vignette" aria-hidden="true" />
                </div>

                {/* Floating Live Badge: Location & Status */}
                <div className="hero-photo-badge badge-top">
                  <span className="badge-dot-live"></span>
                  <span>Pune, IN • Open to Work</span>
                </div>

                {/* Floating Tech Badge: MERN Specialization */}
                <div className="hero-photo-badge badge-bottom">
                  <span className="badge-mern-tag">⚡ MERN Stack</span>
                  <span className="badge-subtext">React • Node • WebRTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers & Academic Rigor */}
        <div className="hero-stats-grid">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <div className="stat-value">
                {stat.value}
                {stat.unit && <span>{stat.unit}</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-highlight">{stat.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
