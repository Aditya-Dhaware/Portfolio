import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[02] INDUSTRY • EXPERIENCE</span>
          </div>

          <h2 className="section-title">
            Engineered in <span className="italic-serif">the trenches.</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Production engineering experience delivering automated financial workflows, 
            resilient webhooks, and secure role-based services.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="experience-card reveal-on-scroll reveal-scale">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '0.35rem' }}>
                    <span className="exp-company">{exp.company}</span>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="exp-badge-date">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={13} color="var(--accent-cyan)" />
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="exp-summary">{exp.summary}</p>

              <ul className="exp-achievements">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>

              <div className="exp-skills-row">
                {exp.skills.map((skill) => (
                  <span key={skill} className="tech-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
