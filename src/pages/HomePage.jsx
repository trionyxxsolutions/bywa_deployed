import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import Features from '../components/Features/Features';
import Gallery from '../components/Gallery/Gallery';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  // Scroll-triggered fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    // Observe all fade-up elements (re-query after mount)
    const els = document.querySelectorAll('.fade-up');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
