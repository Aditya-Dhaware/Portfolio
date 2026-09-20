import React from 'react';
import { Activity, Terminal, Clock, MapPin, Monitor } from 'lucide-react';
import { GithubIcon } from './Icons';
import { COMMAND_CENTER, PERSONAL_INFO } from '../data/portfolioData';

export default function GithubCommandCenter({ theme = 'dark' }) {
  return (
    <section className="section" id="command-center">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge">
            <span>[05] LIVE METRICS • COMMAND BASE</span>
          </div>

          <h2 className="section-title">
            Code activity &amp; <span className="italic-serif">Contributions</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            Real-time contribution frequency and local development setup powering my 
            software engineering workflows.
          </p>
        </div>

        <div className="command-center-grid">
          {/* GitHub Activity Card */}
          <div className="cc-chart-card reveal-on-scroll reveal-left">
            <div>
              <div className="cc-chart-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Activity size={18} color="var(--accent-cyan)" />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>GitHub Contribution Activity</span>
                </div>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--accent-cyan)', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <GithubIcon size={13} />
                  <span>@{COMMAND_CENTER.githubHandle} ↗</span>
                </a>
              </div>

              <div className="cc-chart-image-wrap">
                <img 
                  src={`https://ghchart.rshah.org/${theme === 'light' ? '0284c7' : '00f0ff'}/${COMMAND_CENTER.githubHandle}`} 
                  alt="Aditya Dhaware GitHub Contributions" 
                  loading="lazy"
                />
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderTop: '1px solid var(--border-subtle)', 
              paddingTop: '1.25rem',
              marginTop: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block' }}></span>
                Continuous Commits &amp; Releases
              </span>
              <span style={{ color: 'var(--accent-emerald)' }}>Production Ready</span>
            </div>
          </div>

          {/* System Spec Sheet */}
          <div className="cc-specs-card reveal-on-scroll reveal-right">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Monitor size={18} color="var(--accent-emerald)" />
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Development Station</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Engineered for zero-distraction deep work and rapid prototyping.
              </p>

              <div className="cc-specs-grid">
                <div className="spec-item">
                  <div className="spec-label">Environment</div>
                  <div className="spec-val">{COMMAND_CENTER.os}</div>
                </div>

                <div className="spec-item">
                  <div className="spec-label">Runtimes</div>
                  <div className="spec-val">{COMMAND_CENTER.runtime}</div>
                </div>

                <div className="spec-item">
                  <div className="spec-label">Base Location</div>
                  <div className="spec-val" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} color="var(--accent-cyan)" />
                    {COMMAND_CENTER.base}
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-label">Timezone</div>
                  <div className="spec-val" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} color="var(--accent-emerald)" />
                    {COMMAND_CENTER.timezone}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.75rem 1rem',
              borderRadius: '0.65rem'
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
                Response Time:
              </span>
              <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-white)' }}>
                {COMMAND_CENTER.typicalResponse}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
