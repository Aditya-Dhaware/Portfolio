import React from 'react';

export default function TickerMarquee() {
  const items = [
    "Full-Stack MERN Developer",
    "MongoDB • Express.js • React.js • Node.js",
    "MERN Full-Stack Architecture",
    "WebRTC P2P Video Conferencing",
    "FastAPI & PostgreSQL Microservices",
    "Razorpay Webhooks & Idempotency",
    "Socket.IO Real-Time Handshakes",
    "Cloudinary Media Pipelines",
    "JWT Role-Based Access Control",
    "APScheduler Background Concurrency"
  ];

  return (
    <div className="marquee-container reveal-on-scroll" aria-hidden="true">
      <div className="marquee-content">
        {items.concat(items).map((text, idx) => (
          <div key={idx} className="marquee-item">
            <span>{text}</span>
            <span className="bullet">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
