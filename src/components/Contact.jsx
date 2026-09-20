import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Opportunity',
    message: ''
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Project Opportunity', message: '' });
    }, 1000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="reveal-on-scroll">
          <div className="section-badge section-badge-emerald">
            <span>[07] INITIATE • CONTACT</span>
          </div>

          <h2 className="section-title">
            Let's <span className="italic-serif">Connect</span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
            Have an open engineering role, a high-concurrency system challenge, or a contract project? 
            Reach out directly and I will respond within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-card reveal-on-scroll reveal-left">
            {/* Email Card with 1-click Copy */}
            <div className="direct-contact-item">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Direct Email</span>
                <span className="contact-item-val">{PERSONAL_INFO.email}</span>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copied ? <Check size={18} color="var(--accent-emerald)" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="direct-contact-item">
              <div className="contact-item-icon">
                <Phone size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Phone / WhatsApp</span>
                <span className="contact-item-val">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="direct-contact-item">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Location Base</span>
                <span className="contact-item-val">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="direct-contact-item"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <GithubIcon size={18} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="direct-contact-item"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <LinkedinIcon size={18} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Project Briefing Form */}
          <div className="briefing-form-card reveal-on-scroll reveal-right">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Send a message or brief
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
              Direct message to Aditya Dhaware. No middleman or delays.
            </p>

            {formSubmitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center'
              }}>
                <Check size={40} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Received!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Thank you for reaching out, {formData.name || 'there'}. I have received your note and will reply to you shortly.
                </p>
                <button
                  type="button"
                  className="liquid-glass-btn"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setFormSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="briefing-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Your Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Topic / Inquiring For</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Full-time Role / Contract / Project Scope"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message / Details *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, tech stack, or product vision..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="primary-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Dispatch Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
