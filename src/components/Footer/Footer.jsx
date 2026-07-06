import React from 'react';
import './Footer.css';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Judging', href: '#judging' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            Bengal <span>Yoga</span> Welfare Association
          </div>
          <p className="footer__tagline">
            Rooted in tradition. Committed to excellence.
          </p>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-label">Navigation</div>
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-label">Contact</div>
          <ul>
            <li><span>Bally Ghat, Howrah</span></li>
            <li><span>West Bengal, India</span></li>
            <li><a href="mailto:contact@bengalyoga.org">contact@bengalyoga.org</a></li>
            <li><span>+91 XXXXX XXXXX</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copy">
          © 2026 Bengal Yoga Welfare Association, Bally Ghat
        </div>
        <div className="footer__credit">
          Built by <span>Trionyx Solutions</span>
        </div>
      </div>
    </footer>
  );
}
