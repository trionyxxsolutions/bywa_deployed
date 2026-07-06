import React, { useState } from 'react';
import './JudgingSystem.css';

const DEFAULT_SCORES = [6.2, 8.4, 8.7, 8.1, 9.5];

export default function JudgingSystem() {
  const [scores, setScores] = useState(DEFAULT_SCORES);

  const sorted = [...scores].sort((a, b) => a - b);
  const excluded = [sorted[0], sorted[sorted.length - 1]];
  const counted = sorted.slice(1, -1);
  const total = counted.reduce((a, b) => a + b, 0);

  const getType = (val, idx) => {
    // use original index to determine pill type
    const s = scores[idx];
    if (s === excluded[0] || s === excluded[1]) return 'excluded';
    return 'counted';
  };

  return (
    <section className="judging" id="judging">
      <div className="judging__inner">
        {/* LEFT */}
        <div className="judging__content">
          <div className="section-label fade-up">How It Works</div>
          <h2 className="section-title fade-up stagger-1">
            A fair <em>scoring</em><br />system
          </h2>
          <ul className="judging__points">
            {[
              'Five certified judges independently score each competitor.',
              'The highest and lowest scores are automatically excluded to eliminate bias.',
              'The remaining three scores are summed to determine the final result.',
              'In the event of a tie, the excluded scores are included to break it.',
            ].map((point, i) => (
              <li className={`fade-up stagger-${i + 1}`} key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT – Interactive Demo */}
        <div className="judging__demo fade-up stagger-2">
          <div className="judging__demo-title">Live Score Demo — Edit Below</div>

          <div className="judging__inputs">
            {scores.map((s, i) => (
              <div className="judging__input-wrap" key={i}>
                <label>Judge {i + 1}</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value={s}
                  onChange={(e) => {
                    const copy = [...scores];
                    copy[i] = parseFloat(e.target.value) || 0;
                    setScores(copy);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="judging__pills">
            {scores.map((s, i) => {
              const type = getType(s, i);
              return (
                <div className={`judging__pill judging__pill--${type}`} key={i}>
                  <span className="judging__pill-val">{s.toFixed(1)}</span>
                  <span className="judging__pill-tag">
                    {type === 'excluded'
                      ? s === excluded[0] ? 'Low' : 'High'
                      : 'Count'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="judging__note">
            Highest ({excluded[1].toFixed(1)}) and lowest ({excluded[0].toFixed(1)}) excluded.
            Middle three counted.
          </div>

          <div className="judging__result">
            <div>
              <div className="judging__result-label">Final Score</div>
              <div className="judging__result-breakdown">
                {counted.map((c, i) => (
                  <span key={i}>{c.toFixed(1)}{i < counted.length - 1 ? ' + ' : ''}</span>
                ))}
              </div>
            </div>
            <div className="judging__result-total">{total.toFixed(1)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
