import React from 'react';
import './Features.css';

const features = [
  {
    name: 'Media Upload System',
    desc: 'Showcase competition photos and videos in a curated, beautifully presented gallery — preserving every moment of excellence.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="3" width="13" height="13" rx="1" stroke="#C4956A" strokeWidth="1.5" />
        <rect x="20" y="3" width="13" height="13" rx="1" stroke="#C4956A" strokeWidth="1.5" />
        <rect x="3" y="20" width="13" height="13" rx="1" stroke="#C4956A" strokeWidth="1.5" />
        <rect x="20" y="20" width="13" height="13" rx="1" stroke="#7A8C74" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Judging System',
    desc: '5 expert judges. The highest and lowest scores are excluded. The remaining 3 form the final — with a smart tie-breaking mechanism.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#C4956A" strokeWidth="1.5" />
        <line x1="18" y1="4" x2="18" y2="32" stroke="#C4956A" strokeWidth="1" opacity="0.4" />
        <line x1="4" y1="18" x2="32" y2="18" stroke="#C4956A" strokeWidth="1" opacity="0.4" />
        <circle cx="18" cy="18" r="5" fill="rgba(196,149,106,0.25)" stroke="#C4956A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Contact Page',
    desc: 'An elegant contact section with association details and a live inquiry form — making it simple to reach our team anytime.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#C4956A" strokeWidth="1.5" />
        <path d="M4 12 L18 22 L32 12" stroke="#C4956A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'About Section',
    desc: 'Share the history, mission, and spirit of the yoga centre — connecting the community to its roots and vision.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 5 L18 31" stroke="#C4956A" strokeWidth="1.5" />
        <path d="M12 10 Q18 5 24 10" stroke="#C4956A" strokeWidth="1.5" fill="none" />
        <path d="M9 18 Q18 10 27 18" stroke="#7A8C74" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M6 26 Q18 15 30 26" stroke="#C4956A" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features__header">
        <div className="section-label fade-up">What We Offer</div>
        <h2 className="section-title fade-up stagger-1">
          Built for <em>excellence</em>
        </h2>
      </div>

      <div className="features__grid">
        {features.map((f, i) => (
          <div className={`features__card fade-up stagger-${i + 1}`} key={f.name}>
            <div className="features__icon">{f.icon}</div>
            <h3 className="features__name">{f.name}</h3>
            <p className="features__desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
