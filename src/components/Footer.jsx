import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-row reveal-on-scroll">
          <div className="footer-brand">
            <h3>{PERSONAL_INFO.name}</h3>
            <p>{PERSONAL_INFO.tagline}</p>
          </div>

          <div className="footer-social-dock">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-circle-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-circle-btn"
              title="Send Direct Email"
              aria-label="Send Direct Email"
            >
              <Mail size={18} />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="social-circle-btn"
              title="Call Phone / WhatsApp"
              aria-label="Call Phone / WhatsApp"
            >
              <Phone size={18} />
            </a>

            <button
              type="button"
              className="social-circle-btn"
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Back to top"
              style={{ background: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)', borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row reveal-on-scroll reveal-delay-2">
          <div>
            <span>© 2026 {PERSONAL_INFO.name}. Built with React, Vite &amp; Vanilla CSS Tokens.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={13} color="var(--accent-cyan)" />
            <span>PUNE, MH: {time} IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
