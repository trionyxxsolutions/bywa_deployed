import React from 'react';
import './Marquee.css';

const items = [
  'Institute of Healthcare and Arts',
  'Bally Rimpa Yoga Mandir',
  'Siddheswari Yoga Siksha Kendra',
  'Dishari Club',
  'Kaity Ananda Tirtha Yoga Welfare Association',
  'Belur Agami Yoga Kendra',
  'Word Home English School',
  "Shashpur Sadhana Yogtirtha 'O' Tapasili Loksanskriti Sarbosiksha Kendra",
  'Painta Ananda Marga School',
  'Amta Pally Kalyan Samity',
  'Howrah Mangal Deep Sisu Kalyan Samity',
  'Sri Aurobindo Yoga Kendra',
  'Khalore Bidrohi Sangha',
  'Ananda Mela',
  'Maa Yoga Center',
  'Vivekananda Yoga Kendra',
  'Bengal Yoga Welfare Association',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee__inner">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span>
            <span className="marquee__dot">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
