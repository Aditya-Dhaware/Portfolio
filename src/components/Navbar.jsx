import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Mail, Sun, Moon, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume, theme = 'dark', toggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const isLight = theme === 'light';

  return (
    <>
      <header className="navbar-wrapper">
        <nav 
          className="navbar-pill"
          style={{
            borderColor: scrolled 
              ? (isLight ? 'rgba(2, 132, 199, 0.35)' : 'rgba(0, 240, 255, 0.25)') 
              : (isLight ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255, 255, 255, 0.12)'),
            boxShadow: scrolled 
              ? (isLight ? '0 10px 30px -5px rgba(15, 23, 42, 0.12), 0 0 15px rgba(2, 132, 199, 0.08)' : '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 240, 255, 0.1)') 
              : (isLight ? '0 10px 30px -5px rgba(15, 23, 42, 0.06)' : '0 10px 30px -5px rgba(0, 0, 0, 0.7)')
          }}
        >
          <a href="#" className="nav-brand" aria-label="Aditya Dhaware">
            <span className="brand-dot"></span>
            <span>{PERSONAL_INFO.initials}</span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button 
              type="button" 
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button 
              type="button" 
              onClick={onOpenResume}
              className="liquid-glass-btn nav-resume-btn"
              title="View or Download Resume"
            >
              <FileText size={14} className="text-cyan" />
              <span>Resume</span>
            </button>

            <button
              type="button"
              className={`mobile-menu-btn ${isMobileOpen ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileOpen}
            >
              <div className="hamburger-icon-wrapper">
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Out Drawer (Always in DOM for silky smooth CSS transitions) */}
      <div 
        className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <div className="mobile-nav-header">
          <a 
            href="#" 
            className="nav-brand" 
            onClick={() => setIsMobileOpen(false)}
            aria-label="Aditya Dhaware Home"
          >
            <span className="brand-dot"></span>
            <span>{PERSONAL_INFO.name}</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button 
              type="button" 
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button 
              type="button" 
              className="mobile-nav-close-btn"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="mobile-nav-body">
          <ul className="mobile-nav-links">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span className="mobile-nav-link-left">
                    <span className="mobile-nav-index">0{index + 1}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                  </span>
                  <ArrowUpRight size={20} className="mobile-nav-arrow" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
              <a 
                href="/Aditya_Dhaware_Resume.pdf"
                download="Aditya_Dhaware_Resume.pdf"
                onClick={() => setIsMobileOpen(false)}
                className="primary-btn mobile-nav-resume-btn"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>
              <button 
                type="button" 
                onClick={() => { setIsMobileOpen(false); onOpenResume(); }}
                className="liquid-glass-btn"
                style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
              >
                <FileText size={15} />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>

            <div className="mobile-nav-socials">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="GitHub Profile">
                <GithubIcon size={18} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="LinkedIn Profile">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="social-circle-btn" aria-label="Email Aditya">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
