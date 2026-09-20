import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink, GraduationCap, Briefcase, Award, Mail, Phone, Layers } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => dialogRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      data-lenis-prevent="true"
    >
      <div 
        ref={dialogRef}
        tabIndex={-1}
        className="resume-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-emerald)', textTransform: 'uppercase' }}>
              Official Curriculum Vitae
            </span>
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-white)' }}>{PERSONAL_INFO.name}</h2>
          <p style={{ color: 'var(--accent-cyan)', fontSize: '1rem', fontWeight: 700, marginTop: '0.2rem' }}>
            {PERSONAL_INFO.role}
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1.25rem', 
            marginTop: '0.85rem', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Mail size={13} color="var(--accent-cyan)" /> {PERSONAL_INFO.email}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Phone size={13} color="var(--accent-emerald)" /> {PERSONAL_INFO.phone}
            </span>
            <span>📍 {PERSONAL_INFO.location}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button 
              type="button" 
              onClick={handlePrint}
              className="primary-btn"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}
            >
              <Download size={14} />
              <span>Print / Save as PDF</span>
            </button>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-btn"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}
            >
              <span>LinkedIn Profile</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* MERN Architecture Summary Banner */}
        <div style={{ 
          background: 'var(--accent-cyan-dim)', 
          border: '1px solid var(--border-cyan)', 
          borderRadius: '0.75rem', 
          padding: '1rem 1.25rem', 
          marginBottom: '1.5rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Layers size={15} color="var(--accent-cyan)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
              Core Specialization: Full-Stack MERN Architecture
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
            Full-Stack MERN Developer with proven production experience delivering responsive React.js frontends, high-throughput Node.js &amp; Express APIs, and scalable MongoDB databases. Experienced with automated billing systems, real-time WebRTC streams, and secure HMAC webhook pipelines.
          </p>
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-white)' }}>
            <Briefcase size={16} color="var(--accent-cyan)" />
            <span>Professional Experience</span>
          </h3>

          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} style={{ background: 'var(--bg-subtle-pill)', border: '1px solid var(--border-subtle)', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                <strong style={{ color: 'var(--text-white)', fontSize: '0.95rem' }}>{exp.role}</strong>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.period}</span>
              </div>
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', marginBottom: '0.65rem' }}>{exp.company} • {exp.location}</div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem' }}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-white)' }}>
            <GraduationCap size={16} color="var(--accent-emerald)" />
            <span>Academic Qualifications</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} style={{ background: 'var(--bg-subtle-pill)', border: '1px solid var(--border-subtle)', borderRadius: '0.75rem', padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-white)', fontSize: '0.9rem' }}>{edu.degree}</div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>{edu.institution}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '0.25rem' }}>
                  CGPA: {edu.cgpa} ({edu.grade}) • {edu.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-white)' }}>
            <Award size={16} color="var(--accent-cyan)" />
            <span>Certifications</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div key={idx} style={{ background: 'var(--bg-subtle-pill)', border: '1px solid var(--border-subtle)', borderRadius: '0.75rem', padding: '1rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-white)', fontSize: '0.9rem' }}>{cert.title}</div>
                <div style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem' }}>{cert.issuer} • {cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
