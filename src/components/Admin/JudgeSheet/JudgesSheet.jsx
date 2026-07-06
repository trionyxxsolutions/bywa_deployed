//JudgeSheet.jsx
import React, { useState, useEffect, useCallback } from "react";

const API_BASE = "/api";

// ─── API helpers ─────────────────────────────────────────────────────────────

async function apiFetch(path) {
  const res = await fetch(`${API_BASE}${path}`, { credentials: "include" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

// ─── Small reusable components ───────────────────────────────────────────────

function Spinner() {
  return <span className="js-spinner" aria-label="Loading" />;
}

function ErrorBanner({ message, onRetry }) {
  return (
    <div className="js-error-banner">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle
          cx="7.5"
          cy="7.5"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M7.5 4.5v3.5M7.5 10v.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      {message}
      {onRetry && (
        <button className="js-error-retry" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

// ─── Ordinal helper ───────────────────────────────────────────────────────────

function ordinal(n) {
  const s = ["TH", "ST", "ND", "RD"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ─── Gender badge ─────────────────────────────────────────────────────────────

function GenderBadge({ gender }) {
  if (!gender) return null;
  const style =
    gender === "Male"
      ? { background: "#e8f2fb", color: "#1a6fa8", border: "1px solid #b3d4ef" }
      : {
          background: "#fce8f3",
          color: "#a3186e",
          border: "1px solid #f0b3d9",
        };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.1rem 0.4rem",
        borderRadius: 4,
        fontSize: "0.65rem",
        fontWeight: 500,
        ...style,
      }}
    >
      {gender}
    </span>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const css = `
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:       #16120e;
  --ink-2:     #3d3630;
  --ink-3:     #8a7f76;
  --paper:     #faf7f2;
  --paper-2:   #f2ede4;
  --paper-3:   #e5ddd0;
  --paper-4:   #d9cfc0;
  --accent:    #8b1a1a;
  --accent-2:  #b84c4c;
  --gold:      #c9920a;
  --gold-soft: #fdf5e0;
  --silver:    #6b7a8d;
  --bronze:    #8a5c2e;
  --green:     #276345;
  --green-soft:#e8f3ed;
  --red:       #b01c1c;
  --red-soft:  #fbecec;
  --shadow-sm: 0 1px 3px rgba(22,18,14,.07), 0 2px 8px rgba(22,18,14,.05);
  --shadow:    0 2px 6px rgba(22,18,14,.08), 0 8px 24px rgba(22,18,14,.07);
  --radius:    10px;
  --mono:      'DM Mono', monospace;
  --serif:     'Crimson Pro', Georgia, serif;
  --print-border: 1px solid #bbb;
}

.js-shell {
  font-family: var(--mono);
  background: var(--paper);
  min-height: 100vh;
  color: var(--ink);
}

.js-topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 2rem 1.25rem;
  background: #fff;
  border-bottom: 1.5px solid var(--paper-3);
  position: sticky;
  top: 0;
  z-index: 20;
}
.js-section-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.25rem;
}
.js-page-title {
  font-family: var(--serif);
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
}
.js-topbar-actions {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.js-chip {
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: all .15s;
}
.js-chip:hover { background: var(--paper-3); }
.js-chip--active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.js-doc {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1.5rem 3rem;
}

/* ── Org header ── */
.js-org {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid var(--ink);
}
.js-org-name {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
}
.js-org-reg {
  font-family: var(--serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-2);
  margin: 0.1rem 0;
}
.js-org-addr {
  font-family: var(--serif);
  font-size: 0.85rem;
  color: var(--ink-3);
}

/* ── Sheet header ── */
.js-sheet-title {
  font-family: var(--serif);
  font-size: 1.45rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.js-sheet-subtitle {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--ink);
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

/* ── Meta fields (Date / Place / Group) ── */
.js-meta { margin-bottom: 1.25rem; }
.js-meta-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}
.js-meta-field {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 140px;
}
.js-meta-field--wide { flex: 2; }
.js-meta-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.js-meta-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.95rem;
  border: none;
  border-bottom: 1.5px solid var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.2rem 0.25rem;
  outline: none;
  min-width: 0;
}
.js-meta-input:focus { border-bottom-color: var(--accent); }

/* ── Group field with dotted line ── */
.js-group-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.js-group-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
  letter-spacing: 0.04em;
}
.js-group-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.95rem;
  border: none;
  border-bottom: 1.5px dotted var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.2rem 0.25rem;
  outline: none;
}
.js-group-input:focus { border-bottom-color: var(--accent); }

/* ── Main result table ── */
.js-table-wrap { overflow-x: auto; margin-bottom: 0.75rem; }
.js-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}
.js-table th, .js-table td {
  border: var(--print-border);
  padding: 0.38rem 0.55rem;
  vertical-align: middle;
}
.js-table thead th {
  background: var(--paper-2);
  font-family: var(--serif);
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink);
  font-weight: 700;
  text-align: center;
}

/* column widths */
.col-tno    { width: 72px;  text-align: center; }
.col-gender { width: 80px;  text-align: center; }
.col-name   { min-width: 180px; text-align: left; }
.col-dob    { width: 100px; text-align: center; }
.col-pos    { width: 80px;  text-align: center; }
.col-centre { min-width: 130px; text-align: left; }

.js-table tbody td { vertical-align: middle; }

/* Position label cell */
.td-pos-label {
  font-family: var(--serif);
  font-size: 0.88rem;
  font-weight: 700;
  text-align: center;
  color: var(--ink);
}
.td-pos-label--gold   { color: var(--gold); }
.td-pos-label--silver { color: var(--silver); }
.td-pos-label--bronze { color: var(--bronze); }

/* editable cell */
.js-cell {
  width: 100%;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  background: transparent;
  color: var(--ink);
  text-align: inherit;
  outline: none;
  padding: 0;
}

/* ── Live result table ── */
.js-live-row--gold   { background: var(--gold-soft); }
.js-live-cell { padding: 0.42rem 0.55rem; }

.js-rank-badge {
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; border-radius: 50%;
  font-size: 0.75rem; font-weight: 700;
  background: var(--paper-3); color: var(--ink-2);
}
.js-rank-badge--1 { background: var(--gold);   color: #fff; }
.js-rank-badge--2 { background: var(--silver); color: #fff; }
.js-rank-badge--3 { background: var(--bronze); color: #fff; }

.js-score-pill {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--ink-2);
}
.js-score-pill--final {
  font-weight: 600;
  color: var(--accent);
  font-size: 0.88rem;
}

/* ── Mode bar ── */
.js-mode-bar {
  display: flex; align-items: center; gap: 0.6rem;
  margin-bottom: 1rem; flex-wrap: wrap;
}
.js-mode-label { font-size: 0.7rem; color: var(--ink-3); }
.js-mode-btn {
  font-family: var(--mono); font-size: 0.72rem;
  padding: 0.28rem 0.75rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer; transition: all .12s;
}
.js-mode-btn:hover { background: var(--paper-3); }
.js-mode-btn--active {
  background: var(--ink); color: #fff; border-color: var(--ink);
}

/* ── Add row bar ── */
.js-add-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}
.js-add-label { font-size: 0.72rem; color: var(--ink-3); }
.js-add-btn {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: background .12s;
}
.js-add-btn:hover { background: var(--paper-3); }

/* ── Tied warning ── */
.js-tied-banner {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.78rem; color: #7a5a00;
  padding: 0.65rem 1rem;
  background: #fdf5e0;
  border: 1px solid #e8c84a;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* ── Group selector panel ── */
.js-group-panel {
  background: #fff;
  border: 1.5px solid var(--paper-3);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
}
.js-group-panel-title {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 0.75rem;
  font-family: var(--mono);
}
.js-group-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.js-group-toggle {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  border: 1.5px solid var(--paper-3);
  background: var(--paper-2);
  color: var(--ink-2);
  cursor: pointer;
  transition: all .15s;
  user-select: none;
}
.js-group-toggle:hover { background: var(--paper-3); }
.js-group-toggle--male-active {
  background: #e8f2fb;
  color: #1a6fa8;
  border-color: #b3d4ef;
  font-weight: 600;
}
.js-group-toggle--female-active {
  background: #fce8f3;
  color: #a3186e;
  border-color: #f0b3d9;
  font-weight: 600;
}
.js-group-toggle--selected {
  outline: 2.5px solid var(--accent);
  outline-offset: 1px;
}

/* ── Print sheet container ── */
.js-print-sheet {
  background: #fff;
  border: 1px solid var(--paper-3);
  border-radius: var(--radius);
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
}
.js-print-sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.js-print-sheet-label {
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink-2);
}

/* ── Print letterhead ── */
.prt-letterhead {
  text-align: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
}
  .prt-letterhead-inner{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:18px;
}


.prt-logo{
    width:80px;
    height:80px;

    object-fit:contain;

    flex-shrink:0;
}


.prt-org-name{
    text-align:center;
}


.prt-org-reg{
    text-align:center;
}


.prt-org-addr{
    text-align:center;
}
.prt-letterhead-rule {
  border: none;
  border-top: 2.5px double var(--ink);
  margin: 0.5rem 0;
}
.prt-org-name {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--ink);
  line-height: 1.2;
}
.prt-org-reg {
  font-family: var(--serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--ink-2);
  margin: 0.1rem 0;
}
.prt-org-addr {
  font-family: var(--serif);
  font-size: 0.82rem;
  color: var(--ink-3);
  margin-bottom: 0.25rem;
}
.prt-sheet-title {
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: var(--ink);
  margin-bottom: 0.3rem;
  margin-top: 0.75rem;
}
.prt-sheet-subtitle {
  font-family: var(--serif);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--ink);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}
.prt-meta {
  margin-bottom: 0.75rem;
  font-family: var(--serif);
  font-size: 0.95rem;
}
.prt-meta-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 0.4rem;
}
.prt-meta-field {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex: 1;
}
.prt-meta-label {
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.04em;
}
.prt-meta-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  border-bottom: 1.5px solid var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.15rem 0.2rem;
  outline: none;
  min-width: 0;
}
.prt-meta-input:focus { border-bottom-color: var(--accent); }
.prt-group-row {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.prt-group-input {
  flex: 1;
  font-family: var(--serif);
  font-size: 0.92rem;
  border: none;
  border-bottom: 1.5px dotted var(--ink-2);
  background: transparent;
  color: var(--ink);
  padding: 0.15rem 0.2rem;
  outline: none;
}
.prt-group-input:focus { border-bottom-color: var(--accent); }
.prt-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
.prt-sig-block { text-align: center; min-width: 180px; }
.prt-sig-line {
  width: 180px;
  border-bottom: 1.5px solid var(--ink);
  margin-bottom: 0.3rem;
  height: 28px;
}
.prt-sig-label {
  font-family: var(--serif);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink-2);
}

/* ── Footer ── */
.js-footer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 2.5rem;
}
.js-sig-block { min-width: 200px; text-align: center; }
.js-sig-line {
  width: 200px;
  border-bottom: 1.5px solid var(--ink);
  margin-bottom: 0.3rem;
  height: 32px;
}
.js-sig-label {
  font-family: var(--serif);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink-2);
  text-align: center;
}

/* ── States ── */
.js-state {
  text-align: center;
  padding: 2.5rem 1rem;
  color: var(--ink-3);
  font-size: 0.82rem;
}
.js-spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid var(--paper-3);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin .7s linear infinite;
  vertical-align: middle;
  margin-right: 0.5rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.js-error-banner {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.78rem; color: var(--red);
  padding: 0.65rem 1rem;
  background: var(--red-soft);
  border: 1px solid #f3c0c0;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.js-error-retry {
  font-family: var(--mono);
  font-size: 0.72rem;
  margin-left: auto;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: 1px solid var(--red);
  background: transparent;
  color: var(--red);
  cursor: pointer;
}
.js-error-retry:hover { background: var(--red-soft); }

/* ══════════════════════════════════════════════
   PRINT STYLES
   Only the element with .print-target is shown.
   Everything else is hidden.
══════════════════════════════════════════════ */
@media print {
  /* Hide everything */
  body * { visibility: hidden !important; }

  /* Show only the selected sheet */
  .print-target,
  .print-target * { visibility: visible !important; }

  /* Position it at the top-left corner */
  .print-target {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    background: #fff !important;
    padding: 1.2cm 1.4cm !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;
  }

  /* Remove screen-only elements inside target */
  .print-target .no-print { display: none !important; }

  /* Ensure table borders print */
  .print-target .js-table th,
  .print-target .js-table td { border: 1px solid #888 !important; }

  /* Remove background tints in print */
  .print-target .js-live-row--gold { background: #fff !important; }
  .print-target thead th { background: #f5f5f5 !important; }

  /* Input underlines in print */
  .print-target .prt-meta-input,
  .print-target .prt-group-input { border-bottom-color: #888 !important; }
}
`;

// ─── Ordinal position class helper ───────────────────────────────────────────

function posClass(rank) {
  if (rank === 1) return "td-pos-label td-pos-label--gold";
  if (rank === 2) return "td-pos-label td-pos-label--silver";
  if (rank === 3) return "td-pos-label td-pos-label--bronze";
  return "td-pos-label";
}

// ─── Full letterhead for print ────────────────────────────────────────────────

function PrintLetterhead({
  yearSuffix,
  ageGroup,
  gender,
  dateVal,
  placeVal,
  groupVal,
  onDateChange,
  onPlaceChange,
  onGroupChange,
}) {
  return (
    <>
      {/* Org block */}
      <div className="prt-letterhead">
        <div className="prt-letterhead-inner">
          <img src="/logo/logo.png" alt="BYWA" className="prt-logo" />

          <div>
            <div className="prt-org-name">Bengal Yoga Welfare Association</div>

            <div className="prt-org-reg">(Govt. Regd.)</div>

            <div className="prt-org-addr">
              149, Bireswar Chatterjee Street, Chaital Para, P.O. – Bally, P.S.
              – Bally, Dist. – Howrah.
            </div>
          </div>
        </div>

        <hr className="prt-letterhead-rule" />
      </div>

      {/* Sheet title */}
      <div className="prt-sheet-title">Result Sheet</div>
      <div className="prt-sheet-subtitle">
        National / Bengal / District Yogasana Competition –&nbsp;
        <span style={{ fontFamily: "var(--serif)", fontWeight: 600 }}>
          {yearSuffix || "20__"}
        </span>
      </div>

      {/* Meta: Date / Place */}
      <div className="prt-meta">
        <div className="prt-meta-row">
          <div className="prt-meta-field">
            <span className="prt-meta-label">DATE :</span>
            <input
              className="prt-meta-input"
              value={dateVal}
              onChange={(e) => onDateChange(e.target.value)}
              placeholder=" "
            />
          </div>
          <div className="prt-meta-field">
            <span className="prt-meta-label">PLACE :</span>
            <input
              className="prt-meta-input"
              value={placeVal}
              onChange={(e) => onPlaceChange(e.target.value)}
              placeholder=" "
            />
          </div>
        </div>
        <div className="prt-group-row">
          <span
            className="prt-meta-label"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            GROUP :
          </span>
          <input
            className="prt-group-input"
            value={groupVal}
            onChange={(e) => onGroupChange(e.target.value)}
            placeholder={`${ageGroup} — ${gender}`}
          />
        </div>
      </div>
    </>
  );
}

// ─── Single group print sheet ─────────────────────────────────────────────────

function GroupPrintSheet({ group, yearSuffix, isSelected, onSelect }) {
  const {
    groupKey,
    ageGroup,
    gender,
    participants = [],
    tiedCount: groupTiedCount = 0,
  } = group;

  const [dateVal, setDateVal] = useState("");
  const [placeVal, setPlaceVal] = useState("");
  const [groupVal, setGroupVal] = useState("");

  const isMale = gender === "Male";

  const handlePrint = () => {
    const el = document.getElementById(`prt-${groupKey}`);
    if (!el) return;
    el.classList.add("print-target");
    const cleanup = () => {
      el.classList.remove("print-target");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  };

  return (
    <div
      className="js-print-sheet"
      id={`prt-${groupKey}`}
      style={{
        border: isSelected
          ? "2px solid var(--accent)"
          : "1.5px solid var(--paper-3)",
        transition: "border-color .15s",
      }}
    >
      {/* Screen-only header row */}
      <div className="js-print-sheet-header no-print">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="js-group-toggle"
            style={{
              background: isMale ? "#e8f2fb" : "#fce8f3",
              color: isMale ? "#1a6fa8" : "#a3186e",
              border: `1.5px solid ${isMale ? "#b3d4ef" : "#f0b3d9"}`,
              fontWeight: 600,
              fontSize: "0.78rem",
            }}
          >
            {ageGroup} — {gender}
          </span>
          {groupTiedCount > 0 && (
            <span style={{ fontSize: "0.72rem", color: "#7a5a00" }}>
              ⚠ {groupTiedCount} tied
            </span>
          )}
        </div>
        <button
          className="js-add-btn"
          onClick={handlePrint}
          style={{
            fontSize: "0.72rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          🖨 Print this group
        </button>
      </div>

      {/* Full letterhead (visible on screen + in print) */}
      <PrintLetterhead
        yearSuffix={yearSuffix}
        ageGroup={ageGroup}
        gender={gender}
        dateVal={dateVal}
        placeVal={placeVal}
        groupVal={groupVal}
        onDateChange={setDateVal}
        onPlaceChange={setPlaceVal}
        onGroupChange={setGroupVal}
      />

      {/* Table */}
      <div className="js-table-wrap">
        <table className="js-table">
          <thead>
            <tr>
              <th className="col-tno">T. NO.</th>
              <th className="col-gender">Gender</th>
              <th className="col-name">Competitor's Name</th>
              <th className="col-dob">D.O.B.</th>
              <th className="col-pos">Position</th>
              <th className="col-centre">Centre Name</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr
                key={p.serialNo}
                className={p.rank === 1 ? "js-live-row--gold" : ""}
              >
                <td className="col-tno js-live-cell">
                  <span className="js-score-pill">{p.tagNo}</span>
                </td>
                <td
                  className="col-gender js-live-cell"
                  style={{ textAlign: "center" }}
                >
                  <GenderBadge gender={p.gender} />
                </td>
                <td className="col-name js-live-cell">{p.name}</td>
                <td className="col-dob js-live-cell">
                  <input className="js-cell" style={{ textAlign: "center" }} />
                </td>
                <td className={`col-pos js-live-cell ${posClass(p.rank)}`}>
                  {ordinal(p.rank)}
                </td>
                <td className="col-centre js-live-cell">
                  <input className="js-cell" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature */}
      <div className="prt-footer">
        <div className="prt-sig-block">
          <div className="prt-sig-line" />
          <div className="prt-sig-label">Signature &amp; Date</div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared header (org + sheet title + meta) — screen view only ──────────────

function SheetHeader({ yearSuffix, onYearChange }) {
  return (
    <>
      <div className="js-org">
        <div className="js-org-name">Bengal Yoga Welfare Association</div>
        <div className="js-org-reg">(Govt. Regd.)</div>
        <div className="js-org-addr">
          149, Bireswar Chatterjee Street, Chaital Para, P.O. – Bally, P.S. –
          Bally, Dist. – Howrah.
        </div>
      </div>
      <div className="js-sheet-title">Result Sheet</div>
      <div className="js-sheet-subtitle">
        National / Bengal / District Yogasana Competition –&nbsp;
        <input
          className="js-meta-input"
          value={yearSuffix}
          onChange={(e) => onYearChange(e.target.value)}
          style={{
            maxWidth: 60,
            borderBottom: "1.5px solid #bbb",
            fontWeight: 600,
          }}
          placeholder="20"
        />
      </div>
    </>
  );
}

function MetaFields() {
  return (
    <div className="js-meta">
      <div className="js-meta-row">
        <div className="js-meta-field">
          <span className="js-meta-label">DATE :</span>
          <input className="js-meta-input" placeholder="&nbsp;" />
        </div>
        <div className="js-meta-field">
          <span className="js-meta-label">PLACE :</span>
          <input className="js-meta-input" placeholder="&nbsp;" />
        </div>
      </div>
      <div className="js-group-row">
        <span className="js-group-label">GROUP :</span>
        <input
          className="js-group-input"
          placeholder="……………………………………………………………………………………………………………………"
        />
      </div>
    </div>
  );
}

// ─── Live Result Tab ──────────────────────────────────────────────────────────

function LiveResultTab({ yearSuffix, onYearChange }) {
  const [leaderboard, setLB] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedGroup, setSelected] = useState(null); // groupKey or null = "All"

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch("/leaderboard");
      setLB(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const groups = leaderboard?.groups ?? [];
  const hasGroups = groups.length > 0;

  const tiedCount = hasGroups
    ? groups.reduce((sum, g) => sum + (g.tiedCount ?? 0), 0)
    : (leaderboard?.tiedCount ?? 0);
  const tiedSerialNos = hasGroups
    ? groups.flatMap((g) => g.tiedSerialNos ?? [])
    : (leaderboard?.tiedSerialNos ?? leaderboard?.tiedTagNos ?? []);

  // Filter visible groups based on selected toggle
  const visibleGroups =
    selectedGroup === null
      ? groups
      : groups.filter((g) => g.groupKey === selectedGroup);

  return (
    <>
      {/* Controls bar */}
      <div className="js-mode-bar no-print">
        <span className="js-mode-label">Source: Live from backend</span>
        <button
          className="js-add-btn"
          onClick={fetchLeaderboard}
          style={{ marginLeft: "auto" }}
        >
          ↺ Refresh
        </button>
      </div>

      {loading && (
        <div className="js-state">
          <Spinner />
          Loading results…
        </div>
      )}
      {error && <ErrorBanner message={error} onRetry={fetchLeaderboard} />}

      {/* Tied warning */}
      {!loading && !error && tiedCount > 0 && (
        <div className="js-tied-banner no-print">
          ⚠ {tiedCount} participant{tiedCount !== 1 ? "s" : ""} share
          {tiedCount === 1 ? "s" : ""} a tied rank.
          {tiedSerialNos.length > 0 &&
            ` Serial nos: ${tiedSerialNos.join(", ")}.`}{" "}
          Resolve ties before finalising.
        </div>
      )}

      {/* Group toggle selector */}
      {!loading && !error && hasGroups && (
        <div className="js-group-panel no-print">
          <div className="js-group-panel-title">
            Select group to view / print
          </div>
          <div className="js-group-toggles">
            {/* "All" pill */}
            <button
              className={`js-group-toggle ${selectedGroup === null ? "js-group-toggle--selected" : ""}`}
              onClick={() => setSelected(null)}
            >
              All Groups
            </button>
            {groups.map((g) => {
              const isMale = g.gender === "Male";
              const isActive = selectedGroup === g.groupKey;
              return (
                <button
                  key={g.groupKey}
                  className={`js-group-toggle ${
                    isMale
                      ? "js-group-toggle--male-active"
                      : "js-group-toggle--female-active"
                  } ${isActive ? "js-group-toggle--selected" : ""}`}
                  onClick={() => setSelected(isActive ? null : g.groupKey)}
                >
                  {g.ageGroup} — {g.gender}
                  {g.tiedCount > 0 && " ⚠"}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Print sheets — one per group */}
      {!loading &&
        !error &&
        hasGroups &&
        visibleGroups.map((group) => (
          <GroupPrintSheet
            key={group.groupKey}
            group={group}
            yearSuffix={yearSuffix}
            isSelected={selectedGroup === group.groupKey}
            onSelect={setSelected}
          />
        ))}

      {/* Legacy flat format */}
      {!loading &&
        !error &&
        !hasGroups &&
        leaderboard?.leaderboard?.length > 0 && (
          <div className="js-table-wrap">
            <table className="js-table">
              <thead>
                <tr>
                  <th className="col-tno">T. NO.</th>
                  <th className="col-gender">Gender</th>
                  <th className="col-name">Competitor's Name</th>
                  <th className="col-dob">D.O.B.</th>
                  <th className="col-pos">Position</th>
                  <th className="col-centre">Centre Name</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.leaderboard.map((p) => (
                  <tr
                    key={p.serialNo}
                    className={p.rank === 1 ? "js-live-row--gold" : ""}
                  >
                    <td className="col-tno js-live-cell">
                      <span className="js-score-pill">{p.tagNo}</span>
                    </td>
                    <td
                      className="col-gender js-live-cell"
                      style={{ textAlign: "center" }}
                    >
                      <GenderBadge gender={p.gender} />
                    </td>
                    <td className="col-name js-live-cell">{p.name}</td>
                    <td className="col-dob js-live-cell">
                      <input
                        className="js-cell"
                        style={{ textAlign: "center" }}
                      />
                    </td>
                    <td className={`col-pos js-live-cell ${posClass(p.rank)}`}>
                      {ordinal(p.rank)}
                    </td>
                    <td className="col-centre js-live-cell">
                      <input className="js-cell" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      {!loading && !error && !leaderboard && (
        <div className="js-state">No results available yet.</div>
      )}
    </>
  );
}

// ─── Manual Result Tab ────────────────────────────────────────────────────────

function ManualResultTab({ yearSuffix, onYearChange }) {
  const makeRow = (id) => ({ id });
  const [rows, setRows] = useState(() =>
    Array.from({ length: 30 }, (_, i) => makeRow(i + 1)),
  );
  const [dateVal, setDateVal] = useState("");
  const [placeVal, setPlaceVal] = useState("");
  const [groupVal, setGroupVal] = useState("");

  const addRows = (n) =>
    setRows((prev) => [
      ...prev,
      ...Array.from({ length: n }, (_, i) => makeRow(prev.length + i + 1)),
    ]);

  const handlePrint = () => {
    const el = document.getElementById("manual-print-sheet");
    if (!el) return;
    el.classList.add("print-target");
    const cleanup = () => {
      el.classList.remove("print-target");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  };

  return (
    <div className="js-print-sheet" id="manual-print-sheet">
      {/* Screen-only action bar */}
      <div className="js-print-sheet-header no-print">
        <span className="js-print-sheet-label">Manual Entry Sheet</span>
        <button
          className="js-add-btn"
          onClick={handlePrint}
          style={{
            fontSize: "0.72rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          🖨 Print
        </button>
      </div>

      {/* Full letterhead */}
      <PrintLetterhead
        yearSuffix={yearSuffix}
        ageGroup=""
        gender=""
        dateVal={dateVal}
        placeVal={placeVal}
        groupVal={groupVal}
        onDateChange={setDateVal}
        onPlaceChange={setPlaceVal}
        onGroupChange={setGroupVal}
      />

      <div className="js-table-wrap">
        <table className="js-table">
          <thead>
            <tr>
              <th className="col-tno">T. NO.</th>
              <th className="col-gender">Gender</th>
              <th className="col-name">Competitor's Name</th>
              <th className="col-dob">D.O.B.</th>
              <th className="col-pos">Position</th>
              <th className="col-centre">Centre Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.id}>
                <td className="col-tno">
                  <input className="js-cell" style={{ textAlign: "center" }} />
                </td>
                <td className="col-gender">
                  <input
                    className="js-cell"
                    style={{ textAlign: "center" }}
                    placeholder="M/F"
                  />
                </td>
                <td className="col-name">
                  <input className="js-cell" />
                </td>
                <td className="col-dob">
                  <input className="js-cell" style={{ textAlign: "center" }} />
                </td>
                <td className={`col-pos ${posClass(idx + 1)}`}>
                  {ordinal(idx + 1)}
                </td>
                <td className="col-centre">
                  <input className="js-cell" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="js-add-bar no-print">
        <span className="js-add-label">{rows.length} rows</span>
        <button className="js-add-btn" onClick={() => addRows(1)}>
          + 1 Row
        </button>
        <button className="js-add-btn" onClick={() => addRows(5)}>
          + 5 Rows
        </button>
        <button className="js-add-btn" onClick={() => addRows(10)}>
          + 10 Rows
        </button>
      </div>

      <div className="prt-footer">
        <div className="prt-sig-block">
          <div className="prt-sig-line" />
          <div className="prt-sig-label">Signature &amp; Date</div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function ResultSheet() {
  const [mode, setMode] = useState("live");
  const [yearSuffix, setYearSuffix] = useState("");

  return (
    <div className="js-shell">
      <style>{css}</style>

      {/* Top bar */}
      <div className="js-topbar no-print">
        <div className="js-topbar-left">
          <div className="js-section-label">BYWA Documents</div>
          <h1 className="js-page-title">Result Sheet</h1>
        </div>
        <div className="js-topbar-actions">
          {/* Year input in topbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              marginRight: "0.25rem",
            }}
          >
            <span style={{ fontSize: "0.7rem", color: "var(--ink-3)" }}>
              Year:
            </span>
            <input
              value={yearSuffix}
              onChange={(e) => setYearSuffix(e.target.value)}
              placeholder="20__"
              style={{
                width: 52,
                fontSize: "0.8rem",
                border: "none",
                borderBottom: "1.5px solid var(--paper-3)",
                background: "transparent",
                outline: "none",
                fontFamily: "var(--mono)",
                padding: "0.15rem 0.2rem",
              }}
            />
          </div>
          <button
            className={`js-chip ${mode === "live" ? "js-chip--active" : ""}`}
            onClick={() => setMode("live")}
          >
            ⚡ Live
          </button>
          <button
            className={`js-chip ${mode === "manual" ? "js-chip--active" : ""}`}
            onClick={() => setMode("manual")}
          >
            ✏ Manual
          </button>
        </div>
      </div>

      {/* Document body */}
      <div className="js-doc">
        {mode === "live" ? (
          <LiveResultTab yearSuffix={yearSuffix} onYearChange={setYearSuffix} />
        ) : (
          <ManualResultTab
            yearSuffix={yearSuffix}
            onYearChange={setYearSuffix}
          />
        )}
      </div>
    </div>
  );
}