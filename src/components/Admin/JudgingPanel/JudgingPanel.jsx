//JudgingPanel.jsx
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useAuth } from "../../../context/AuthContext";
import { apiFetch } from "../../../utils/apiClient";

/* ─── Age group mapping ─────────────────────────────────────────── */
function getAgeGroup(age) {
  if (age <= 7) return "0-7";
  if (age <= 9) return "7-9";
  if (age <= 12) return "9-12";
  if (age <= 16) return "12-16";
  if (age <= 25) return "16-25";
  return "25+";
}

/* ─── tie-break rule label helpers ─────────────────────────────────────── */
const RULE_LABEL = {
  BASE: { text: "Base Score", color: "var(--green)", bg: "var(--green-soft)" },
  RULE2: {
    text: "Rule 2 – Full",
    color: "var(--gold)",
    bg: "var(--gold-soft)",
  },
  RULE3: { text: "Rule 3 – Asana ↓", color: "#7b5ea7", bg: "#f3eeff" },
  RULE4: { text: "Rule 4 – Judge ↓", color: "#b05c00", bg: "#fff3e0" },
  UNRESOLVED: { text: "Tied", color: "var(--red)", bg: "var(--red-soft)" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1714;
    --ink-2: #4a4540;
    --ink-3: #8a8480;
    --paper: #f9f6f0;
    --paper-2: #f0ece4;
    --paper-3: #e6e0d6;
    --accent: #c8440a;
    --gold: #d4a017;
    --gold-soft: #faf3e0;
    --silver: #7a8a99;
    --bronze: #a0673a;
    --green: #2d7a4f;
    --green-soft: #e8f5ee;
    --red: #c0392b;
    --red-soft: #fdecea;
    --shadow: 0 1px 3px rgba(26,23,20,0.08), 0 4px 12px rgba(26,23,20,0.06);
    --radius: 10px;
    --mono: 'DM Mono', monospace;
    --serif: 'Fraunces', Georgia, serif;
  }

  .jp { font-family: var(--mono); background: var(--paper); min-height: 100vh; padding: 2rem 1.5rem; color: var(--ink); }

  .jp__header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.75rem; gap: 1rem; flex-wrap: wrap; }
  .jp__label { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .jp__title { font-family: var(--serif); font-size: 1.9rem; font-weight: 600; color: var(--ink); letter-spacing: -0.02em; }

  .jp__legend { padding: 1rem 1.25rem; margin-bottom: 1.5rem; }
  .jp__judges { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
  .jp__judge-chip { display: flex; align-items: center; gap: 0.4rem; background: var(--paper-2); border: 1px solid var(--paper-3); border-radius: 100px; padding: 0.3rem 0.7rem 0.3rem 0.3rem; font-size: 0.75rem; color: var(--ink-2); }
  .jp__judge-num { width: 20px; height: 20px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 0.68rem; font-weight: 500; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .jp__judge-chip--rule { font-style: italic; color: var(--ink-3); font-size: 0.72rem; border-style: dashed; padding-left: 0.7rem; }

  .a-card { background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); }

  /* ── Loading / Error states ── */
  .jp__state-box { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem; padding: 3rem 2rem; color: var(--ink-3); font-size: 0.85rem; text-align: center; }
  .jp__spinner { width: 28px; height: 28px; border: 2.5px solid var(--paper-3); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .jp__error-icon { font-size: 1.5rem; }
  .jp__retry-btn { font-family: var(--mono); font-size: 0.78rem; padding: 0.4rem 1rem; border: 1.5px solid var(--paper-3); border-radius: 6px; background: var(--paper-2); color: var(--ink-2); cursor: pointer; }
  .jp__retry-btn:hover { background: var(--paper-3); }

  /* ── Group toggle panel ── */
  .jp__group-panel {
    background: #fff;
    border: 1.5px solid var(--paper-3);
    border-radius: var(--radius);
    padding: 0.85rem 1.1rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .jp__group-panel-label {
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-3);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .jp__group-toggles { display: flex; flex-wrap: wrap; gap: 0.4rem; flex: 1; }
  .jp__group-toggle {
    font-family: var(--mono);
    font-size: 0.72rem;
    padding: 0.32rem 0.8rem;
    border-radius: 100px;
    border: 1.5px solid var(--paper-3);
    background: var(--paper-2);
    color: var(--ink-2);
    cursor: pointer;
    transition: all .15s;
    user-select: none;
    white-space: nowrap;
  }
  .jp__group-toggle:hover { background: var(--paper-3); }
  .jp__group-toggle--all-active {
    background: var(--ink);
    color: #fff;
    border-color: var(--ink);
    font-weight: 500;
  }
  .jp__group-toggle--male-active {
    background: #e8f2fb;
    color: #1a6fa8;
    border-color: #b3d4ef;
    font-weight: 600;
  }
  .jp__group-toggle--female-active {
    background: #fce8f3;
    color: #a3186e;
    border-color: #f0b3d9;
    font-weight: 600;
  }

  /* ── Scrutiny table ── */
  .jp__table-card {
    background: #fff;
    border: 1px solid var(--paper-3);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .jp__table-wrap { overflow-x: auto; }
  .jp__table { width: 100%; border-collapse: collapse; font-size: 0.8rem; table-layout: auto; }
  .jp__table thead tr { background: var(--paper-2); border-bottom: 1.5px solid var(--paper-3); }
  .jp__table th {
    padding: 0.65rem 0.75rem;
    text-align: left;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-3);
    font-weight: 500;
    white-space: nowrap;
  }
  .jp__table th.th-center { text-align: center; }
  .jp__table th.th-calc { text-align: center; min-width: 80px; }
  .jp__table td { padding: 0.55rem 0.75rem; border-bottom: 1px solid var(--paper-2); vertical-align: middle; }
  .jp__table td.td-calc { text-align: center; min-width: 80px; }
  .jp__table tbody tr:hover { background: var(--paper); }
  .jp__row--gold { background: var(--gold-soft) !important; }

  .jp__rank { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; font-size: 0.72rem; font-weight: 500; background: var(--paper-2); color: var(--ink-2); }
  .jp__rank--1 { background: var(--gold); color: #fff; }
  .jp__rank--2 { background: var(--silver); color: #fff; }
  .jp__rank--3 { background: var(--bronze); color: #fff; }

  /* ── Per-asana score block ── */
  .jp__asana-block { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 38px; }
  .jp__asana-scores { display: flex; gap: 2px; }
  .jp__score-pip {
    display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 20px; border-radius: 3px;
    font-size: 0.68rem; font-weight: 500;
    background: var(--green-soft); color: var(--green);
    border: 1px solid #c3e6d4;
  }
  .jp__score-pip--excluded {
    background: var(--paper-2); color: var(--ink-3);
    border-color: var(--paper-3); opacity: 0.5;
    text-decoration: line-through;
  }
  .jp__score-pip--deciding { outline: 2px solid var(--gold); outline-offset: 1px; }
  .jp__asana-trim { font-size: 0.72rem; font-weight: 600; color: var(--accent); margin-top: 1px; }

  /* ── Tie-break badge ── */
  .jp__tie-badge {
    display: inline-flex; align-items: center;
    font-size: 0.65rem; font-weight: 500; padding: 0.2rem 0.5rem;
    border-radius: 4px; white-space: nowrap;
  }

  /* ── Expand button ── */
  .jp__expand-btn {
    background: none; border: 1px solid var(--paper-3); cursor: pointer;
    color: var(--ink-3); font-size: 0.7rem; padding: 0.2rem 0.5rem;
    border-radius: 4px; transition: background 0.12s, color 0.12s;
    font-family: var(--mono); display: inline-flex; align-items: center; gap: 0.2rem;
    white-space: nowrap;
  }
  .jp__expand-btn:hover { background: var(--paper-2); color: var(--accent); border-color: var(--accent); }
  .jp__expand-btn--open { color: var(--accent); background: var(--paper-2); border-color: var(--accent); }

  /* ── Breakdown drawer ── */
  .jp__breakdown-row td { padding: 0 !important; border-bottom: 2px solid var(--accent) !important; }
  .jp__breakdown { background: #fdfcf9; padding: 1.25rem 1.5rem; border-top: 1px solid var(--paper-3); }
  .jp__breakdown-title {
    font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--accent); font-weight: 600; margin-bottom: 1rem;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .jp__rule-section { margin-bottom: 1.1rem; }
  .jp__rule-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.65rem; flex-wrap: wrap; }
  .jp__rule-num {
    width: 20px; height: 20px; border-radius: 50%;
    font-size: 0.65rem; font-weight: 700;
    display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .jp__rule-name { font-size: 0.75rem; font-weight: 600; color: var(--ink); }
  .jp__rule-desc { font-size: 0.7rem; color: var(--ink-3); }
  .jp__rule-applied-badge {
    font-size: 0.62rem; padding: 0.12rem 0.45rem; border-radius: 3px;
    font-weight: 600; margin-left: auto; white-space: nowrap;
  }
  .jp__asana-calc { display: flex; flex-direction: column; gap: 0.55rem; }
  .jp__asana-calc-row {
    display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap;
    padding: 0.5rem 0.75rem; background: #fff;
    border: 1px solid var(--paper-3); border-radius: 7px; font-size: 0.75rem;
  }
  .jp__asana-calc-label {
    font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--ink-3); min-width: 52px; font-weight: 500;
  }
  .jp__calc-scores { display: flex; gap: 3px; align-items: center; }
  .jp__calc-pip {
    display: inline-flex; align-items: center; justify-content: center;
    width: 24px; height: 22px; border-radius: 4px; font-size: 0.72rem; font-weight: 500;
  }
  .jp__calc-pip--kept   { background: var(--green-soft); color: var(--green); border: 1px solid #c3e6d4; }
  .jp__calc-pip--drop   { background: var(--paper-2); color: var(--ink-3); border: 1px solid var(--paper-3); text-decoration: line-through; opacity: 0.55; }
  .jp__calc-pip--full   { background: #fff8e1; color: #b8860b; border: 1px solid #f0d060; }
  .jp__calc-pip--active { outline: 2.5px solid var(--gold); outline-offset: 1px; }
  .jp__calc-arrow { color: var(--ink-3); font-size: 0.8rem; }
  .jp__calc-result { font-weight: 700; font-size: 0.85rem; margin-left: auto; min-width: 36px; text-align: right; }
  .jp__calc-result--trimmed { color: var(--accent); }
  .jp__calc-result--full    { color: #b8860b; }
  .jp__calc-totals {
    display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
    padding: 0.55rem 0.75rem; background: var(--paper-2);
    border: 1px solid var(--paper-3); border-radius: 7px; margin-top: 0.35rem;
  }
  .jp__calc-total-item { display: flex; flex-direction: column; gap: 2px; }
  .jp__calc-total-lbl { font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
  .jp__calc-total-val { font-size: 1rem; font-weight: 700; }
  .jp__calc-total-val--base { color: var(--accent); }
  .jp__calc-total-val--full { color: #b8860b; }
  .jp__formula-line {
    display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;
    font-size: 0.72rem; color: var(--ink-2); padding: 0.4rem 0;
  }
  .jp__formula-num { font-weight: 600; color: var(--ink); }
  .jp__formula-op { color: var(--ink-3); }
  .jp__formula-eq { font-weight: 700; color: var(--accent); font-size: 0.8rem; }
  .jp__tie-context {
    padding: 0.6rem 0.85rem; border-radius: 7px; font-size: 0.73rem;
    border: 1px solid; margin-bottom: 0.5rem; line-height: 1.55;
  }
  .jp__tie-context--info  { background: #f0f4ff; border-color: #c5d3f5; color: #2c3e8a; }
  .jp__tie-context--win   { background: var(--green-soft); border-color: #b2dfc5; color: var(--green); }
  .jp__tie-context--lose  { background: var(--red-soft); border-color: #f5c6c2; color: var(--red); }
  .jp__tie-context--none  { background: var(--paper-2); border-color: var(--paper-3); color: var(--ink-3); }
  .jp__cmp-table { width: 100%; border-collapse: collapse; font-size: 0.72rem; margin-top: 0.5rem; }
  .jp__cmp-table th { padding: 0.35rem 0.6rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .jp__cmp-table td { padding: 0.4rem 0.6rem; border-bottom: 1px solid var(--paper-2); }
  .jp__cmp-table tr:last-child td { border-bottom: none; }
  .jp__cmp-highlight { font-weight: 700; color: var(--accent); }
  .jp__cmp-winner { background: var(--green-soft); }
  .jp__cmp-loser  { background: var(--red-soft); }

  /* ── Refresh bar ── */
  .jp__refresh-bar { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; background: var(--paper-2); border-bottom: 1px solid var(--paper-3); font-size: 0.72rem; color: var(--ink-3); gap: 1rem; flex-wrap: wrap; }
  .jp__refresh-right { display: flex; align-items: center; gap: 0.6rem; }
  .jp__last-fetch { font-size: 0.68rem; color: var(--ink-3); }

  .a-btn { font-family: var(--mono); font-size: 0.8rem; font-weight: 500; border-radius: 7px; border: none; cursor: pointer; padding: 0.55rem 1rem; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.4rem; }
  .a-btn-primary { background: var(--accent); color: #fff; }
  .a-btn-primary:hover { background: #a83608; }
  .a-btn-ghost { background: var(--paper-2); color: var(--ink-2); border: 1px solid var(--paper-3); }
  .a-btn-ghost:hover { background: var(--paper-3); }
  .a-btn-sm { padding: 0.35rem 0.65rem; font-size: 0.72rem; }

  /* ── Group section header ── */
  .jp__group-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.55rem 1rem;
    font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
    font-weight: 600;
  }
  .jp__group-header--male   { background: #e8f2fb; border-bottom: 1px solid #b3d4ef; color: #1a6fa8; }
  .jp__group-header--female { background: #fce8f3; border-bottom: 1px solid #f0b3d9; color: #a3186e; }

  .jp__tied-warn {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.45rem 1rem; font-size: 0.72rem;
    background: var(--gold-soft); color: #7a5a00;
    border-bottom: 1px solid #e8c84a;
  }

  /* ══════════════════════════════════════════════
     PRINT STYLES — Official Scrutiny Sheet format
  ══════════════════════════════════════════════ */
  @media print {
    body * { visibility: hidden !important; }
    .print-target, .print-target * { visibility: visible !important; }
    .print-target {
      position: fixed !important;
      top: 0 !important; left: 0 !important;
      width: 100% !important; height: auto !important;
      background: #fff !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .no-print { display: none !important; }

    /* Official scrutiny sheet print styles */
    .prt-page {
      font-family: Arial, sans-serif;
      padding: 0.8cm 1cm;
      color: #000;
      max-width: 100%;
    }

    /* Letterhead */
    .prt-lh { text-align: center; border: 2px solid #000; padding: 0.5rem 1rem 0.4rem; margin-bottom: 0; }
    .prt-lh-inner { display: flex; align-items: center; justify-content: center; gap: 1rem; }
    .prt-lh-text { flex: 1; }
    .prt-org { font-size: 1.3rem; font-weight: 900; color: #c8440a; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.2; }
    .prt-regd { font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-addr { font-size: 0.72rem; color: #333; margin-top: 0.15rem; }

    /* Sheet title block */
    .prt-title-block { border: 2px solid #000; border-top: none; padding: 0.35rem 1rem; text-align: center; }
    .prt-sheet-title { font-size: 1.1rem; font-weight: 900; text-decoration: underline; color: #c8440a; text-transform: uppercase; letter-spacing: 0.05em; }
    .prt-comp-line { font-size: 0.85rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-transform: uppercase; margin-top: 0.2rem; }

    /* Meta */
    .prt-meta { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; gap: 2rem; }
    .prt-meta-field { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-meta-line { flex: 1; border-bottom: 1.5px solid #333; min-width: 120px; height: 16px; }
    .prt-group-row { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
    .prt-group-dots { flex: 1; border-bottom: 1.5px dotted #555; height: 16px; }

    /* Score grid */
    .prt-grid-wrap { border: 2px solid #000; border-top: none; overflow-x: auto; }
    .prt-grid { width: 100%; border-collapse: collapse; }
    .prt-grid th, .prt-grid td {
      border: 1px solid #1a6fa8;
      text-align: center;
      padding: 0.22rem 0.2rem;
      font-size: 0.7rem;
      min-width: 28px;
    }
    .prt-grid thead th {
      background: #fff;
      font-weight: 700;
      color: #c8440a;
      font-size: 0.68rem;
      white-space: nowrap;
    }
    .prt-grid thead th.th-row-label { background: #fff; min-width: 70px; text-align: left; padding-left: 0.4rem; }
    .prt-grid tbody tr.tr-tie td    { color: #c8440a; font-weight: 700; }
    .prt-grid tbody tr.tr-total td  { color: #1a6fa8; font-weight: 700; background: #f0f7ff; }
    .prt-grid tbody tr.tr-pos td    { color: #c8440a; font-weight: 700; background: #fff8f0; }
    .prt-grid tbody td.td-row-label { font-weight: 700; text-align: left; padding-left: 0.4rem; color: inherit; white-space: nowrap; }
    .prt-grid tbody td.td-data      { min-width: 30px; height: 20px; }

    /* Footer */
    .prt-footer-block {
      border: 2px solid #000; border-top: none;
      padding: 0.75rem 1rem;
      display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem;
    }
    .prt-sig-left { display: flex; flex-direction: column; gap: 1.2rem; }
    .prt-sig-line-wrap { display: flex; flex-direction: column; gap: 0.15rem; }
    .prt-sig-line-bar { border-bottom: 1.5px solid #333; width: 200px; height: 22px; }
    .prt-sig-label { font-size: 0.75rem; font-weight: 700; color: #c8440a; }
    .prt-judges-right { display: flex; flex-direction: column; gap: 0.2rem; }
    .prt-judges-title { font-size: 0.82rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-align: right; margin-bottom: 0.2rem; }
    .prt-judge-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; }
    .prt-judge-num { font-weight: 700; min-width: 18px; }
    .prt-judge-line { border-bottom: 1px solid #333; width: 180px; height: 16px; }

    /* Hide all screen-only UI in print */
    .jp__group-panel,
    .jp__refresh-bar,
    .jp__group-header,
    .jp__tied-warn,
    .jp__breakdown,
    .jp__breakdown-row { display: none !important; }
  }
`;

/* ─── Print: Official Scrutiny Sheet ──────────────────────────────────── */
/* ── How many participant columns fit on one A4 portrait grid ── */
const CHUNK_SIZE = 14;

function ScrutinyGrid({ cols }) {
  return (
    <div className="prt-grid-wrap">
      <table className="prt-grid">
        <thead>
          <tr>
            <th className="th-row-label"> </th>
            {cols.map((c, i) => (
              <th key={i}>{c.tno || ""}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-row-label">T. NO.</td>
            {cols.map((c, i) => (
              <td key={i} className="td-data">
                {c.tno}
              </td>
            ))}
          </tr>
          {[0, 1, 2, 3, 4].map((jIdx) => (
            <tr key={jIdx}>
              <td className="td-row-label">JUDGE – {jIdx + 1}</td>
              {cols.map((c, i) => (
                <td key={i} className="td-data">
                  {c.judges[jIdx]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="tr-tie">
            <td className="td-row-label">
              TIE
              {/* Show what method the TIE row represents — take from first non-empty col */}
              {(() => {
                const hint = cols.find((c) => c.tieLabel)?.tieLabel;
                return hint ? (
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "0.58rem",
                      color: "#a06000",
                      marginLeft: 3,
                    }}
                  >
                    ({hint})
                  </span>
                ) : null;
              })()}
            </td>
            {cols.map((c, i) => (
              <td
                key={i}
                className="td-data"
                style={
                  c.tie === "TIED"
                    ? { color: "#c8440a", fontSize: "0.6rem" }
                    : {}
                }
              >
                {c.tie}
              </td>
            ))}
          </tr>
          <tr className="tr-total">
            <td className="td-row-label">TOTAL</td>
            {cols.map((c, i) => (
              <td key={i} className="td-data">
                {c.total}
              </td>
            ))}
          </tr>
          <tr className="tr-pos">
            <td className="td-row-label">POSITION</td>
            {cols.map((c, i) => (
              <td key={i} className="td-data">
                {c.pos}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ScrutinyFooter() {
  return (
    <div className="prt-footer-block">
      <div className="prt-sig-left">
        <div className="prt-sig-line-wrap">
          <div className="prt-sig-line-bar" />
          <div className="prt-sig-label">
            Signature of the Scrutiniser &amp; Date
          </div>
        </div>
        <div className="prt-sig-line-wrap">
          <div className="prt-sig-line-bar" />
          <div className="prt-sig-label">Chief Judge Name</div>
        </div>
      </div>
      <div className="prt-judges-right">
        <div className="prt-judges-title">Judges Name</div>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="prt-judge-row">
            <span className="prt-judge-num">{n}.</span>
            <div className="prt-judge-line" />
          </div>
        ))}
      </div>
    </div>
  );
}

function OfficialScrutinyPrint({ group, yearSuffix }) {
  const { ageGroup, gender, participants = [] } = group;

  const sorted = [...participants].sort((a, b) => a.rank - b.rank);

  const buildCol = (p) => {
    if (!p)
      return {
        tno: "",
        judges: ["", "", "", "", ""],
        tie: "",
        tieLabel: "",
        total: "",
        pos: "",
      };
    const judgeRowScores = [1, 2, 3, 4, 5].map((jNum) => {
      if (!p.asanas) return "";
      return p.asanas.reduce((sum, a) => {
        const score = (a.judgeScores ?? [])[jNum - 1] ?? 0;
        return sum + score;
      }, 0);
    });

    // Determine what to show in the TIE cell based on which rule broke the tie
    let tieVal = "";
    let tieLabel = "";
    const rule = p.tieBreakRule;
    if (rule === "BASE" || !rule) {
      // No tie — leave blank
      tieVal = "";
      tieLabel = "";
    } else if (rule === "RULE2") {
      // Full score (all 5 judges) decided it
      tieVal = p.fullScore ?? "";
      tieLabel = "Full";
    } else if (rule === "RULE3") {
      // Asana-wise trimmed decided it — find the deciding asana trimmed total
      const decidingCell = (p.decidingCells ?? []).find((c) =>
        c.includes("asana"),
      );
      if (decidingCell) {
        // decidingCell format: "asana3_judge..." or just "asana3"
        const match = decidingCell.match(/asana(\d+)/);
        if (match) {
          const asanaNum = parseInt(match[1], 10);
          const asana = (p.asanas ?? []).find(
            (a) => a.asanaNumber === asanaNum,
          );
          tieVal = asana ? asana.trimmedTotal : (p.fullScore ?? "");
        } else {
          tieVal = p.fullScore ?? "";
        }
      } else {
        tieVal = p.fullScore ?? "";
      }
      tieLabel = "A↓Trim";
    } else if (rule === "RULE4") {
      // Asana-wise full decided it — find the deciding asana full total
      const decidingCell = (p.decidingCells ?? []).find((c) =>
        c.includes("asana"),
      );
      if (decidingCell) {
        const match = decidingCell.match(/asana(\d+)/);
        if (match) {
          const asanaNum = parseInt(match[1], 10);
          const asana = (p.asanas ?? []).find(
            (a) => a.asanaNumber === asanaNum,
          );
          tieVal = asana ? asana.fullTotal : (p.fullScore ?? "");
        } else {
          tieVal = p.fullScore ?? "";
        }
      } else {
        tieVal = p.fullScore ?? "";
      }
      tieLabel = "A↓Full";
    } else if (rule === "UNRESOLVED") {
      tieVal = "TIED";
      tieLabel = "";
    }

    return {
      tno: p.tagNo ?? "",
      judges: judgeRowScores,
      tie: tieVal,
      tieLabel,
      total: p.baseScore ?? "",
      pos: p.rank
        ? p.rank +
          (p.rank === 1
            ? "ST"
            : p.rank === 2
              ? "ND"
              : p.rank === 3
                ? "RD"
                : "TH")
        : "",
    };
  };

  // Pad sorted to at least CHUNK_SIZE so the first page always has full empty columns
  const padded = sorted.length > 0 ? sorted : Array(CHUNK_SIZE).fill(null);

  // Split into chunks of CHUNK_SIZE, each chunk fills one page
  const chunks = [];
  for (let i = 0; i < padded.length; i += CHUNK_SIZE) {
    const slice = padded.slice(i, i + CHUNK_SIZE);
    // Pad the last chunk to CHUNK_SIZE with empty cols
    while (slice.length < CHUNK_SIZE) slice.push(null);
    chunks.push(slice.map((p) => buildCol(p)));
  }
  // If no participants at all, show one blank page
  if (chunks.length === 0) {
    chunks.push(
      Array(CHUNK_SIZE)
        .fill(null)
        .map(() => buildCol(null)),
    );
  }

  const Letterhead = () => (
    <>
      <div className="prt-lh">
        <div className="prt-lh-inner">
          {/* Logo */}
          <img src="/logo/logo.jpeg" alt="BYWA Logo" className="prt-logo" />

          {/* Text */}
          <div className="prt-lh-text">
            <div className="prt-org">Bengal Yoga Welfare Association</div>

            <div className="prt-regd">(Govt. Regd.)</div>

            <div className="prt-addr">
              149, Bireswar Chatterjee Street, B/G – 2, Chaital Para, P.O. –
              Bally, P.S. – Bally, Dist. – Howrah.
            </div>
          </div>
        </div>
      </div>

      <div className="prt-title-block">
        <div className="prt-sheet-title">Scrutiny Sheet</div>

        <div className="prt-comp-line">
          National / Bengal / District Yogasana Competition –{" "}
          {yearSuffix || "20"}
        </div>
      </div>

      <div className="prt-meta">
        <div className="prt-meta-field">
          DATE :
          <div className="prt-meta-line" />
        </div>

        <div className="prt-meta-field">
          PLACE :
          <div className="prt-meta-line" />
        </div>
      </div>

      <div className="prt-group-row">
        GROUP :
        <div className="prt-group-dots" />
      </div>
    </>
  );

  return (
    <div>
      {chunks.map((cols, pageIdx) => (
        <div
          key={pageIdx}
          className="prt-page"
          style={pageIdx > 0 ? { pageBreakBefore: "always" } : {}}
        >
          <Letterhead />

          {/* Page indicator if multiple pages */}
          {chunks.length > 1 && (
            <div
              style={{
                textAlign: "right",
                fontSize: "0.65rem",
                color: "#888",
                padding: "0.15rem 0.5rem",
                borderLeft: "2px solid #000",
                borderRight: "2px solid #000",
              }}
            >
              Page {pageIdx + 1} of {chunks.length}
              {" · "}
              Participants {pageIdx * CHUNK_SIZE + 1}–
              {Math.min((pageIdx + 1) * CHUNK_SIZE, sorted.length)}
            </div>
          )}

          <ScrutinyGrid cols={cols} />

          {/* Only show footer on the last page */}
          {pageIdx === chunks.length - 1 && <ScrutinyFooter />}
        </div>
      ))}
    </div>
  );
}

/* ─── Breakdown drawer ──────────────────────────────────────────────────── */
function BreakdownDrawer({ participant, allRows, colSpan }) {
  const p = participant;
  const rule = p.tieBreakRule;

  const peers = allRows.filter(
    (r) => r.baseScore === p.baseScore && r.serialNo !== p.serialNo,
  );
  const hasTie = peers.length > 0;

  const rule1Formula = p.asanas.map((a) => {
    const excl = new Set(a.excludedJudgeIndices);
    const kept = a.judgeScores.filter((_, i) => !excl.has(i));
    return { asana: a, excl, kept };
  });

  const rule2Rows = p.asanas.map((a) => ({
    asana: a,
    fullScores: a.judgeScores,
  }));

  return (
    <tr className="jp__breakdown-row">
      <td colSpan={colSpan}>
        <div className="jp__breakdown">
          <div className="jp__breakdown-title">
            ⟨ Calculation Breakdown — {p.name} ⟩
          </div>

          {/* Rule 1 */}
          <div className="jp__rule-section">
            <div className="jp__rule-header">
              <span
                className="jp__rule-num"
                style={{ background: "var(--green)", color: "#fff" }}
              >
                1
              </span>
              <span className="jp__rule-name">Base Score</span>
              <span className="jp__rule-desc">
                — Drop highest &amp; lowest per asana, sum middle 3
              </span>
              <span
                className="jp__rule-applied-badge"
                style={{
                  background: "var(--green-soft)",
                  color: "var(--green)",
                }}
              >
                Always applied
              </span>
            </div>
            <div className="jp__asana-calc">
              {rule1Formula.map(({ asana, excl, kept }) => (
                <div key={asana.asanaNumber} className="jp__asana-calc-row">
                  <span className="jp__asana-calc-label">
                    Asana {asana.asanaNumber}
                  </span>
                  <div className="jp__calc-scores">
                    {asana.judgeScores.map((sc, i) => (
                      <span
                        key={i}
                        className={`jp__calc-pip ${excl.has(i) ? "jp__calc-pip--drop" : "jp__calc-pip--kept"}`}
                        title={
                          excl.has(i)
                            ? `J${i + 1}: ${sc} (excluded)`
                            : `J${i + 1}: ${sc} (kept)`
                        }
                      >
                        {sc}
                      </span>
                    ))}
                  </div>
                  <span className="jp__calc-arrow">→</span>
                  <div className="jp__formula-line">
                    {kept.map((v, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="jp__formula-op">+</span>}
                        <span className="jp__formula-num">{v}</span>
                      </React.Fragment>
                    ))}
                    <span className="jp__formula-op">=</span>
                  </div>
                  <span className="jp__calc-result jp__calc-result--trimmed">
                    {asana.trimmedTotal}
                  </span>
                </div>
              ))}
              <div className="jp__calc-totals">
                <div className="jp__calc-total-item">
                  <span className="jp__calc-total-lbl">Base Score</span>
                  <div className="jp__formula-line" style={{ padding: 0 }}>
                    {p.asanas.map((a, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="jp__formula-op">+</span>}
                        <span className="jp__formula-num">
                          {a.trimmedTotal}
                        </span>
                      </React.Fragment>
                    ))}
                    <span className="jp__formula-op">=</span>
                    <span className="jp__calc-total-val jp__calc-total-val--base">
                      {p.baseScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rule 2 */}
          {hasTie && (
            <div className="jp__rule-section">
              <div className="jp__rule-header">
                <span
                  className="jp__rule-num"
                  style={{ background: "#d4a017", color: "#fff" }}
                >
                  2
                </span>
                <span className="jp__rule-name">
                  Tie-break Rule 1 — Full Score
                </span>
                <span className="jp__rule-desc">
                  — Include all 5 judge scores per asana
                </span>
                {rule === "RULE2" ? (
                  <span
                    className="jp__rule-applied-badge"
                    style={{ background: "#faf3e0", color: "#b8860b" }}
                  >
                    Decisive
                  </span>
                ) : rule === "BASE" ? (
                  <span
                    className="jp__rule-applied-badge"
                    style={{
                      background: "var(--green-soft)",
                      color: "var(--green)",
                    }}
                  >
                    No tie — skipped
                  </span>
                ) : (
                  <span
                    className="jp__rule-applied-badge"
                    style={{
                      background: "var(--paper-2)",
                      color: "var(--ink-3)",
                    }}
                  >
                    Tied — continued
                  </span>
                )}
              </div>
              <div
                className={`jp__tie-context jp__tie-context--info`}
                style={{ marginBottom: "0.65rem" }}
              >
                Base score <strong>{p.baseScore}</strong> is shared with:{" "}
                {peers
                  .map((r) => (
                    <strong key={r.serialNo}>
                      {r.name} (Tag {r.tagNo}, Full: {r.fullScore})
                    </strong>
                  ))
                  .reduce((a, b) => [a, ", ", b])}
              </div>
              <div className="jp__asana-calc">
                {rule2Rows.map(({ asana }) => (
                  <div key={asana.asanaNumber} className="jp__asana-calc-row">
                    <span className="jp__asana-calc-label">
                      Asana {asana.asanaNumber}
                    </span>
                    <div className="jp__calc-scores">
                      {asana.judgeScores.map((sc, i) => (
                        <span
                          key={i}
                          className={`jp__calc-pip jp__calc-pip--full${rule === "RULE2" ? " jp__calc-pip--active" : ""}`}
                          title={`Judge ${i + 1}: ${sc}`}
                        >
                          {sc}
                        </span>
                      ))}
                    </div>
                    <span className="jp__calc-arrow">→</span>
                    <div className="jp__formula-line">
                      {asana.judgeScores.map((v, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <span className="jp__formula-op">+</span>}
                          <span className="jp__formula-num">{v}</span>
                        </React.Fragment>
                      ))}
                      <span className="jp__formula-op">=</span>
                    </div>
                    <span className="jp__calc-result jp__calc-result--full">
                      {asana.fullTotal}
                    </span>
                  </div>
                ))}
                <div className="jp__calc-totals">
                  <div className="jp__calc-total-item">
                    <span className="jp__calc-total-lbl">Full Score</span>
                    <div className="jp__formula-line" style={{ padding: 0 }}>
                      {p.asanas.map((a, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <span className="jp__formula-op">+</span>}
                          <span className="jp__formula-num">{a.fullTotal}</span>
                        </React.Fragment>
                      ))}
                      <span className="jp__formula-op">=</span>
                      <span className="jp__calc-total-val jp__calc-total-val--full">
                        {p.fullScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {rule === "RULE2" && (
                <>
                  <div
                    style={{
                      marginTop: "0.75rem",
                      marginBottom: "0.3rem",
                      fontSize: "0.68rem",
                      color: "var(--ink-3)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Full score comparison
                  </div>
                  <table className="jp__cmp-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Base</th>
                        <th>Full Score</th>
                        {p.asanas.map((a) => (
                          <th key={a.asanaNumber}>A{a.asanaNumber} Full</th>
                        ))}
                        <th>Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[p, ...peers]
                        .sort((a, b) => b.fullScore - a.fullScore)
                        .map((r, i) => {
                          const isMe = r.serialNo === p.serialNo;
                          const isWinner = i === 0;
                          return (
                            <tr
                              key={r.serialNo}
                              className={
                                isMe
                                  ? isWinner
                                    ? "jp__cmp-winner"
                                    : "jp__cmp-loser"
                                  : ""
                              }
                            >
                              <td style={{ fontWeight: isMe ? 600 : 400 }}>
                                {r.name}
                                {isMe ? " ← you" : ""}
                              </td>
                              <td>{r.baseScore}</td>
                              <td className={isMe ? "jp__cmp-highlight" : ""}>
                                {r.fullScore}
                              </td>
                              {r.asanas.map((a) => (
                                <td key={a.asanaNumber}>{a.fullTotal}</td>
                              ))}
                              <td
                                style={{
                                  fontWeight: 600,
                                  color: isWinner
                                    ? "var(--green)"
                                    : "var(--red)",
                                }}
                              >
                                {isWinner
                                  ? `Rank ${r.rank} ↑`
                                  : `Rank ${r.rank} ↓`}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          )}

          {/* Rule 3 */}
          {rule === "RULE3" && (
            <div className="jp__rule-section">
              <div className="jp__rule-header">
                <span
                  className="jp__rule-num"
                  style={{ background: "#7b5ea7", color: "#fff" }}
                >
                  3
                </span>
                <span className="jp__rule-name">
                  Tie-break Rule 2 — Asana-wise Trimmed
                </span>
                <span className="jp__rule-desc">
                  — Compare asana trimmed totals A1→A5 until first difference
                </span>
                <span
                  className="jp__rule-applied-badge"
                  style={{ background: "#f3eeff", color: "#7b5ea7" }}
                >
                  Decisive
                </span>
              </div>
              <table className="jp__cmp-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    {p.asanas.map((a) => (
                      <th key={a.asanaNumber}>Asana {a.asanaNumber}</th>
                    ))}
                    <th>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {[p, ...peers].map((r) => (
                    <tr
                      key={r.serialNo}
                      className={
                        r.serialNo === p.serialNo ? "jp__cmp-winner" : ""
                      }
                    >
                      <td
                        style={{
                          fontWeight: r.serialNo === p.serialNo ? 600 : 400,
                        }}
                      >
                        {r.name}
                      </td>
                      {r.asanas.map((a) => {
                        const isDeciding = (r.decidingCells ?? []).some((c) =>
                          c.startsWith(`asana${a.asanaNumber}`),
                        );
                        return (
                          <td
                            key={a.asanaNumber}
                            className={isDeciding ? "jp__cmp-highlight" : ""}
                          >
                            {a.trimmedTotal}
                          </td>
                        );
                      })}
                      <td style={{ fontWeight: 600, color: "var(--green)" }}>
                        Rank {r.rank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Rule 4 */}
          {rule === "RULE4" && (
            <div className="jp__rule-section">
              <div className="jp__rule-header">
                <span
                  className="jp__rule-num"
                  style={{ background: "#b05c00", color: "#fff" }}
                >
                  4
                </span>
                <span className="jp__rule-name">
                  Tie-break Rule 3 — Asana-wise Full
                </span>
                <span className="jp__rule-desc">
                  — Compare all 5 judge totals per asana A1→A5
                </span>
                <span
                  className="jp__rule-applied-badge"
                  style={{ background: "#fff3e0", color: "#b05c00" }}
                >
                  Decisive
                </span>
              </div>
              <table className="jp__cmp-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    {p.asanas.map((a) => (
                      <th key={a.asanaNumber}>Asana {a.asanaNumber} Full</th>
                    ))}
                    <th>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {[p, ...peers].map((r) => (
                    <tr
                      key={r.serialNo}
                      className={
                        r.serialNo === p.serialNo ? "jp__cmp-winner" : ""
                      }
                    >
                      <td
                        style={{
                          fontWeight: r.serialNo === p.serialNo ? 600 : 400,
                        }}
                      >
                        {r.name}
                      </td>
                      {r.asanas.map((a) => {
                        const isDeciding = (r.decidingCells ?? []).some((c) =>
                          c.startsWith(`asana${a.asanaNumber}`),
                        );
                        return (
                          <td
                            key={a.asanaNumber}
                            className={isDeciding ? "jp__cmp-highlight" : ""}
                          >
                            {a.fullTotal}
                          </td>
                        );
                      })}
                      <td style={{ fontWeight: 600, color: "var(--green)" }}>
                        Rank {r.rank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {rule === "UNRESOLVED" && (
            <div className="jp__tie-context jp__tie-context--none">
              All four tie-breaking rules produced equal results. This
              participant shares Rank {p.rank} with{" "}
              {peers.map((r) => r.name).join(", ")}.
            </div>
          )}
          {!hasTie && (
            <div
              className="jp__tie-context jp__tie-context--win"
              style={{ marginTop: "0.5rem" }}
            >
              ✓ No tie — ranked purely by base score ({p.baseScore}). No
              tie-break rules needed.
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

/* ─── ScrutinyTable sub-component ──────────────────────────────────────── */
function ScrutinyTable({ yearSuffix }) {
  const { user } = useAuth();
  const isAdmin = user?.role?.includes("ADMIN");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetch, setLastFetch] = useState(null);
  const [expanded, setExpanded] = useState(new Set());
  const [selectedGroup, setSelectedGroup] = useState(null);
  const printRef = useRef(null);

  // Inline editing state: { participantSerialNo: { asanaNo: { judgeIdx: { editing, score, saving, error } } } }
  const [editingCells, setEditingCells] = useState({});
  const [judgesList, setJudgesList] = useState([]);

  // Fetch judges list on mount (for admin score editing)
  useEffect(() => {
    if (isAdmin) {
      apiFetch("/admin/judges").then(setJudgesList).catch(console.error);
    }
  }, [isAdmin]);

  // Get cell key for editing state
  const getCellState = (serialNo, asanaNo, judgeIdx) =>
    editingCells[serialNo]?.[asanaNo]?.[judgeIdx] || {};

  const startEdit = (serialNo, asanaNo, judgeIdx, currentScore) => {
    setEditingCells((prev) => ({
      ...prev,
      [serialNo]: {
        ...prev[serialNo],
        [asanaNo]: {
          ...prev[serialNo]?.[asanaNo],
          [judgeIdx]: {
            editing: true,
            score: currentScore,
            saving: false,
            error: null,
          },
        },
      },
    }));
  };

  const cancelEdit = (serialNo, asanaNo, judgeIdx) => {
    setEditingCells((prev) => {
      const next = { ...prev };
      if (next[serialNo]?.[asanaNo]) {
        delete next[serialNo][asanaNo][judgeIdx];
        if (Object.keys(next[serialNo][asanaNo]).length === 0) {
          delete next[serialNo][asanaNo];
        }
        if (Object.keys(next[serialNo]).length === 0) {
          delete next[serialNo];
        }
      }
      return next;
    });
  };

  const updateCellScore = (serialNo, asanaNo, judgeIdx, value) => {
    setEditingCells((prev) => ({
      ...prev,
      [serialNo]: {
        ...prev[serialNo],
        [asanaNo]: {
          ...prev[serialNo]?.[asanaNo],
          [judgeIdx]: {
            ...prev[serialNo]?.[asanaNo]?.[judgeIdx],
            score: value,
          },
        },
      },
    }));
  };

  const fetchScrutiny = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/scrutiny");
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const json = await res.json();
      setData(json);
      setLastFetch(new Date());
    } catch (err) {
      setError(err.message || "Failed to load scrutiny data");
    } finally {
      setLoading(false);
    }
  }, []);

  const saveEdit = async (serialNo, asanaNo, judgeIdx, participantSerialNo) => {
    const cellState = getCellState(serialNo, asanaNo, judgeIdx);
    const newScore = Number(cellState.score);
    if (isNaN(newScore) || newScore < 0 || newScore > 10) {
      setEditingCells((prev) => ({
        ...prev,
        [serialNo]: {
          ...prev[serialNo],
          [asanaNo]: {
            ...prev[serialNo]?.[asanaNo],
            [judgeIdx]: { ...cellState, error: "Score must be 0-10" },
          },
        },
      }));
      return;
    }

    // Update state to saving
    setEditingCells((prev) => ({
      ...prev,
      [serialNo]: {
        ...prev[serialNo],
        [asanaNo]: {
          ...prev[serialNo]?.[asanaNo],
          [judgeIdx]: { ...cellState, saving: true, error: null },
        },
      },
    }));

    try {
      const judgeUsername = judgesList[judgeIdx] || `judge${judgeIdx + 1}`;
      await apiFetch("/admin/update-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          participantSerialNo: participantSerialNo,
          judgeUsername: judgeUsername,
          asanaNo: asanaNo,
          score: newScore,
        }),
      });

      // Success - refresh scrutiny data and clear edit state
      await fetchScrutiny();
      cancelEdit(serialNo, asanaNo, judgeIdx);
    } catch (err) {
      setEditingCells((prev) => ({
        ...prev,
        [serialNo]: {
          ...prev[serialNo],
          [asanaNo]: {
            ...prev[serialNo]?.[asanaNo],
            [judgeIdx]: {
              ...cellState,
              saving: false,
              error: err.message || "Failed to save",
            },
          },
        },
      }));
    }
  };

  useEffect(() => {
    fetchScrutiny();
  }, [fetchScrutiny]);

  const groups = data?.groups ?? [];
  const hasGroups = groups.length > 0;
  const maleRowsOld = data?.maleScrutiny ?? data?.scrutiny ?? [];
  const femaleRowsOld = data?.femaleScrutiny ?? [];
  const allRows = hasGroups
    ? groups.flatMap((g) => g.participants ?? [])
    : [...maleRowsOld, ...femaleRowsOld];
  const totalCount = allRows.length;

  const visibleGroups =
    selectedGroup === null
      ? groups
      : groups.filter((g) => g.groupKey === selectedGroup);

  const toggleExpand = (serialNo) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(serialNo) ? next.delete(serialNo) : next.add(serialNo);
      return next;
    });

  const rankClass = (rank) =>
    rank === 1
      ? "jp__rank--1"
      : rank === 2
        ? "jp__rank--2"
        : rank === 3
          ? "jp__rank--3"
          : "";

  const COL_SPAN = 13;

  /* ── Print a specific group using a new window ── */
  const handlePrint = (groupKey) => {
    const el = document.getElementById(`print-page-${groupKey}`);
    if (!el) return;

    const printStyles = `
    .prt-lh-inner{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:16px;
}

.prt-logo{
    width:75px;
    height:75px;
    object-fit:contain;
    flex-shrink:0;
}

.prt-lh-text{
    flex:1;
    text-align:center;
}

.prt-org{
    font-size:1.3rem;
    font-weight:900;
    color:#c8440a;
    text-transform:uppercase;
}

.prt-regd{
    font-size:.85rem;
    font-weight:700;
    color:#c8440a;
}

.prt-addr{
    font-size:.72rem;
    color:#333;
    margin-top:4px;
}
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { margin: 0; padding: 0; background: #fff; }
      .prt-page {
        font-family: Arial, sans-serif;
        padding: 0.8cm 1cm;
        color: #000;
        max-width: 100%;
      }
      .prt-lh { text-align: center; border: 2px solid #000; padding: 0.5rem 1rem 0.4rem; margin-bottom: 0; }
      .prt-lh-inner { display: flex; align-items: center; justify-content: center; gap: 1rem; }
      .prt-lh-text { flex: 1; }
      .prt-org { font-size: 1.3rem; font-weight: 900; color: #c8440a; letter-spacing: 0.04em; text-transform: uppercase; line-height: 1.2; }
      .prt-regd { font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-addr { font-size: 0.72rem; color: #333; margin-top: 0.15rem; }
      .prt-title-block { border: 2px solid #000; border-top: none; padding: 0.35rem 1rem; text-align: center; }
      .prt-sheet-title { font-size: 1.1rem; font-weight: 900; text-decoration: underline; color: #c8440a; text-transform: uppercase; letter-spacing: 0.05em; }
      .prt-comp-line { font-size: 0.85rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-transform: uppercase; margin-top: 0.2rem; }
      .prt-meta { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; gap: 2rem; }
      .prt-meta-field { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-meta-line { flex: 1; border-bottom: 1.5px solid #333; min-width: 120px; height: 16px; }
      .prt-group-row { border: 2px solid #000; border-top: none; padding: 0.3rem 1rem; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #c8440a; }
      .prt-group-dots { flex: 1; border-bottom: 1.5px dotted #555; height: 16px; }
      .prt-grid-wrap { border: 2px solid #000; border-top: none; overflow-x: auto; }
      .prt-grid { width: 100%; border-collapse: collapse; }
      .prt-grid th, .prt-grid td { border: 1px solid #1a6fa8; text-align: center; padding: 0.22rem 0.2rem; font-size: 0.7rem; min-width: 28px; }
      .prt-grid thead th { background: #fff; font-weight: 700; color: #c8440a; font-size: 0.68rem; white-space: nowrap; }
      .prt-grid thead th.th-row-label { background: #fff; min-width: 70px; text-align: left; padding-left: 0.4rem; }
      .prt-grid tbody tr.tr-tie td { color: #c8440a; font-weight: 700; }
      .prt-grid tbody tr.tr-total td { color: #1a6fa8; font-weight: 700; background: #f0f7ff; }
      .prt-grid tbody tr.tr-pos td { color: #c8440a; font-weight: 700; background: #fff8f0; }
      .prt-grid tbody td.td-row-label { font-weight: 700; text-align: left; padding-left: 0.4rem; color: inherit; white-space: nowrap; }
      .prt-grid tbody td.td-data { min-width: 30px; height: 20px; }
      .prt-footer-block { border: 2px solid #000; border-top: none; padding: 0.75rem 1rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; }
      .prt-sig-left { display: flex; flex-direction: column; gap: 1.2rem; }
      .prt-sig-line-wrap { display: flex; flex-direction: column; gap: 0.15rem; }
      .prt-sig-line-bar { border-bottom: 1.5px solid #333; width: 200px; height: 22px; }
      .prt-sig-label { font-size: 0.75rem; font-weight: 700; color: #c8440a; }
      .prt-judges-right { display: flex; flex-direction: column; gap: 0.2rem; }
      .prt-judges-title { font-size: 0.82rem; font-weight: 700; color: #1a6fa8; text-decoration: underline; text-align: right; margin-bottom: 0.2rem; }
      .prt-judge-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; }
      .prt-judge-num { font-weight: 700; min-width: 18px; }
      .prt-judge-line { border-bottom: 1px solid #333; width: 180px; height: 16px; }
      @media print {
        body { margin: 0; }
        @page { margin: 0.5cm; size: A4 portrait; }
        .prt-page { page-break-after: always; }
        .prt-page:last-child { page-break-after: avoid; }
      }
    `;

    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"/>
      <title>Scrutiny Sheet</title>
      <style>${printStyles}</style>
    </head><body>${el.innerHTML}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 500);
  };

  const tableHead = (
    <thead>
      <tr>
        <th className="th-center" style={{ width: 36 }}>
          #
        </th>
        <th style={{ width: 48 }}>Tag</th>
        <th className="th-center" style={{ width: 72 }}>
          Gender
        </th>
        <th style={{ minWidth: 140 }}>Name</th>
        <th>Asana 1</th>
        <th>Asana 2</th>
        <th>Asana 3</th>
        <th>Asana 4</th>
        <th>Asana 5</th>
        <th style={{ width: 60 }}>Base</th>
        <th style={{ width: 60 }}>Full</th>
        <th style={{ minWidth: 120 }}>Tie-break</th>
        <th className="th-calc">Calc</th>
      </tr>
    </thead>
  );

  const renderRows = (rows) =>
    rows.map((p) => {
      const cells = new Set(p.decidingCells ?? []);
      const rule = RULE_LABEL[p.tieBreakRule] ?? RULE_LABEL.BASE;
      const isOpen = expanded.has(p.serialNo);
      return (
        <React.Fragment key={p.serialNo}>
          <tr className={p.rank === 1 ? "jp__row--gold" : ""}>
            <td style={{ textAlign: "center" }}>
              <span className={`jp__rank ${rankClass(p.rank)}`}>{p.rank}</span>
            </td>
            <td style={{ color: "var(--ink-3)", fontSize: "0.75rem" }}>
              {p.tagNo}
            </td>
            <td style={{ textAlign: "center" }}>
              {p.gender && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.1rem 0.4rem",
                    borderRadius: 4,
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    ...(p.gender === "Male"
                      ? {
                          background: "#e8f2fb",
                          color: "#1a6fa8",
                          border: "1px solid #b3d4ef",
                        }
                      : {
                          background: "#fce8f3",
                          color: "#a3186e",
                          border: "1px solid #f0b3d9",
                        }),
                  }}
                >
                  {p.gender}
                </span>
              )}
            </td>
            <td style={{ fontWeight: 500, whiteSpace: "nowrap" }}>{p.name}</td>

            {(p.asanas ?? []).map((asana) => {
              const exclSet = new Set(asana.excludedJudgeIndices ?? []);
              return (
                <td
                  key={asana.asanaNumber}
                  style={{ padding: "0.45rem 0.6rem" }}
                >
                  <div className="jp__asana-block">
                    <div className="jp__asana-scores">
                      {(asana.judgeScores ?? []).map((score, jIdx) => {
                        const cellKey = `asana${asana.asanaNumber}_judge${jIdx + 1}`;
                        const excluded = exclSet.has(jIdx);
                        const deciding = cells.has(cellKey);
                        const cellState = getCellState(
                          p.serialNo,
                          asana.asanaNumber,
                          jIdx,
                        );
                        const currentScore = cellState.editing
                          ? cellState.score
                          : score;

                        return (
                          <span
                            key={jIdx}
                            className={`jp__score-pip${excluded ? " jp__score-pip--excluded" : ""}${deciding ? " jp__score-pip--deciding" : ""}`}
                            title={
                              excluded
                                ? `J${jIdx + 1}: ${score} (excluded)`
                                : deciding
                                  ? `J${jIdx + 1}: ${score} (deciding)`
                                  : `J${jIdx + 1}: ${score}`
                            }
                          >
                            {isAdmin ? (
                              cellState.editing ? (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                  }}
                                >
                                  <div style={{ display: "flex", gap: 2 }}>
                                    <input
                                      type="number"
                                      min={0}
                                      max={10}
                                      step={0.1}
                                      value={currentScore}
                                      onChange={(e) =>
                                        updateCellScore(
                                          p.serialNo,
                                          asana.asanaNumber,
                                          jIdx,
                                          e.target.value,
                                        )
                                      }
                                      style={{ width: 48, fontSize: 12 }}
                                      disabled={cellState.saving}
                                      autoFocus
                                    />
                                    <button
                                      onClick={() =>
                                        saveEdit(
                                          p.serialNo,
                                          asana.asanaNumber,
                                          jIdx,
                                          p.serialNo,
                                        )
                                      }
                                      disabled={cellState.saving}
                                      title="Save"
                                      style={{
                                        padding: "2px 6px",
                                        fontSize: 12,
                                      }}
                                    >
                                      ✓
                                    </button>
                                    <button
                                      onClick={() =>
                                        cancelEdit(
                                          p.serialNo,
                                          asana.asanaNumber,
                                          jIdx,
                                        )
                                      }
                                      disabled={cellState.saving}
                                      title="Cancel"
                                      style={{
                                        padding: "2px 6px",
                                        fontSize: 12,
                                      }}
                                    >
                                      ✗
                                    </button>
                                  </div>
                                  {cellState.error && (
                                    <span
                                      style={{ color: "red", fontSize: 10 }}
                                    >
                                      {cellState.error}
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <span
                                  onClick={() =>
                                    startEdit(
                                      p.serialNo,
                                      asana.asanaNumber,
                                      jIdx,
                                      score,
                                    )
                                  }
                                  style={{
                                    cursor: "pointer",
                                    borderBottom: "1px dashed #aaa",
                                  }}
                                  title="Click to edit"
                                >
                                  {score}
                                </span>
                              )
                            ) : (
                              <span>{score}</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                    <div className="jp__asana-trim">{asana.trimmedTotal}</div>
                  </div>
                </td>
              );
            })};

            <td>
              <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                {p.baseScore}
              </span>
            </td>
            <td>
              <span style={{ fontSize: "0.8rem", color: "var(--ink-2)" }}>
                {p.fullScore}
              </span>
            </td>
            <td>
              <span
                className="jp__tie-badge"
                style={{ color: rule.color, background: rule.bg }}
              >
                {rule.text}
              </span>
            </td>
            <td className="td-calc">
              <button
                className={`jp__expand-btn${isOpen ? " jp__expand-btn--open" : ""}`}
                onClick={() => toggleExpand(p.serialNo)}
                title={isOpen ? "Hide calculation" : "Show calculation"}
              >
                {isOpen ? "▲ Hide" : "▼ Show"}
              </button>
            </td>
          </tr>

          {isOpen && (
            <BreakdownDrawer
              participant={p}
              allRows={allRows}
              colSpan={COL_SPAN}
            />
          )}
        </React.Fragment>
      );
    });

  return (
    <div>
      {/* Group toggle panel */}
      {!loading && !error && hasGroups && (
        <div className="jp__group-panel no-print">
          <span className="jp__group-panel-label">Group</span>
          <div className="jp__group-toggles">
            <button
              className={`jp__group-toggle ${selectedGroup === null ? "jp__group-toggle--all-active" : ""}`}
              onClick={() => setSelectedGroup(null)}
            >
              All
            </button>
            {groups.map((g) => {
              const isMale = g.gender === "Male";
              const isActive = selectedGroup === g.groupKey;
              return (
                <button
                  key={g.groupKey}
                  className={`jp__group-toggle ${
                    isActive
                      ? isMale
                        ? "jp__group-toggle--male-active"
                        : "jp__group-toggle--female-active"
                      : ""
                  }`}
                  onClick={() => setSelectedGroup(isActive ? null : g.groupKey)}
                >
                  {g.ageGroup} — {g.gender}
                  {g.tiedCount > 0 && " ⚠"}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main table card */}
      <div className="jp__table-card">
        {/* Refresh bar */}
        <div className="jp__refresh-bar no-print">
          <span>
            results from{" "}
            <code style={{ fontSize: "0.7rem" }}>/api/scrutiny</code>
            {totalCount > 0 &&
              ` · ${totalCount} participant${totalCount !== 1 ? "s" : ""}`}
          </span>
          <div className="jp__refresh-right">
            {lastFetch && (
              <span className="jp__last-fetch">
                Updated {lastFetch.toLocaleTimeString()}
              </span>
            )}
            <button
              className="jp__retry-btn"
              onClick={fetchScrutiny}
              disabled={loading}
            >
              {loading ? "…" : "↻ Refresh"}
            </button>
          </div>
        </div>

        {loading && (
          <div className="jp__state-box">
            <div className="jp__spinner" />
            <span>Loading scrutiny data…</span>
          </div>
        )}
        {!loading && error && (
          <div className="jp__state-box">
            <span className="jp__error-icon">⚠</span>
            <span style={{ color: "var(--red)" }}>{error}</span>
            <button className="jp__retry-btn" onClick={fetchScrutiny}>
              Retry
            </button>
          </div>
        )}
        {!loading && !error && totalCount === 0 && (
          <div className="jp__state-box">
            <span>No scrutiny data available yet.</span>
          </div>
        )}

        {!loading &&
          !error &&
          (hasGroups ? (
            visibleGroups.map((group) => {
              const {
                groupKey,
                ageGroup,
                gender,
                participants = [],
                tiedCount = 0,
              } = group;
              const isMale = gender === "Male";
              return (
                <div key={groupKey}>
                  <div
                    className={`jp__group-header ${isMale ? "jp__group-header--male" : "jp__group-header--female"} no-print`}
                  >
                    <span>
                      Group: {ageGroup} — {gender} — {participants.length}{" "}
                      Participant{participants.length !== 1 ? "s" : ""}
                    </span>
                    <button
                      className="jp__retry-btn"
                      onClick={() => handlePrint(groupKey)}
                      style={{ fontSize: "0.65rem", padding: "0.2rem 0.55rem" }}
                    >
                      🖨 Print this group
                    </button>
                  </div>

                  {tiedCount > 0 && (
                    <div className="jp__tied-warn no-print">
                      ⚠ {tiedCount} participant{tiedCount !== 1 ? "s" : ""}{" "}
                      share{tiedCount === 1 ? "s" : ""} a tied rank in this
                      group
                    </div>
                  )}

                  <div className="jp__table-wrap">
                    <table className="jp__table">
                      {tableHead}
                      <tbody>{renderRows(participants)}</tbody>
                    </table>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="jp__table-wrap">
              <table className="jp__table">
                {tableHead}
                <tbody>{renderRows(allRows)}</tbody>
              </table>
            </div>
          ))}
      </div>

      {/* Hidden official print pages — rendered off-screen so DOM is fully built */}
      {hasGroups &&
        groups.map((group) => (
          <div
            key={group.groupKey}
            id={`print-page-${group.groupKey}`}
            style={{
              position: "absolute",
              left: "-9999px",
              top: 0,
              width: "210mm",
              pointerEvents: "none",
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <OfficialScrutinyPrint group={group} yearSuffix={yearSuffix} />
          </div>
        ))}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function JudgingPanel() {
  const [yearSuffix, setYearSuffix] = useState("");

  return (
    <>
      <style>{css}</style>
      <div className="jp">
        {/* Header */}
        <div className="jp__header">
          <div>
            <div className="jp__label">Judging</div>
            <h2 className="jp__title">Scrutiny Sheet</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                fontSize: "0.68rem",
                color: "var(--ink-3)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Year:
            </span>
            <input
              value={yearSuffix}
              onChange={(e) => setYearSuffix(e.target.value)}
              placeholder="20__"
              style={{
                width: 60,
                fontSize: "0.82rem",
                border: "none",
                borderBottom: "1.5px solid var(--paper-3)",
                background: "transparent",
                outline: "none",
                fontFamily: "var(--mono)",
                padding: "0.15rem 0.2rem",
                color: "var(--ink)",
              }}
            />
          </div>
        </div>

        {/* Judge legend */}
        <div className="a-card jp__legend">
          <div className="jp__label" style={{ marginBottom: "0.75rem" }}>
            Judge Assignments
          </div>
          <div className="jp__judges">
            {["Judge 1", "Judge 2", "Judge 3", "Judge 4", "Judge 5"].map(
              (j, i) => (
                <div className="jp__judge-chip" key={i}>
                  <div className="jp__judge-num">{i + 1}</div>
                  <span>{j}</span>
                </div>
              ),
            )}
            <div className="jp__judge-chip jp__judge-chip--rule">
              <span>Highest &amp; Lowest excluded · Middle 3 counted</span>
            </div>
          </div>
        </div>

        {/* Live Scrutiny Table */}
        <ScrutinyTable yearSuffix={yearSuffix} />
      </div>
    </>
  );
}