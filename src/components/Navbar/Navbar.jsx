import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About',    href: '#about'    },
    { label: 'Features', href: '#features' },
    { label: 'Judging',  href: '#judging'  },
    { label: 'Gallery',  href: '#gallery'  },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <div className="navbar__logo">
        <img src="/logo/logo_rembg.png" alt="Logo" className="navbar__logo-img" />
        Bengal <span>Yoga</span> Welfare Association
      </div>

      {/* Nav links */}
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right side */}
      <div className="navbar__right">
        {/* <Link to="/login" className="navbar__admin-btn">
          <span className="navbar__admin-icon">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="0.5" y="0.5" width="5" height="5" rx="1.2" fill="currentColor" />
              <rect x="7.5" y="0.5" width="5" height="5" rx="1.2" fill="currentColor" opacity="0.6" />
              <rect x="0.5" y="7.5" width="5" height="5" rx="1.2" fill="currentColor" opacity="0.6" />
              <rect x="7.5" y="7.5" width="5" height="5" rx="1.2" fill="currentColor" />
            </svg>
          </span>
          Admin Panel
        </Link> */}

        {/* Mobile burger */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'navbar__burger-line--open' : ''} />
          <span className={menuOpen ? 'navbar__burger-line--open navbar__burger-line--mid' : ''} />
          <span className={menuOpen ? 'navbar__burger-line--open' : ''} />
        </button>
      </div>
    </nav>
  );
}
