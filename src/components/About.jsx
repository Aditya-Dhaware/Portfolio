import React from 'react';
import { MapPin, GraduationCap, Code, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[01] ABOUT • BACKGROUND</span>
          </div>

          <h2 className="section-title">
            About&nbsp;<span className="italic-serif"> Me</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
            Crafting systems that handle unpredictable network conditions, concurrency bottlenecks, 
            and complex real-time states without breaking a sweat.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text-content reveal-on-scroll reveal-left">
            {PERSONAL_INFO.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <div className="about-badges-row">
              <div className="about-badge">
                <MapPin size={14} color="var(--accent-cyan)" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="about-badge">
                <GraduationCap size={14} color="var(--accent-emerald)" />
                <span>SPPU Graduate (A+ Distinction)</span>
              </div>
              <div className="about-badge">
                <Code size={14} color="var(--accent-cyan)" />
                <span>Full-Stack MERN Developer</span>
              </div>
              <div className="about-badge">
                <ShieldCheck size={14} color="var(--accent-emerald)" />
                <span>HMAC &amp; Idempotency Specialist</span>
              </div>
            </div>
          </div>

          {/* Code Terminal Visualizer */}
          <div className="about-card-terminal reveal-on-scroll reveal-right">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <span className="terminal-title">aditya_profile.json</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)' }}>● SYNTAX OK</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-label">const</span> <span style={{ color: 'var(--text-white)' }}>engineer</span> = &#123;
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">name:</span> <span className="terminal-value">"{PERSONAL_INFO.name}"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">role:</span> <span className="terminal-value">"Full-Stack MERN Developer"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">location:</span> <span className="terminal-value">"{PERSONAL_INFO.location}"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">education:</span> <span className="terminal-value">"M.Sc. Computer Application (CGPA: 8.41)"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">previousDegree:</span> <span className="terminal-value">"B.Sc. Computer Science (CGPA: 8.83)"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">coreMernStack:</span> [
                <span style={{ color: 'var(--accent-cyan)' }}> "MongoDB"</span>,
                <span style={{ color: 'var(--accent-cyan)' }}> "Express.js"</span>,
                <span style={{ color: 'var(--accent-cyan)' }}> "React.js"</span>,
                <span style={{ color: 'var(--accent-cyan)' }}> "Node.js"</span>
                ],
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">additionalServices:</span> [
                <span style={{ color: 'var(--accent-cyan)' }}> "FastAPI"</span>,
                <span style={{ color: 'var(--accent-cyan)' }}> "PostgreSQL"</span>
                ],
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">realtimeProtocols:</span> [
                <span style={{ color: 'var(--accent-emerald)' }}>"WebRTC"</span>,
                <span style={{ color: 'var(--accent-emerald)' }}> "Socket.IO"</span>
                ],
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">currentFocus:</span> <span className="terminal-value">"Building high-concurrency web systems"</span>,
              </div>
              <div className="terminal-line" style={{ paddingLeft: '1.25rem' }}>
                <span className="terminal-label">status:</span> <span style={{ color: 'var(--accent-emerald)' }}>"Available for Opportunities"</span>
              </div>
              <div className="terminal-line">&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
