import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[06] ACADEMICS &amp; CREDENTIALS</span>
          </div>

          <h2 className="section-title">
            Education &amp; Certifications
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
            Backed by rigorous computer science theory from Savitribai Phule Pune University 
            and specialized industrial full-stack certifications.
          </p>
        </div>

        <div className="edu-certs-grid">
          {/* Qualifications Column */}
          <div className="reveal-on-scroll reveal-left">
            <h3 className="edu-column-title">
              <GraduationCap size={22} />
              <span>Qualification</span>
            </h3>

            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="edu-card reveal-on-scroll reveal-scale">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <Calendar size={12} /> {edu.duration}
                  </span>
                </div>

                <div className="edu-institution">{edu.institution} • {edu.location}</div>

                <div className="edu-metrics-badge">
                  <Award size={13} />
                  <span>CGPA: {edu.cgpa} ({edu.grade})</span>
                </div>

                <ul className="edu-highlights-list">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="reveal-on-scroll reveal-right">
            <h3 className="edu-column-title">
              <Award size={22} color="var(--accent-emerald)" />
              <span>Certificates</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div key={idx} className="edu-card reveal-on-scroll reveal-scale">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 className="edu-degree">{cert.title}</h4>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <Calendar size={12} /> {cert.date}
                  </span>
                </div>

                <div className="edu-institution" style={{ color: 'var(--accent-emerald)' }}>
                  Verified by {cert.issuer}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', margin: '0.75rem 0 1rem 0' }}>
                  {cert.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {cert.skillsCovered.map((skill) => (
                    <span key={skill} className="tech-chip" style={{ fontSize: '0.7rem' }}>
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
