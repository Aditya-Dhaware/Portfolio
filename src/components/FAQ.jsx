import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_DATA } from '../data/portfolioData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-badge">
          <span>[08] FAQ • ANSWERS UP FRONT</span>
        </div>

        <h2 className="section-title">
          Frequently asked <span className="italic-serif">questions.</span>
        </h2>

        <p className="section-subtitle" style={{ marginBottom: '3.5rem' }}>
          Clarifying technical capabilities, work preferences, and availability to save time 
          and make initial conversations productive.
        </p>

        <div className="faq-list">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`faq-icon-rotator ${isOpen ? 'open' : ''}`}>
                    <Plus size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
