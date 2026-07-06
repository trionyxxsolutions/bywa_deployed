import React from 'react';
import './About.css';

const values = [
  { title: 'Tradition', desc: 'Rooted in ancient yogic principles passed down through generations.' },
  { title: 'Excellence', desc: 'Striving for the highest standard in every posture and every competition.' },
  { title: 'Community', desc: 'Building a welcoming space for practitioners of all levels.' },
  { title: 'Integrity', desc: 'Fair, transparent judging that honours every competitor.' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Visual frame */}
        <div className="about__frame fade-up">
          <div className="about__frame-content">
            <img src="/logo/logo_rembg.png" alt="Bengal Yoga" className="about__frame-img" />
            <div className="about__frame-place">Bally Ghat,West Bengal</div>
          </div>
        </div>

        {/* Text */}
        <div className="about__text">
          <div className="section-label fade-up">Our Story</div>
          <h2 className="section-title fade-up stagger-1">
            A legacy of <em>practice</em>
          </h2>
          <p className="about__body fade-up stagger-2">
            Bengal Yoga Welfare Association stands as a beacon of traditional yoga practice along
            the historic banks of Bally Ghat. Founded with the vision of bringing yogic discipline
            and wellness to the heart of Bengal, we have cultivated a community of practitioners,
            competitors, and seekers of the ancient art.
          </p>
          <p className="about__body fade-up stagger-3">
            Our competitions uphold the highest standards of fair judging, and our events celebrate
            both the precision of form and the spirit of practice — honouring every participant.
          </p>

          <div className="about__values">
            {values.map((v, i) => (
              <div className={`about__value fade-up stagger-${i + 1}`} key={v.title}>
                <div className="about__value-title">{v.title}</div>
                <div className="about__value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
