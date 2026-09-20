import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-badge">
          <span>[04] ENGINEERING PROCESS • WORKFLOW</span>
        </div>

        <h2 className="section-title">
          From system logic to <span className="italic-serif">seamless execution.</span>
        </h2>

        <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
          My systematic four-stage engineering methodology for translating complex specifications 
          into resilient, high-concurrency web applications.
        </p>

        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-step-num">{step.step}</div>
              <h3 className="process-title">{step.title}</h3>
              <div className="process-subtitle">{step.subtitle}</div>
              <p className="process-desc">{step.description}</p>
              
              <div className="process-tags">
                {step.tags.map((tag) => (
                  <span key={tag} className="process-tag">
                    {tag}
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
