//Participantentry.jsx
import React, { useState, useRef, useCallback, useEffect } from "react";
import { saveFormState, loadFormState } from "../../utils/apiClient";

const logoUrl = `${import.meta.env.BASE_URL}logo/logo.jpeg`;

/* ─── helpers ───────────────────────────────────────────────────────────── */
const GENDER_OPTIONS = ["Male", "Female"];

function toDateOnly(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function dateYearsAgo(years) {
  const d = new Date();
  d.setFullYear(d.getFullYear() - years);
  return toDateOnly(d);
}

function getAgeGroupFromDob(dobStr) {
  if (!dobStr) return "Unknown";

  const dob = toDateOnly(new Date(dobStr));

  const cutoff7 = dateYearsAgo(7);
  const cutoff9 = dateYearsAgo(9);
  const cutoff12 = dateYearsAgo(12);
  const cutoff16 = dateYearsAgo(16);
  const cutoff25 = dateYearsAgo(25);

  // Exact 7 years old => 0-7
  if (dob >= cutoff7) return "0-7";

  // 7 years 1 day old up to exact 9 years old => 7-9
  if (dob >= cutoff9) return "7-9";

  // 9 years 1 day old up to exact 12 years old => 9-12
  if (dob >= cutoff12) return "9-12";

  if (dob >= cutoff16) return "12-16";
  if (dob >= cutoff25) return "16-25";

  return "25+";
}

/* ─── Print handler ────────────────────────────────────────────────── */
const handlePrint = (groupKey) => {
  const el = document.getElementById(`group-${groupKey}`);
  if (!el) return;
  el.classList.add("print-target");
  const cleanup = () => {
    el.classList.remove("print-target");
    window.removeEventListener("afterprint", cleanup);
  };
  window.addEventListener("afterprint", cleanup);
  window.print();
};

/* ─── Print styles (injected once) ──────────────────────────────────────── */
const printStyles = `
@media print {
  body * { visibility: hidden; }
  .print-target, .print-target * { visibility: visible; }
  .print-target { position: absolute; top: 0; left: 0; width: 100%; }
  .no-print { display: none !important; }
  .print-header { display: block !important; visibility: visible; }
}
.print-header{
    display:none;
}


.print-header-inner{
    display:flex;

    align-items:center;

    justify-content:center;

    gap:18px;

    margin-bottom:25px;
}


.print-logo{

    width:80px;

    height:80px;

    object-fit:contain;

    flex-shrink:0;

}


.print-header h2{

    margin:0;

    font-size:28px;

    font-weight:700;

    color:#c8440a;

}


.print-header p{

    margin:3px 0;

    font-size:14px;

}
`;

function ageFromDob(dobStr) {
  if (!dobStr) return null;
  const dob = new Date(dobStr);
  const today = new Date();
  if (isNaN(dob.getTime())) return null;
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate()))
    age--;
  return age;
}

function today() {
  return new Date().toISOString().split("T")[0];
}

function yearsAgo(n) {
  const d = new Date();
  d.setFullYear(d.getFullYear() - n);
  return d.toISOString().split("T")[0];
}

/* ─── field config ──────────────────────────────────────────────────────── */
const COLS = [
  {
    key: "name",
    label: "Full Name",
    placeholder: "e.g. Ananya Roy",
    type: "text",
  },
  {
    key: "dateOfBirth",
    label: "Date of Birth",
    placeholder: "yyyy-MM-dd",
    type: "date",
  },
  {
    key: "gender",
    label: "Gender",
    placeholder: "Male / Female",
    type: "select",
  },
  {
    key: "club",
    label: "Club / Association",
    placeholder: "e.g. Howrah Yoga Club",
    type: "text",
  },
];

const EMPTY_ROW = () => ({
  _id: Math.random(),
  name: "",
  dateOfBirth: "",
  gender: "",
  club: "",
});
const INIT_ROWS = () => Array.from({ length: 5 }, EMPTY_ROW);
const EMPTY_FORM = { name: "", dateOfBirth: "", gender: "", club: "" };

function rowIsEmpty(r) {
  return !r.name && !r.dateOfBirth && !r.gender && !r.club;
}

function validateRow(r, batchNames) {
  const errs = [];
  if (!r.name.trim()) errs.push("Name required");
  else if (batchNames.has(r.name.trim().toLowerCase()))
    errs.push("Duplicate name in batch");
  if (!r.dateOfBirth) {
    errs.push("Date of birth required");
  } else {
    const age = ageFromDob(r.dateOfBirth);
    if (age === null) errs.push("Invalid date of birth");
    else if (age < 0) errs.push("Must be at least 5 years old");
    else if (age > 100) errs.push("Must be 80 years old or younger");
  }
  if (!r.gender || !GENDER_OPTIONS.includes(r.gender))
    errs.push("Gender required (Male/Female)");
  return errs;
}

/* ─── CSS ───────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1714; --ink-2: #4a4540; --ink-3: #8a8480;
    --paper: #f9f6f0; --paper-2: #f0ece4; --paper-3: #e6e0d6;
    --accent: #c8440a; --green: #2d7a4f; --green-soft: #e8f5ee;
    --red: #c0392b; --red-soft: #fdecea;
    --gold: #d4a017; --gold-soft: #faf3e0;
    --blue: #1a6fa8; --blue-soft: #e8f2fb;
    --shadow: 0 1px 3px rgba(26,23,20,0.08), 0 4px 12px rgba(26,23,20,0.06);
    --radius: 10px; --mono: 'DM Mono', monospace; --serif: 'Fraunces', Georgia, serif;
  }

  .pe { font-family: var(--mono); background: var(--paper); min-height: 100vh; padding: 2rem 1.5rem; color: var(--ink); }

  /* ── Header ── */
  .pe__header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 1.75rem; gap: 1rem; flex-wrap: wrap; }
  .pe__label  { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .pe__title  { font-family: var(--serif); font-size: 1.9rem; font-weight: 600; color: var(--ink); letter-spacing: -0.02em; }

  /* ── Stats bar ── */
  .pe__stats { display: flex; gap: 0.85rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .pe__stat  { flex: 1; min-width: 110px; background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); padding: 0.85rem 1.1rem; }
  .pe__stat-lbl { font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 0.3rem; }
  .pe__stat-val { font-size: 1.5rem; font-weight: 700; color: var(--ink); }
  .pe__stat-val--accent { color: var(--accent); }
  .pe__stat-val--green  { color: var(--green);  }
  .pe__stat-val--blue   { color: var(--blue);   }

  /* ── Card ── */
  .a-card { background: #fff; border: 1px solid var(--paper-3); border-radius: var(--radius); box-shadow: var(--shadow); }

  /* ── Tabs ── */
  .pe__card-header { display: flex; align-items: flex-start; justify-content: space-between; padding: 1.25rem 1.5rem 0; gap: 1rem; flex-wrap: wrap; }
  .pe__card-title  { font-family: var(--serif); font-size: 1.1rem; font-weight: 600; }
  .pe__card-sub    { font-size: 0.75rem; color: var(--ink-3); margin-top: 0.2rem; }
  .pe__tabs { display: flex; border-bottom: 1.5px solid var(--paper-3); padding: 0 1.5rem; margin-top: 1rem; }
  .pe__tab  { font-family: var(--mono); font-size: 0.78rem; padding: 0.5rem 1rem; border: none; background: none;
              cursor: pointer; color: var(--ink-3); border-bottom: 2px solid transparent;
              margin-bottom: -1.5px; transition: all 0.15s; }
  .pe__tab:hover { color: var(--ink-2); }
  .pe__tab--active { color: var(--accent); border-bottom-color: var(--accent); font-weight: 500; }

  .pe__body { padding: 1.25rem 1.5rem; }

  /* ── Single form ── */
  .pe__form-grid { display: grid; grid-template-columns: 2fr 1.5fr 1fr 2fr; gap: 1rem; margin-bottom: 1rem; }
  @media (max-width: 768px) { .pe__form-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 480px) { .pe__form-grid { grid-template-columns: 1fr; } }
  .pe__form-label { display: block; font-size: 0.72rem; color: var(--ink-2); margin-bottom: 0.4rem; letter-spacing: 0.04em; }
  .pe__required   { color: var(--accent); }
  .pe__input-wrap { position: relative; }
  .pe__input-icon { position: absolute; left: 0.65rem; top: 50%; transform: translateY(-50%); color: var(--ink-3); pointer-events: none; display: flex; }
  .a-input { width: 100%; font-family: var(--mono); font-size: 0.82rem; padding: 0.55rem 0.75rem;
             background: var(--paper); border: 1.5px solid var(--paper-3); border-radius: 7px;
             color: var(--ink); transition: border-color 0.15s; }
  .a-input:focus { outline: none; border-color: var(--accent); background: #fff; }
  .a-input--icon { padding-left: 2.1rem; }
  input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.5; cursor: pointer; }
  .a-select { width: 100%; font-family: var(--mono); font-size: 0.82rem; padding: 0.55rem 0.75rem;
              background: var(--paper); border: 1.5px solid var(--paper-3); border-radius: 7px;
              color: var(--ink); transition: border-color 0.15s; appearance: none;
              background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238a8480' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              background-repeat: no-repeat; background-position: right 0.75rem center; cursor: pointer; }
  .a-select:focus { outline: none; border-color: var(--accent); background-color: #fff; }

  /* ── Age preview pill ── */
  .pe__age-pill { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.4rem;
                  font-size: 0.7rem; color: var(--ink-3); }
  .pe__age-pill strong { color: var(--ink-2); }
  .pe__age-pill--warn  { color: var(--red); }

  .pe__form-notice { display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--ink-3);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--paper-2);
                     border-radius: 6px; border: 1px solid var(--paper-3); }
  .pe__form-error  { display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--red);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--red-soft);
                     border-radius: 6px; border: 1px solid #f5c6c2; }
  .pe__form-success{ display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; color: var(--green);
                     margin-bottom: 1rem; padding: 0.6rem 0.85rem; background: var(--green-soft);
                     border-radius: 6px; border: 1px solid #b2dfc5; }
  .pe__form-actions{ display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; }

  /* ── Restored banner ── */
  .pe__restored-banner {
    display: flex; align-items: center; gap: 0.5rem;
    margin-bottom: 1rem; padding: 0.65rem 1rem;
    background: var(--gold-soft); border: 1px solid #e8d07a;
    border-radius: 7px; font-size: 0.75rem; color: #7a5c00;
  }
  .pe__restored-banner button {
    margin-left: auto; background: none; border: none; cursor: pointer;
    color: #7a5c00; font-size: 0.75rem; font-family: var(--mono);
    padding: 0; opacity: 0.7;
  }
  .pe__restored-banner button:hover { opacity: 1; }

  /* ── Bulk hint ── */
  .pe__bulk-hint {
    display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;
    margin-bottom: 0.85rem; font-size: 0.72rem; color: var(--ink-3);
    padding: 0.5rem 0.75rem; background: var(--paper-2);
    border: 1px solid var(--paper-3); border-radius: 6px;
  }
  .pe__bulk-hint kbd {
    display: inline-flex; align-items: center; background: #fff;
    border: 1px solid var(--paper-3); border-bottom-width: 2px; border-radius: 4px;
    font-family: var(--mono); font-size: 0.65rem; padding: 0.05rem 0.4rem; color: var(--ink-2);
  }

  /* ── Grid ── */
  .pe__grid-wrap { border: 1.5px solid var(--paper-3); border-radius: 8px; overflow: hidden; overflow-x: auto; }
  .pe__grid { width: 100%; border-collapse: collapse; }
  .pe__grid thead tr { background: var(--paper-2); }
  .pe__grid th {
    padding: 0.55rem 0.7rem; text-align: left; font-size: 0.65rem;
    letter-spacing: 0.09em; text-transform: uppercase; color: var(--ink-3);
    font-weight: 500; border-bottom: 1.5px solid var(--paper-3); white-space: nowrap; user-select: none;
  }
  .pe__grid th.col-rownum { width: 36px; text-align: center; }
  .pe__grid th.col-status { width: 40px; text-align: center; }
  .pe__grid th.col-del    { width: 36px; }
  .pe__grid th.col-gender { width: 110px; }
  .pe__grid th.col-dob    { width: 150px; }
  .pe__grid tbody tr { border-bottom: 1px solid var(--paper-2); transition: background 0.08s; }
  .pe__grid tbody tr:last-child { border-bottom: none; }
  .pe__grid tbody tr:hover  { background: var(--paper) !important; }
  .pe__grid tbody tr.row--ok    { background: #f1fbf5; }
  .pe__grid tbody tr.row--err   { background: #fef6f5; }
  .pe__grid tbody tr.row--empty { background: #fff; }
  .pe__grid td { padding: 0; vertical-align: middle; }
  .pe__grid td.col-rownum { text-align: center; color: var(--ink-3); font-size: 0.68rem; padding: 0 0.5rem; border-right: 1px solid var(--paper-2); }
  .pe__grid td.col-status { text-align: center; padding: 0 0.4rem; }
  .pe__grid td.col-del    { padding: 0 0.3rem; }
  .pe__grid td:not(.col-rownum):not(.col-status):not(.col-del) { border-right: 1px solid var(--paper-2); }
  .pe__grid-cell {
    display: block; width: 100%; font-family: var(--mono); font-size: 0.8rem;
    padding: 0.52rem 0.65rem; background: transparent; border: none; color: var(--ink);
    outline: none; transition: background 0.1s, box-shadow 0.1s; min-width: 80px;
  }
  .pe__grid td.col-dob .pe__grid-cell    { min-width: 130px; }
  .pe__grid td.col-gender .pe__grid-cell { min-width: 90px; }
  .pe__grid-cell::placeholder { color: var(--paper-3); }
  .pe__grid-cell:focus { background: #fff; box-shadow: inset 0 0 0 2px var(--accent); position: relative; z-index: 2; border-radius: 2px; }
  .pe__grid-cell--err:not(:focus) { background: #fff3f2; }
  .pe__grid-select {
    display: block; width: 100%; font-family: var(--mono); font-size: 0.8rem;
    padding: 0.52rem 0.65rem; background: transparent; border: none; color: var(--ink);
    outline: none; cursor: pointer; appearance: none; min-width: 90px;
  }
  .pe__grid-select:focus { background: #fff; box-shadow: inset 0 0 0 2px var(--accent); }
  .pe__grid-select--err:not(:focus) { background: #fff3f2; }

  /* ── Row status dot + tooltip ── */
  .pe__row-status-wrap { position: relative; display: inline-flex; }
  .pe__row-dot { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; font-size: 0.62rem; font-weight: 700; cursor: default; }
  .pe__row-dot--ok    { background: var(--green); color: #fff; }
  .pe__row-dot--err   { background: var(--red);   color: #fff; }
  .pe__row-dot--empty { background: var(--paper-3); color: var(--ink-3); font-size: 0.8rem; }
  .pe__err-tip { display: none; position: absolute; right: 26px; top: 50%; transform: translateY(-50%);
    background: #2a1f1a; color: #fff; font-size: 0.68rem; border-radius: 5px;
    padding: 0.4rem 0.65rem; white-space: nowrap; z-index: 20; line-height: 1.6;
    pointer-events: none; min-width: 180px; }
  .pe__row-status-wrap:hover .pe__err-tip { display: block; }

  /* ── Grid footer ── */
  .pe__grid-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 0.85rem; flex-wrap: wrap; gap: 0.6rem; }
  .pe__grid-footer-left { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
  .pe__grid-stats { font-size: 0.72rem; color: var(--ink-3); }
  .pe__grid-stats .ok-count  { color: var(--green); font-weight: 500; }
  .pe__grid-stats .err-count { color: var(--red); }

  /* ── Alert banners ── */
  .pe__banner { margin-top: 0.85rem; padding: 0.65rem 1rem; border-radius: 7px; font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; }
  .pe__banner--success { background: var(--green-soft); border: 1px solid #b2dfc5; color: var(--green); }
  .pe__banner--error   { background: var(--red-soft);   border: 1px solid #f5c6c2; color: var(--red);   }

  /* ── Spinner ── */
  .pe__spinner { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff; border-radius: 50%; animation: spin 0.6s linear infinite; flex-shrink: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Registered list ── */
  .pe__list-wrap { margin-top: 1.5rem; }
  .pe__list-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; gap: 1rem; }
  .pe__list-title  { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); }
  .pe__list { border: 1px solid var(--paper-3); border-radius: 8px; overflow: hidden; }
  .pe__list-table  { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
  .pe__list-table thead tr { background: var(--paper-2); }
  .pe__list-table th { padding: 0.5rem 0.85rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .pe__list-table td { padding: 0.55rem 0.85rem; border-bottom: 1px solid var(--paper-2); }
  .pe__list-table tbody tr:last-child td { border-bottom: none; }
  .pe__list-table tbody tr:hover { background: var(--paper); }
  .pe__tag-chip { display: inline-flex; align-items: center; justify-content: center; min-width: 32px; padding: 0.1rem 0.4rem; background: var(--gold-soft); border: 1px solid #e8d07a; border-radius: 4px; font-size: 0.72rem; font-weight: 600; color: #7a5c00; }
  .pe__gender-badge { display: inline-flex; align-items: center; padding: 0.1rem 0.45rem; border-radius: 4px; font-size: 0.68rem; font-weight: 500; }
  .pe__gender-badge--male   { background: var(--blue-soft);  color: var(--blue);  border: 1px solid #b3d4ef; }
  .pe__gender-badge--female { background: #fce8f3;           color: #a3186e;      border: 1px solid #f0b3d9; }
  .pe__list-empty { padding: 2rem; text-align: center; color: var(--ink-3); font-size: 0.8rem; }

  /* ── Grouped list sections ── */
  .pe__group-section { margin-bottom: 1.5rem; }
  .pe__group-header { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 8px 8px 0 0; margin-bottom: -1px; }
  .pe__group-header--male   { background: var(--blue-soft);  border: 1px solid #b3d4ef; }
  .pe__group-header--female { background: #fce8f3;           border: 1px solid #f0b3d9; }
  .pe__group-title { font-family: var(--serif); font-size: 0.95rem; font-weight: 600; }
  .pe__group-header--male .pe__group-title   { color: var(--blue);  }
  .pe__group-header--female .pe__group-title { color: #a3186e; }
  .pe__group-table-wrap { border: 1px solid var(--paper-3); border-radius: 0 8px 8px 8px; overflow: hidden; }
  .pe__group-table { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
  .pe__group-table thead tr { background: var(--paper-2); }
  .pe__group-table th { padding: 0.45rem 0.75rem; text-align: left; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--paper-3); }
  .pe__group-table td { padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--paper-2); }
  .pe__group-table tbody tr:last-child td { border-bottom: none; }
  .pe__group-table tbody tr:hover { background: var(--paper); }

  /* ── Buttons ── */
  .a-btn { font-family: var(--mono); font-size: 0.8rem; font-weight: 500; border-radius: 7px; border: none; cursor: pointer; padding: 0.55rem 1rem; transition: all 0.15s; display: inline-flex; align-items: center; gap: 0.4rem; }
  .a-btn:disabled { opacity: 0.45; cursor: not-allowed; }
  .a-btn-primary { background: var(--accent); color: #fff; }
  .a-btn-primary:hover:not(:disabled) { background: #a83608; transform: translateY(-1px); }
  .a-btn-ghost   { background: var(--paper-2); color: var(--ink-2); border: 1px solid var(--paper-3); }
  .a-btn-ghost:hover:not(:disabled)   { background: var(--paper-3); }
  .a-btn-green   { background: var(--green); color: #fff; }
  .a-btn-green:hover:not(:disabled)   { background: #215c3c; transform: translateY(-1px); }
  .a-btn-danger  { background: var(--red-soft); color: var(--red); border: none; font-size: 0.72rem; padding: 0.3rem 0.5rem; }
  .a-btn-danger:hover:not(:disabled)  { background: #fbd5d1; }
  .a-btn-sm { padding: 0.35rem 0.65rem; font-size: 0.72rem; }

  /* ── Print button ── */
  .pe__print-btn { font-family: var(--mono); font-size: 0.7rem; padding: 0.25rem 0.5rem; background: #fff; border: 1px solid var(--paper-3); border-radius: 5px; cursor: pointer; color: var(--ink-2); }
  .pe__print-btn:hover { background: var(--paper-2); }
`;

/* ─── API helper ────────────────────────────────────────────────────────── */
async function postParticipants(payload) {
  const res = await fetch("/api/Participants/Entry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Server ${res.status}: ${text.slice(0, 120)}`);
  }
  return res.json();
}

/* ─── Age pill shown under the DOB field ───────────────────────────────── */
function AgePill({ dobStr }) {
  if (!dobStr) return null;
  const age = ageFromDob(dobStr);
  if (age === null)
    return <div className="pe__age-pill pe__age-pill--warn">Invalid date</div>;
  if (age < 5 || age > 80)
    return (
      <div className="pe__age-pill pe__age-pill--warn">
        Age {age} — out of range (5–80)
      </div>
    );
  return (
    <div className="pe__age-pill">
      Age: <strong>{age}</strong>
    </div>
  );
}

/* ─── Gender badge ──────────────────────────────────────────────────────── */
function GenderBadge({ gender }) {
  if (!gender) return null;
  const cls =
    gender === "Male" ? "pe__gender-badge--male" : "pe__gender-badge--female";
  return <span className={`pe__gender-badge ${cls}`}>{gender}</span>;
}

/* ─── Form state persistence key ────────────────────────────────────────── */
const FORM_STATE_KEY = "participant_entry";

/* ─── Main component ────────────────────────────────────────────────────── */
export default function ParticipantEntry() {
  const [activeTab, setActiveTab] = useState("single");
  const [form, setForm] = useState(EMPTY_FORM);
  const [formErr, setFormErr] = useState("");
  const [formOk, setFormOk] = useState("");
  const [formBusy, setFormBusy] = useState(false);
  const [bulkRows, setBulkRows] = useState(INIT_ROWS);
  const [bulkBanner, setBulkBanner] = useState(null);
  const [bulkBusy, setBulkBusy] = useState(false);
  const [registered, setRegistered] = useState([]);
  const [restored, setRestored] = useState(false);
  const [showRestored, setShowRestored] = useState(false);

  const gridRef = useRef(null);

  /* ── Load existing participants on mount ── */
  useEffect(() => {
    fetch("/api/Participants/List", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => setRegistered(data))
      .catch(() => { });
  }, []);

  /* ── Restore form state after session re-login ── */
  useEffect(() => {
    if (!restored) {
      const saved = loadFormState(FORM_STATE_KEY);
      if (saved) {
        const hasFormData =
          saved.form && Object.values(saved.form).some((v) => v);
        const hasBulkData =
          saved.bulkRows && saved.bulkRows.some((r) => !rowIsEmpty(r));
        if (hasFormData) setForm(saved.form);
        if (hasBulkData) setBulkRows(saved.bulkRows);
        if (hasFormData || hasBulkData) setShowRestored(true);
      }
      setRestored(true);
    }
  }, [restored]);

  /* ── Persist form state on every change ── */
  const setField = (k, v) => {
    const newForm = { ...form, [k]: v };
    setForm(newForm);
    setFormErr("");
    setFormOk("");
    saveFormState(FORM_STATE_KEY, { form: newForm, bulkRows });
  };

  /* ── Single submit ── */
  const handleSingleSubmit = async () => {
    if (!form.name.trim()) {
      setFormErr("Full name is required.");
      return;
    }
    if (!form.dateOfBirth) {
      setFormErr("Date of birth is required.");
      return;
    }
    const age = ageFromDob(form.dateOfBirth);
    if (age === null) {
      setFormErr("Invalid date of birth.");
      return;
    }
    if (age < 5 || age > 80) {
      setFormErr(`Age must be between 5 and 80 (calculated age: ${age}).`);
      return;
    }
    if (!form.gender || !GENDER_OPTIONS.includes(form.gender)) {
      setFormErr("Gender is required.");
      return;
    }

    setFormBusy(true);
    setFormErr("");
    setFormOk("");
    try {
      const result = await postParticipants([
        {
          name: form.name.trim(),
          dateOfBirth: form.dateOfBirth,
          gender: form.gender,
          club: form.club.trim() || "Individual",
        },
      ]);
      setRegistered((prev) => [...prev, ...result]);
      const p = result[0];
      setFormOk(
        `✓ ${p.name} (${p.gender}, age ${p.age}) registered as Tag No. ${p.tagNo}`,
      );
      setForm(EMPTY_FORM);
      saveFormState(FORM_STATE_KEY, { form: EMPTY_FORM, bulkRows });
    } catch (e) {
      setFormErr(e.message);
    } finally {
      setFormBusy(false);
    }
  };

  /* ── Bulk grid state ── */
  const updateCell = (rowIdx, key, val) => {
    setBulkRows((rows) => {
      const newRows = rows.map((r, i) =>
        i === rowIdx ? { ...r, [key]: val } : r,
      );
      saveFormState(FORM_STATE_KEY, { form, bulkRows: newRows });
      return newRows;
    });
    setBulkBanner(null);
  };

  const addRow = useCallback(
    () => setBulkRows((rows) => [...rows, EMPTY_ROW()]),
    [],
  );
  const removeRow = (idx) =>
    setBulkRows((rows) =>
      rows.length > 1 ? rows.filter((_, i) => i !== idx) : [EMPTY_ROW()],
    );
  const clearGrid = () => {
    setBulkRows(INIT_ROWS());
    setBulkBanner(null);
    saveFormState(FORM_STATE_KEY, { form, bulkRows: INIT_ROWS() });
  };

  const focusCell = (row, col) => {
    const el = gridRef.current?.querySelector(
      `[data-row="${row}"][data-col="${col}"]`,
    );
    el?.focus();
  };

  const handleKeyDown = useCallback(
    (e, rowIdx, colIdx) => {
      if (e.key === "Enter" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = rowIdx + 1;
        if (next >= bulkRows.length) {
          addRow();
          setTimeout(() => focusCell(next, colIdx), 40);
        } else focusCell(next, colIdx);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        focusCell(Math.max(0, rowIdx - 1), colIdx);
      }
    },
    [bulkRows.length, addRow],
  );

  /* ── Validate rows ── */
  const validatedRows = (() => {
    const batchNames = new Set();
    return bulkRows.map((row) => {
      if (rowIsEmpty(row)) return { ...row, _status: "empty", _errors: [] };
      const errs = validateRow(row, batchNames);
      if (!errs.length) batchNames.add(row.name.trim().toLowerCase());
      return { ...row, _status: errs.length ? "err" : "ok", _errors: errs };
    });
  })();

  const validCount = validatedRows.filter((r) => r._status === "ok").length;
  const errCount = validatedRows.filter((r) => r._status === "err").length;

  /* ── Bulk submit ── */
  const handleBulkSubmit = async () => {
    const toSend = validatedRows
      .filter((r) => r._status === "ok")
      .map((r) => ({
        name: r.name.trim(),
        dateOfBirth: r.dateOfBirth,
        gender: r.gender,
        club: r.club.trim() || "Individual",
      }));
    if (!toSend.length) return;
    setBulkBusy(true);
    setBulkBanner(null);
    try {
      const result = await postParticipants(toSend);
      setRegistered((prev) => [...prev, ...result]);
      setBulkBanner({
        type: "success",
        text: `✓ ${result.length} participant${result.length !== 1 ? "s" : ""} registered successfully.`,
      });
      setBulkRows(INIT_ROWS());
      saveFormState(FORM_STATE_KEY, { form, bulkRows: INIT_ROWS() });
    } catch (e) {
      setBulkBanner({ type: "error", text: e.message });
    } finally {
      setBulkBusy(false);
    }
  };

  /* ── Grouped participant list ── */
  const buildGroups = () => {
    const groupMap = {};
    [...registered].forEach((r) => {
      const age = r.age ?? ageFromDob(r.dateOfBirth);
      const ageGroup = getAgeGroupFromDob(r.dateOfBirth);
      const groupKey = `${ageGroup}_${r.gender}`;
      if (!groupMap[groupKey]) {
        groupMap[groupKey] = {
          groupKey,
          ageGroup,
          gender: r.gender,
          participants: [],
        };
      }
      groupMap[groupKey].participants.push(r);
    });

    // Sort within each group by tagNo ascending
    Object.values(groupMap).forEach((g) => {
      g.participants.sort((a, b) => a.tagNo - b.tagNo);
    });

    // Sort groups: by ageGroup order then Male before Female
    const ageOrder = ["0-7", "7-9", "9-12", "12-16", "16-25", "25+"];
    return Object.values(groupMap).sort((a, b) => {
      const aIdx = ageOrder.indexOf(a.ageGroup);
      const bIdx = ageOrder.indexOf(b.ageGroup);
      if (aIdx !== bIdx) return aIdx - bIdx;
      return a.gender === "Male" ? -1 : 1;
    });
  };

  const maleCount = registered.filter((r) => r.gender === "Male").length;
  const femaleCount = registered.filter((r) => r.gender === "Female").length;

  return (
    <>
      <style>{css}</style>
      <style>{printStyles}</style>
      <div className="pe">
        <div className="pe__header">
          <div>
            <div className="pe__label">Bengal Yoga Welfare Association</div>
            <h1 className="pe__title">Participant Registration</h1>
          </div>
        </div>

        <div className="pe__stats">
          <div className="pe__stat">
            <div className="pe__stat-lbl">Total</div>
            <div className="pe__stat-val pe__stat-val--accent">
              {registered.length}
            </div>
          </div>
          <div className="pe__stat">
            <div className="pe__stat-lbl">Male</div>
            <div className="pe__stat-val pe__stat-val--blue">{maleCount}</div>
          </div>
          <div className="pe__stat">
            <div className="pe__stat-lbl">Female</div>
            <div className="pe__stat-val pe__stat-val--green">
              {femaleCount}
            </div>
          </div>
        </div>

        <div className="a-card">
          <div className="pe__card-header">
            <div>
              <div className="pe__card-title">Register Participants</div>
              <div className="pe__card-sub">
                Use Single for one entry · Bulk for 50–100 entries at once
              </div>
            </div>
          </div>

          <div className="pe__tabs">
            <button
              className={`pe__tab${activeTab === "single" ? " pe__tab--active" : ""}`}
              onClick={() => setActiveTab("single")}
            >
              Single Entry
            </button>
            <button
              className={`pe__tab${activeTab === "bulk" ? " pe__tab--active" : ""}`}
              onClick={() => setActiveTab("bulk")}
            >
              Bulk Entry
            </button>
          </div>

          <div className="pe__body">
            {/* ── Restored data banner ── */}
            {showRestored && (
              <div className="pe__restored-banner">
                ⚠ Your previous unsaved form data has been restored after
                session re-login.
                <button onClick={() => setShowRestored(false)}>
                  Dismiss ✕
                </button>
              </div>
            )}

            {activeTab === "single" && (
              <>
                <div className="pe__form-grid">
                  {/* Name */}
                  <div>
                    <label className="pe__form-label">
                      Full Name <span className="pe__required">*</span>
                    </label>
                    <input
                      className="a-input"
                      type="text"
                      placeholder="e.g. Ananya Roy"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                    />
                  </div>
                  {/* DOB */}
                  <div>
                    <label className="pe__form-label">
                      Date of Birth <span className="pe__required">*</span>
                    </label>
                    <input
                      className="a-input"
                      type="date"
                      value={form.dateOfBirth}
                      max={yearsAgo(5)}
                      min={yearsAgo(80)}
                      onChange={(e) => setField("dateOfBirth", e.target.value)}
                    />
                    <AgePill dobStr={form.dateOfBirth} />
                  </div>
                  {/* Gender */}
                  <div>
                    <label className="pe__form-label">
                      Gender <span className="pe__required">*</span>
                    </label>
                    <select
                      className="a-select"
                      value={form.gender}
                      onChange={(e) => setField("gender", e.target.value)}
                    >
                      <option value="">—</option>
                      {GENDER_OPTIONS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Club */}
                  <div>
                    <label className="pe__form-label">Club / Association</label>
                    <input
                      className="a-input"
                      type="text"
                      placeholder="e.g. Howrah Yoga Club"
                      value={form.club}
                      onChange={(e) => setField("club", e.target.value)}
                    />
                  </div>
                </div>

                {formErr && <div className="pe__form-error">⚠ {formErr}</div>}
                {formOk && <div className="pe__form-success">{formOk}</div>}

                <div className="pe__form-actions">
                  <button
                    className="a-btn a-btn-ghost"
                    onClick={() => {
                      setForm(EMPTY_FORM);
                      setFormErr("");
                      setFormOk("");
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className="a-btn a-btn-primary"
                    onClick={handleSingleSubmit}
                    disabled={formBusy}
                  >
                    {formBusy ? (
                      <>
                        <div className="pe__spinner" /> Registering…
                      </>
                    ) : (
                      "+ Register"
                    )}
                  </button>
                </div>
              </>
            )}

            {activeTab === "bulk" && (
              <>
                <div className="pe__bulk-hint">
                  <kbd>Enter</kbd> or <kbd>↓</kbd> to move down · <kbd>↑</kbd>{" "}
                  to move up · New row added automatically at the bottom
                </div>

                <div className="pe__grid-wrap" ref={gridRef}>
                  <table className="pe__grid">
                    <thead>
                      <tr>
                        <th className="col-rownum">#</th>
                        {COLS.map((c) => (
                          <th
                            key={c.key}
                            className={
                              c.key === "gender"
                                ? "col-gender"
                                : c.key === "dateOfBirth"
                                  ? "col-dob"
                                  : ""
                            }
                          >
                            {c.label}
                          </th>
                        ))}
                        <th className="col-status">St.</th>
                        <th className="col-del"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {validatedRows.map((row, rowIdx) => (
                        <tr key={row._id} className={`row--${row._status}`}>
                          <td className="col-rownum">{rowIdx + 1}</td>

                          {COLS.map((col, colIdx) => (
                            <td
                              key={col.key}
                              className={
                                col.key === "dateOfBirth"
                                  ? "col-dob"
                                  : col.key === "gender"
                                    ? "col-gender"
                                    : ""
                              }
                            >
                              {col.type === "select" ? (
                                <select
                                  data-row={rowIdx}
                                  data-col={colIdx}
                                  className={`pe__grid-select${cellHasErr(row, col.key) ? " pe__grid-select--err" : ""}`}
                                  value={row[col.key]}
                                  onChange={(e) =>
                                    updateCell(rowIdx, col.key, e.target.value)
                                  }
                                >
                                  <option value="">—</option>
                                  {GENDER_OPTIONS.map((g) => (
                                    <option key={g} value={g}>
                                      {g}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  data-row={rowIdx}
                                  data-col={colIdx}
                                  className={`pe__grid-cell${cellHasErr(row, col.key) ? " pe__grid-cell--err" : ""}`}
                                  type={col.type}
                                  placeholder={col.placeholder}
                                  value={row[col.key]}
                                  max={
                                    col.type === "date"
                                      ? yearsAgo(5)
                                      : undefined
                                  }
                                  min={
                                    col.type === "date"
                                      ? yearsAgo(80)
                                      : undefined
                                  }
                                  onChange={(e) =>
                                    updateCell(rowIdx, col.key, e.target.value)
                                  }
                                  onKeyDown={(e) =>
                                    handleKeyDown(e, rowIdx, colIdx)
                                  }
                                />
                              )}
                            </td>
                          ))}

                          <td className="col-status">
                            <div className="pe__row-status-wrap">
                              <span
                                className={`pe__row-dot pe__row-dot--${row._status}`}
                              >
                                {row._status === "ok"
                                  ? "✓"
                                  : row._status === "err"
                                    ? "!"
                                    : "·"}
                              </span>
                              {row._errors?.length > 0 && (
                                <div className="pe__err-tip">
                                  {row._errors.map((err, i) => (
                                    <div key={i}>· {err}</div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>

                          <td className="col-del">
                            <button
                              className="a-btn a-btn-danger a-btn-sm"
                              onClick={() => removeRow(rowIdx)}
                              title="Remove row"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {bulkBanner && (
                  <div className={`pe__banner pe__banner--${bulkBanner.type}`}>
                    {bulkBanner.text}
                  </div>
                )}

                <div className="pe__grid-footer">
                  <div className="pe__grid-footer-left">
                    <button
                      className="a-btn a-btn-ghost a-btn-sm"
                      onClick={addRow}
                    >
                      + Add Row
                    </button>
                    <button
                      className="a-btn a-btn-ghost a-btn-sm"
                      onClick={clearGrid}
                    >
                      Clear All
                    </button>
                    {(validCount > 0 || errCount > 0) && (
                      <span className="pe__grid-stats">
                        <span className="ok-count">{validCount} valid</span>
                        {errCount > 0 && (
                          <>
                            {" "}
                            ·{" "}
                            <span className="err-count">
                              {errCount} error{errCount !== 1 ? "s" : ""}
                            </span>
                          </>
                        )}
                      </span>
                    )}
                  </div>
                  <button
                    className="a-btn a-btn-green"
                    onClick={handleBulkSubmit}
                    disabled={validCount === 0 || bulkBusy}
                  >
                    {bulkBusy ? (
                      <>
                        <div className="pe__spinner" /> Registering…
                      </>
                    ) : (
                      `+ Register ${validCount > 0 ? validCount : ""} Participant${validCount !== 1 ? "s" : ""}`
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Registered list (grouped by age-gender) ── */}
        <div className="pe__list-wrap">
          <div className="pe__list-header">
            <span className="pe__list-title">
              Registered Participants — {registered.length} total
            </span>
          </div>
          <div className="a-card pe__list">
            {registered.length === 0 ? (
              <div className="pe__list-empty">
                No participants registered yet.
              </div>
            ) : (
              buildGroups().map((group) => {
                const { groupKey, ageGroup, gender, participants } = group;
                return (
                  <div
                    key={groupKey}
                    id={`group-${groupKey}`}
                    className="pe__group-section"
                  >
                    {/* Print header (hidden normally, visible on print) */}
                    <div className="print-header">
                      <div className="print-header-inner">
                        <img
                          src={`${import.meta.env.BASE_URL}logo/logo.jpeg`}
                          alt="BYWA Logo"
                          className="print-logo"
                        />

                        <div>
                          <h2>Bengal Yoga Welfare Association</h2>

                          <p>(Govt. Regd.)</p>

                          <p>
                            149, Bireswar Chatterjee Street, Chaital Para,
                            Bally, Howrah
                          </p>

                          <p>
                            Age Group : {ageGroup} — {gender}
                          </p>

                          <p>
                            Participant List — Printed on{" "}
                            {new Date().toLocaleDateString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Group header with print button */}
                    <div
                      className={`pe__group-header pe__group-header--${gender.toLowerCase()}`}
                    >
                      <span className="pe__group-title">
                        Age Group: {ageGroup} — {gender} — {participants.length}{" "}
                        Participant{participants.length !== 1 ? "s" : ""}
                      </span>
                      <button
                        className="pe__print-btn no-print"
                        onClick={() => handlePrint(groupKey)}
                      >
                        🖨 Print this group
                      </button>
                    </div>

                    {/* Group table */}
                    <div className="pe__group-table-wrap">
                      <table className="pe__group-table">
                        <thead>
                          <tr>
                            <th style={{ width: "50px" }}>Tag No.</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Age</th>
                            <th>Club / Association</th>
                          </tr>
                        </thead>
                        <tbody>
                          {participants.map((r, i) => (
                            <tr key={r.serialNo ?? i}>
                              <td>
                                <span className="pe__tag-chip">{r.tagNo}</span>
                              </td>
                              <td style={{ fontWeight: 500 }}>{r.name}</td>
                              <td style={{ color: "var(--ink-3)" }}>
                                {r.dateOfBirth}
                              </td>
                              <td style={{ color: "var(--ink-3)" }}>
                                {r.age ?? ageFromDob(r.dateOfBirth)}
                              </td>
                              <td style={{ color: "var(--ink-3)" }}>
                                {r.club || "Individual"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── helper used in JSX ────────────────────────────────────────────────── */
function cellHasErr(row, key) {
  return (
    row._status === "err" &&
    row._errors?.some((e) =>
      e
        .toLowerCase()
        .includes(
          key === "dateOfBirth" ? "date" : key === "gender" ? "gender" : "name",
        ),
    )
  );
}