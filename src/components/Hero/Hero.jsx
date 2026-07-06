import React, { useState, useEffect } from 'react';
import './Hero.css';

/* ─── 5 Yoga Poses ─────────────────────────────────────────────────────────
   Each pose: head [cx, cy, r], segments [[x1,y1,x2,y2]…], joints [[cx,cy]…]
   SVG viewport: 0 0 420 520  |  ground line at y = 400
──────────────────────────────────────────────────────────────────────────── */
const POSES = [
  {
    name: 'Warrior II',
    head: [210, 122, 23],
    segments: [
      // neck → torso
      [210, 145, 210, 170],
      [210, 170, 210, 268],
      // arms spread wide and horizontal
      [210, 193, 148, 193],
      [148, 193, 118, 193],
      [210, 193, 272, 193],
      [272, 193, 304, 193],
      // hip bar
      [188, 268, 232, 268],
      // left leg (front, bent at knee)
      [195, 268, 155, 345],
      [155, 345, 128, 400],
      // right leg (back, straight)
      [228, 268, 272, 345],
      [272, 345, 300, 400],
    ],
    joints: [[118, 193], [304, 193], [128, 400], [300, 400]],
  },
  {
    name: 'Tree Pose',
    head: [210, 106, 22],
    segments: [
      // neck → torso
      [210, 128, 210, 158],
      [210, 158, 210, 290],
      // arms raised overhead in prayer
      [210, 182, 192, 148],
      [192, 148, 180, 120],
      [210, 182, 228, 148],
      [228, 148, 240, 120],
      // standing left leg straight down
      [205, 290, 205, 400],
      // right leg: thigh out, shin back (bent lotus-style)
      [215, 290, 260, 335],
      [260, 335, 218, 355],
    ],
    joints: [[180, 120], [240, 120], [205, 400], [218, 355]],
  },
  {
    name: 'Downward Dog',
    head: [144, 285, 19],
    segments: [
      // spine: hips (apex) → shoulders
      [212, 175, 160, 258],
      // neck to hanging head
      [160, 258, 146, 282],
      // arms to ground (hands close together)
      [160, 258, 115, 342],
      [160, 258, 148, 350],
      // legs to ground (feet apart)
      [212, 175, 264, 355],
      [212, 175, 298, 340],
    ],
    joints: [[115, 342], [148, 350], [264, 355], [298, 340]],
  },
  {
    name: 'Warrior III',           // "Airplane" – body horizontal
    head: [115, 248, 19],
    segments: [
      // horizontal torso → neck → head direction
      [210, 260, 158, 257],
      [158, 257, 128, 252],
      [128, 252, 116, 250],
      // arms spread: one up, one down from shoulders
      [158, 257, 154, 215],
      [158, 257, 158, 298],
      // standing leg straight down
      [210, 260, 210, 365],
      [210, 365, 208, 400],
      // lifted leg extends back horizontally
      [210, 260, 278, 260],
      [278, 260, 340, 260],
    ],
    joints: [[116, 248], [154, 210], [158, 303], [208, 400], [340, 260]],
  },
  {
    name: 'Meditation',            // seated cross-legged
    head: [210, 245, 23],
    segments: [
      // neck → torso
      [210, 268, 210, 290],
      [210, 290, 210, 368],
      // arms resting on knees, hands open
      [210, 320, 172, 352],
      [172, 352, 154, 372],
      [210, 320, 248, 352],
      [248, 352, 266, 372],
      // crossed legs (diamond shape)
      [200, 368, 158, 393],
      [158, 393, 210, 405],
      [210, 405, 262, 393],
      [262, 393, 220, 368],
    ],
    joints: [[154, 372], [266, 372], [158, 393], [262, 393]],
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const [poseIdx, setPoseIdx]   = useState(0);
  const [fading,  setFading]    = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // fade out → swap pose → fade in
      setFading(true);
      setTimeout(() => {
        setPoseIdx(i => (i + 1) % POSES.length);
        setFading(false);
      }, 280);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pose = POSES[poseIdx];

  return (
    <section className="hero">

      
      {/* ── LEFT ── */}
      <div className="hero__left">
        
        <div className="hero__eyebrow fade-up">Est. Bally Ghat</div>

        <h1 className="hero__title fade-up stagger-1">
          Where the body<br />
          <em>finds its</em><br />
          stillness.
        </h1>

        <p className="hero__subtitle fade-up stagger-2">
          A sanctuary of traditional yoga practice, competitive excellence, and community
          wellness — rooted in the heritage of Bally Ghat, Bengal.
        </p>

        <div className="hero__actions fade-up stagger-3">
          <a href="#about" className="btn-primary">Discover More</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>

        <div className="hero__stats">
          {[
            { num: '5', label: 'Panel Judges' },
            { num: '3', label: 'Core Scores' },
            { num: '∞', label: 'Possibilities' },
          ].map((s, i) => (
            <div className={`hero__stat fade-up stagger-${i + 2}`} key={s.label}>
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="hero__right">
        <div className="hero__illustration">

          {/* Pose name pill */}
          <div
            style={{
              position:       'absolute',
              top:            '12px',
              left:           '50%',
              transform:      'translateX(-50%)',
              fontSize:       '11px',
              letterSpacing:  '0.12em',
              textTransform:  'uppercase',
              color:          'rgba(255,255,255,0.45)',
              opacity:        fading ? 0 : 1,
              transition:     'opacity 0.28s ease',
              whiteSpace:     'nowrap',
            }}
          >
            {pose.name}
          </div>

          <svg
            width="420"
            height="520"
            viewBox="0 0 420 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              opacity:    fading ? 0 : 1,
              transition: 'opacity 0.28s ease',
            }}
          >
            {/* ── Background rings ── */}
            <circle cx="210" cy="260" r="190" fill="rgba(255,255,255,0.06)" />
            <circle cx="210" cy="260" r="140" fill="rgba(255,255,255,0.04)" />

            {/* ── Mandala ellipses ── */}
            <g opacity="0.12">
              {[0, 45, 90, 135].map(deg => (
                <ellipse
                  key={deg}
                  cx="210" cy="260" rx="60" ry="100"
                  fill="none" stroke="white" strokeWidth="1"
                  transform={`rotate(${deg} 210 260)`}
                />
              ))}
            </g>

            {/* ── Ground line ── */}
            <line
              x1="80" y1="400" x2="340" y2="400"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {/* ── Figure: head ── */}
            <circle
              cx={pose.head[0]}
              cy={pose.head[1]}
              r={pose.head[2]}
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* ── Figure: body segments ── */}
            {pose.segments.map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            ))}

            {/* ── Figure: joint dots ── */}
            {pose.joints.map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx} cy={cy} r="5"
                fill="rgba(196,149,106,0.85)"
              />
            ))}

            {/* ── Centre glow ── */}
            <circle cx="210" cy="260" r="8" fill="rgba(196,149,106,0.35)" />
          </svg>
        </div>

        <div className="hero__badge fade-up stagger-2">
          <div className="hero__badge-sub">Competition Season</div>
          <div className="hero__badge-year">2026</div>
        </div>
      </div>

    </section>
  );
}