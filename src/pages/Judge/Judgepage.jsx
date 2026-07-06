import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { saveFormState, loadFormState } from "../../utils/apiClient";

const API_BASE = "/api";

const ASANAS = [
  { num: 1, name: "Asana 1" },
  { num: 2, name: "Asana 2" },
  { num: 3, name: "Asana 3" },
  { num: 4, name: "Asana 4" },
  { num: 5, name: "Asana 5" },
];

const STYLE_MAX = 2;
const JKP_MAX = 8;
const ASANA_MAX = 10;
const MIN_TAGS = 1;

const emptyScores = () =>
  ASANAS.reduce((acc, a) => {
    acc[a.num] = { style: "", jkp: "" };
    return acc;
  }, {});

const makeRow = () => ({
  id: crypto.randomUUID(),
  tagInput: "",
  gender: "",
  state: "idle",
  error: "",
  participant: null,
});

const JUDGE_STATE_KEY = "judge_page_state";

const DEFAULT_JUDGE_STATE = () => ({
  lookupRows: [makeRow()],
  verifiedParticipants: [],
  scores: {},
  judgingStarted: false,
  currentAsana: 1,
  completedAsanas: [],
  submitState: "idle",
});

function normalizeLookupRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return [makeRow()];

  return rows.map((row) => ({
    ...row,
    id: row.id || crypto.randomUUID(),
    tagInput: row.tagInput || "",
    gender: row.gender || "",
    state: row.state === "loading" ? "idle" : row.state || "idle",
    error: row.state === "loading" ? "" : row.error || "",
    participant: row.participant || null,
  }));
}

function hasSavedJudgeData(saved) {
  if (!saved) return false;

  const hasVerified =
    Array.isArray(saved.verifiedParticipants) &&
    saved.verifiedParticipants.length > 0;

  const hasLookupInput =
    Array.isArray(saved.lookupRows) &&
    saved.lookupRows.some((row) => row.tagInput || row.gender || row.participant);

  const hasScores =
    saved.scores &&
    Object.values(saved.scores).some((participantScores) =>
      ASANAS.some((asana) => {
        const s = participantScores?.[asana.num];
        return s?.style !== "" || s?.jkp !== "";
      })
    );

  return hasVerified || hasLookupInput || hasScores || saved.judgingStarted;
}

function ensureScoresForParticipants(participants, savedScores = {}) {
  const fixedScores = { ...savedScores };

  participants.forEach((p) => {
    if (!fixedScores[p.key]) {
      fixedScores[p.key] = emptyScores();
    }

    ASANAS.forEach((asana) => {
      if (!fixedScores[p.key][asana.num]) {
        fixedScores[p.key][asana.num] = { style: "", jkp: "" };
      }
    });
  });

  return fixedScores;
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:#1a1714;
  --ink-2:#4a4540;
  --ink-3:#8a8480;
  --paper:#faf7f2;
  --paper-2:#f0ece4;
  --paper-3:#e5ddd0;
  --accent:#8b1a1a;
  --green:#1e6b3c;
  --green-soft:#e6f4ec;
  --red:#b01c1c;
  --red-soft:#fbecec;
  --blue:#1a4fa8;
  --blue-soft:#e8eefb;
  --pink:#9b2a6b;
  --pink-soft:#fce8f4;
  --gold:#c9920a;
  --gold-soft:#fdf5e0;
  --shadow:0 2px 8px rgba(26,23,20,.08), 0 8px 24px rgba(26,23,20,.06);
  --mono:'DM Mono', monospace;
  --serif:'Cormorant Garamond', Georgia, serif;
}

.jg {
  font-family:var(--mono);
  background:var(--paper);
  min-height:100vh;
  color:var(--ink);
}

.jg__bar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:.9rem 1.5rem;
  background:#fff;
  border-bottom:1.5px solid var(--paper-3);
  position:sticky;
  top:0;
  z-index:20;
}

.jg__bar-sub {
  font-size:.6rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--ink-3);
}

.jg__bar-name {
  font-family:var(--serif);
  font-size:1.1rem;
  font-weight:700;
}

.jg__bar-right {
  display:flex;
  align-items:center;
  gap:.75rem;
}

.jg__judge-chip {
  display:flex;
  align-items:center;
  gap:.45rem;
  background:var(--paper-2);
  border:1px solid var(--paper-3);
  padding:.3rem .8rem .3rem .3rem;
  border-radius:100px;
  font-size:.75rem;
}

.jg__judge-avatar {
  width:24px;
  height:24px;
  border-radius:50%;
  background:var(--accent);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.68rem;
  font-weight:700;
}

.jg__logout {
  font-family:var(--mono);
  font-size:.72rem;
  padding:.3rem .75rem;
  border-radius:8px;
  border:1px solid var(--paper-3);
  background:transparent;
  color:var(--ink-3);
  cursor:pointer;
}

.jg__logout:hover {
  background:var(--red-soft);
  color:var(--red);
  border-color:var(--red);
}

.jg__main {
  padding:2rem 1rem 4rem;
}

.jg__panel {
  max-width:1180px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:1.25rem;
}

.jg__card {
  background:#fff;
  border:1px solid var(--paper-3);
  border-radius:12px;
  box-shadow:var(--shadow);
  overflow:hidden;
}

.jg__card-head {
  padding:1rem 1.25rem .75rem;
  border-bottom:1px solid var(--paper-3);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
}

.jg__card-title {
  font-size:.86rem;
  font-weight:700;
}

.jg__card-sub {
  font-size:.68rem;
  color:var(--ink-3);
  margin-top:.15rem;
}

.jg__card-body {
  padding:1.25rem;
}

.jg__lookup-list {
  display:flex;
  flex-direction:column;
  gap:.75rem;
}

.jg__lookup-row {
  display:grid;
  grid-template-columns:1fr 1.1fr auto;
  gap:.6rem;
  align-items:end;
  padding:.8rem;
  border:1px solid var(--paper-3);
  border-radius:10px;
  background:var(--paper);
}

.jg__lookup-row--ok {
  background:var(--green-soft);
  border-color:#a8d8bb;
}

.jg__field {
  display:flex;
  flex-direction:column;
  gap:.35rem;
}

.jg__label {
  font-size:.68rem;
  color:var(--ink-2);
  letter-spacing:.06em;
  text-transform:uppercase;
}

.jg__input {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
}

.jg__input:focus {
  border-color:var(--accent);
}

.jg__input:disabled {
  background:var(--paper-2);
  color:var(--ink-3);
}

.jg__gender {
  display:flex;
  height:43px;
  border:2px solid var(--paper-3);
  border-radius:9px;
  overflow:hidden;
}

.jg__gender button {
  flex:1;
  border:none;
  font-family:var(--mono);
  font-weight:700;
  font-size:.72rem;
  background:var(--paper-2);
  color:var(--ink-3);
  cursor:pointer;
}

.jg__gender button:first-child {
  border-right:1px solid var(--paper-3);
}

.jg__gender button:disabled {
  cursor:not-allowed;
  opacity:.65;
}

.jg__gender .male-on {
  background:var(--blue-soft);
  color:var(--blue);
}

.jg__gender .female-on {
  background:var(--pink-soft);
  color:var(--pink);
}

.jg__btn {
  font-family:var(--mono);
  border:none;
  border-radius:9px;
  padding:.75rem 1rem;
  font-weight:700;
  cursor:pointer;
  transition:.15s;
  white-space:nowrap;
}

.jg__btn:disabled {
  opacity:.45;
  cursor:not-allowed;
}

.jg__btn--accent {
  background:var(--accent);
  color:#fff;
}

.jg__btn--green {
  background:var(--green);
  color:#fff;
}

.jg__btn--muted {
  background:var(--paper-2);
  color:var(--ink-2);
  border:1px solid var(--paper-3);
}

.jg__btn:hover:not(:disabled) {
  transform:translateY(-1px);
}

.jg__verified-meta {
  font-size:.72rem;
  color:var(--green);
  font-weight:700;
}

.jg__error {
  margin-top:.75rem;
  padding:.7rem .9rem;
  border-radius:9px;
  background:var(--red-soft);
  color:var(--red);
  border:1px solid #f3b8b8;
  font-size:.75rem;
}

.jg__notice {
  padding:.75rem .9rem;
  border-radius:9px;
  background:var(--green-soft);
  color:var(--green);
  border:1px solid #a8d8bb;
  font-size:.75rem;
}

.jg__restored-banner {
  display:flex;
  align-items:center;
  gap:.5rem;
  padding:.75rem 1rem;
  background:var(--gold-soft);
  border:1px solid #e8d07a;
  border-radius:9px;
  color:#7a5c00;
  font-size:.75rem;
}

.jg__restored-banner button {
  margin-left:auto;
  background:none;
  border:none;
  color:#7a5c00;
  font-family:var(--mono);
  font-size:.72rem;
  cursor:pointer;
  opacity:.75;
}

.jg__restored-banner button:hover {
  opacity:1;
}

.jg__start-wrap {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
  margin-top:1rem;
  padding-top:1rem;
  border-top:1px solid var(--paper-3);
}

.jg__count {
  font-size:.75rem;
  color:var(--ink-3);
}

.jg__count strong {
  color:var(--green);
}

.jg__table-wrap {
  overflow-x:auto;
}

.jg__score-table {
  width:100%;
  min-width:900px;
  border-collapse:separate;
  border-spacing:0;
  border:1px solid var(--paper-3);
  border-radius:12px;
  overflow:hidden;
}

.jg__score-table th,
.jg__score-table td {
  border-right:1px solid var(--paper-3);
  border-bottom:1px solid var(--paper-3);
  padding:.75rem;
  vertical-align:top;
}

.jg__score-table th:last-child,
.jg__score-table td:last-child {
  border-right:none;
}

.jg__score-table tr:last-child td {
  border-bottom:none;
}

.jg__score-table th {
  background:var(--paper-2);
  font-size:.72rem;
  text-align:center;
  color:var(--ink-2);
}

.jg__asana-head-cell {
  width:150px;
  min-width:150px;
  background:var(--paper-2);
  font-weight:800;
  font-size:.76rem;
  text-transform:uppercase;
}

.jg__asana-row--disabled {
  opacity:.42;
  pointer-events:none;
}

.jg__asana-row--done {
  background:var(--green-soft);
}

.jg__participant-col {
  min-width:140px;
}

.jg__tag-title {
  font-size:.8rem;
  font-weight:800;
  color:var(--ink);
}

.jg__gender-badge {
  display:inline-block;
  margin-top:.25rem;
  font-size:.58rem;
  text-transform:uppercase;
  padding:.1rem .4rem;
  border-radius:999px;
  font-weight:800;
}

.jg__gender-badge--male {
  background:var(--blue-soft);
  color:var(--blue);
}

.jg__gender-badge--female {
  background:var(--pink-soft);
  color:var(--pink);
}

.jg__cell-score {
  display:flex;
  flex-direction:column;
  gap:.55rem;
}

.jg__score-block {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:.4rem;
}

.jg__score-label {
  font-size:.58rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
}

.jg__score-label--style {
  color:var(--gold);
}

.jg__score-label--jkp {
  color:var(--blue);
}

.jg__stepper {
  display:flex;
  align-items:center;
  gap:.35rem;
}

.jg__stepper button {
  width:24px;
  height:24px;
  border-radius:6px;
  border:1px solid var(--paper-3);
  background:var(--paper-2);
  font-weight:900;
  cursor:pointer;
}

.jg__stepper button:disabled {
  opacity:.3;
  cursor:not-allowed;
}

.jg__stepper span {
  min-width:24px;
  text-align:center;
  font-weight:900;
}

.jg__cell-total {
  text-align:center;
  font-size:.7rem;
  font-weight:900;
  padding:.25rem;
  border-radius:7px;
  background:var(--paper-2);
}

.jg__row-action {
  margin-top:.65rem;
}

.jg__success {
  padding:2rem 1.25rem;
  text-align:center;
}

.jg__success-icon {
  width:56px;
  height:56px;
  margin:0 auto 1rem;
  border-radius:50%;
  background:var(--green-soft);
  border:2px solid var(--green);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.6rem;
  color:var(--green);
}

.jg__success-title {
  font-family:var(--serif);
  font-size:1.45rem;
  font-weight:700;
  color:var(--green);
}

.jg__success-sub {
  margin-top:.35rem;
  font-size:.78rem;
  color:var(--ink-3);
}

@media (max-width:700px) {
  .jg__bar {
    flex-direction:column;
    align-items:flex-start;
    gap:.75rem;
  }

  .jg__lookup-row {
    grid-template-columns:1fr;
  }

  .jg__start-wrap {
    flex-direction:column;
    align-items:stretch;
  }
}
`;

function GenderBadge({ gender }) {
  return (
    <span className={`jg__gender-badge jg__gender-badge--${gender?.toLowerCase()}`}>
      {gender}
    </span>
  );
}

function scoreTotal(scores, asanaNum) {
  const s = scores?.[asanaNum];
  if (!s || s.style === "" || s.jkp === "") return null;
  return Number(s.style) + Number(s.jkp);
}

function participantGrandTotal(scores) {
  return ASANAS.reduce((sum, a) => sum + (scoreTotal(scores, a.num) ?? 0), 0);
}

export default function JudgePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const firstInputRef = useRef(null);

  const [lookupRows, setLookupRows] = useState([makeRow()]);
  const [verifiedParticipants, setVerifiedParticipants] = useState([]);
  const [scores, setScores] = useState({});
  const [judgingStarted, setJudgingStarted] = useState(false);

  const [currentAsana, setCurrentAsana] = useState(1);
  const [completedAsanas, setCompletedAsanas] = useState(new Set());

  const [pageError, setPageError] = useState("");
  const [submitState, setSubmitState] = useState("idle");

  const [restored, setRestored] = useState(false);
  const [showRestored, setShowRestored] = useState(false);

  useEffect(() => {
    const saved = loadFormState(JUDGE_STATE_KEY);

    if (saved) {
      const restoredParticipants = Array.isArray(saved.verifiedParticipants)
        ? saved.verifiedParticipants
        : [];

      setLookupRows(normalizeLookupRows(saved.lookupRows));
      setVerifiedParticipants(restoredParticipants);
      setScores(ensureScoresForParticipants(restoredParticipants, saved.scores || {}));
      setJudgingStarted(Boolean(saved.judgingStarted));
      setCurrentAsana(Number(saved.currentAsana || 1));

      setCompletedAsanas(
        new Set(Array.isArray(saved.completedAsanas) ? saved.completedAsanas : [])
      );

      setSubmitState(saved.submitState === "loading" ? "idle" : saved.submitState || "idle");

      if (hasSavedJudgeData(saved)) {
        setShowRestored(true);
      }
    }

    setRestored(true);
  }, []);

  useEffect(() => {
    if (!restored) return;
    if (submitState === "success") return;

    saveFormState(JUDGE_STATE_KEY, {
      lookupRows: normalizeLookupRows(lookupRows),
      verifiedParticipants,
      scores,
      judgingStarted,
      currentAsana,
      completedAsanas: Array.from(completedAsanas),
      submitState: submitState === "loading" ? "idle" : submitState,
    });
  }, [
    restored,
    lookupRows,
    verifiedParticipants,
    scores,
    judgingStarted,
    currentAsana,
    completedAsanas,
    submitState,
  ]);

  const initials = user?.username?.slice(0, 2).toUpperCase() ?? "J";

  const canStartJudging =
    verifiedParticipants.length >= MIN_TAGS && !judgingStarted;

  const tableGrandTotal = useMemo(() => {
    return verifiedParticipants.reduce((sum, p) => {
      return sum + participantGrandTotal(scores[p.key]);
    }, 0);
  }, [verifiedParticipants, scores]);

  const updateLookupRow = (rowId, patch) => {
    setLookupRows((prev) =>
      prev.map((row) => (row.id === rowId ? { ...row, ...patch } : row))
    );
  };

  const handleTagInput = (rowId, value) => {
    updateLookupRow(rowId, {
      tagInput: value,
      state: "idle",
      error: "",
      participant: null,
    });
  };

  const handleGender = (rowId, gender) => {
    updateLookupRow(rowId, {
      gender,
      state: "idle",
      error: "",
      participant: null,
    });
  };

  const handleLookup = async (rowId) => {
    const row = lookupRows.find((r) => r.id === rowId);
    if (!row) return;

    const tagNo = row.tagInput.trim();

    if (!tagNo || Number.isNaN(Number(tagNo))) {
      updateLookupRow(rowId, {
        state: "error",
        error: "Enter a valid tag number.",
      });
      return;
    }

    if (!row.gender) {
      updateLookupRow(rowId, {
        state: "error",
        error: "Select gender first.",
      });
      return;
    }

    const duplicate = verifiedParticipants.some(
      (p) => String(p.tagNo) === String(tagNo) && p.gender === row.gender
    );

    if (duplicate) {
      updateLookupRow(rowId, {
        state: "error",
        error: `Tag #${tagNo} (${row.gender}) is already added.`,
      });
      return;
    }

    updateLookupRow(rowId, {
      state: "loading",
      error: "",
    });

    try {
      const res = await fetch(
        `${API_BASE}/Participants/check?tagNo=${encodeURIComponent(
          tagNo
        )}&gender=${encodeURIComponent(row.gender)}`,
        { credentials: "include" }
      );

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data = await res.json();

      if (!data.exists) {
        updateLookupRow(rowId, {
          state: "error",
          error: data.message || `Tag #${tagNo} (${row.gender}) is not registered.`,
        });
        return;
      }

      try {
        const scoreCheckRes = await fetch(
          `${API_BASE}/judge/check-score?participantSerialNo=${data.serialNo}`,
          { credentials: "include" }
        );

        if (scoreCheckRes.ok) {
          const hasScored = await scoreCheckRes.json();

          if (hasScored) {
            updateLookupRow(rowId, {
              state: "error",
              error: `Tag #${data.tagNo} (${data.gender}) has already been scored by this judge.`,
            });
            return;
          }
        }
      } catch (e) {
        console.warn("Score check failed:", e);
      }

      const participant = {
        key: String(data.serialNo),
        serialNo: data.serialNo,
        tagNo: data.tagNo,
        gender: data.gender,
      };

      updateLookupRow(rowId, {
        state: "found",
        error: "",
        participant,
      });

      setVerifiedParticipants((prev) => {
        const next = [...prev, participant];

        setScores((old) => ({
          ...old,
          [participant.key]: emptyScores(),
        }));

        setLookupRows((rows) => [...rows, makeRow()]);

        return next;
      });
    } catch (e) {
      updateLookupRow(rowId, {
        state: "error",
        error: e.message,
      });
    }
  };

  const startJudging = () => {
    if (verifiedParticipants.length < MIN_TAGS) {
      setPageError(`Add at least ${MIN_TAGS} verified tag number.`);
      return;
    }

    setPageError("");
    setJudgingStarted(true);
    setCurrentAsana(1);
    setCompletedAsanas(new Set());
  };

  const changeScore = (participantKey, asanaNum, field, value) => {
    setScores((prev) => ({
      ...prev,
      [participantKey]: {
        ...prev[participantKey],
        [asanaNum]: {
          ...prev[participantKey][asanaNum],
          [field]: value,
        },
      },
    }));
  };

  const isAsanaComplete = (asanaNum) => {
    return verifiedParticipants.every((p) => {
      const s = scores[p.key]?.[asanaNum];
      return s?.style !== "" && s?.jkp !== "";
    });
  };

  const clearSavedJudgeState = () => {
    saveFormState(JUDGE_STATE_KEY, DEFAULT_JUDGE_STATE());
  };

  const submitAsanaRow = async (asanaNum) => {
    if (!isAsanaComplete(asanaNum)) {
      setPageError(`Complete scores for all tags in Asana ${asanaNum}.`);
      return;
    }

    const body = {
      asanaNo: asanaNum,
      scores: verifiedParticipants.map((p) => ({
        participantSerialNo: p.serialNo,
        score: scoreTotal(scores[p.key], asanaNum),
      })),
    };

    setPageError("");
    setSubmitState("loading");

    try {
      const res = await fetch(`${API_BASE}/judge/asana-score`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `${res.status} ${res.statusText}`);
      }

      setCompletedAsanas((prev) => {
        const next = new Set(prev);
        next.add(asanaNum);
        return next;
      });

      if (asanaNum < ASANAS.length) {
        setCurrentAsana(asanaNum + 1);
        setSubmitState("idle");
      } else {
        clearSavedJudgeState();
        setSubmitState("success");
      }
    } catch (e) {
      setSubmitState("error");
      setPageError(e.message);
    }
  };

  const resetAll = () => {
    const freshRow = makeRow();

    setLookupRows([freshRow]);
    setVerifiedParticipants([]);
    setScores({});
    setJudgingStarted(false);
    setCurrentAsana(1);
    setCompletedAsanas(new Set());
    setPageError("");
    setSubmitState("idle");
    setShowRestored(false);

    saveFormState(JUDGE_STATE_KEY, {
      lookupRows: [freshRow],
      verifiedParticipants: [],
      scores: {},
      judgingStarted: false,
      currentAsana: 1,
      completedAsanas: [],
      submitState: "idle",
    });

    setTimeout(() => firstInputRef.current?.focus(), 50);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="jg">
      <style>{css}</style>

      <div className="jg__bar">
        <div>
          <div className="jg__bar-sub">BYWA · Judge Portal</div>
          <div className="jg__bar-name">Bengal Yoga Welfare Association</div>
        </div>

        <div className="jg__bar-right">
          <div className="jg__judge-chip">
            <div className="jg__judge-avatar">{initials}</div>
            <span>{user?.username ?? "Judge"}</span>
          </div>

          <button className="jg__logout" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </div>

      <main className="jg__main">
        <div className="jg__panel">
          {showRestored && (
            <div className="jg__restored-banner">
              ⚠ Your previous unsaved judge page data has been restored.
              <button onClick={() => setShowRestored(false)}>Dismiss ✕</button>
            </div>
          )}

          {submitState !== "success" && (
            <div className="jg__card">
              <div className="jg__card-head">
                <div>
                  <div className="jg__card-title">Participant Verification</div>
                  <div className="jg__card-sub">
                    Add minimum {MIN_TAGS} verified tag number. After each successful
                    verification, a new row appears automatically.
                  </div>
                </div>
              </div>

              <div className="jg__card-body">
                <div className="jg__lookup-list">
                  {lookupRows.map((row, index) => {
                    const verified = row.state === "found";
                    const disabled = judgingStarted || verified;

                    return (
                      <div
                        key={row.id}
                        className={`jg__lookup-row ${
                          verified ? "jg__lookup-row--ok" : ""
                        }`}
                      >
                        <div className="jg__field">
                          <label className="jg__label">Tag Number</label>
                          <input
                            ref={index === 0 ? firstInputRef : null}
                            className="jg__input"
                            type="number"
                            min="1"
                            placeholder="e.g. 4"
                            value={row.tagInput}
                            disabled={disabled}
                            onChange={(e) => handleTagInput(row.id, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleLookup(row.id);
                            }}
                          />
                        </div>

                        <div className="jg__field">
                          <label className="jg__label">Gender</label>
                          <div className="jg__gender">
                            <button
                              className={row.gender === "Male" ? "male-on" : ""}
                              disabled={disabled}
                              onClick={() => handleGender(row.id, "Male")}
                            >
                              ♂ Male
                            </button>

                            <button
                              className={row.gender === "Female" ? "female-on" : ""}
                              disabled={disabled}
                              onClick={() => handleGender(row.id, "Female")}
                            >
                              ♀ Female
                            </button>
                          </div>
                        </div>

                        <div className="jg__field">
                          <label
                            className="jg__label"
                            style={{ visibility: "hidden" }}
                          >
                            Action
                          </label>

                          {verified ? (
                            <div className="jg__verified-meta">
                              ✓ Tag #{row.participant.tagNo} Verified
                            </div>
                          ) : (
                            <button
                              className="jg__btn jg__btn--accent"
                              disabled={judgingStarted || row.state === "loading"}
                              onClick={() => handleLookup(row.id)}
                            >
                              {row.state === "loading" ? "Checking…" : "Verify →"}
                            </button>
                          )}
                        </div>

                        {row.state === "error" && row.error && (
                          <div
                            className="jg__error"
                            style={{ gridColumn: "1 / -1" }}
                          >
                            {row.error}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="jg__start-wrap">
                  <div className="jg__count">
                    Verified Tags: <strong>{verifiedParticipants.length}</strong>
                    <br />
                    {verifiedParticipants.length < MIN_TAGS
                      ? `${MIN_TAGS - verifiedParticipants.length} more required to start judging.`
                      : "You can start judging now or verify more tags."}
                  </div>

                  {!judgingStarted && (
                    <button
                      className="jg__btn jg__btn--green"
                      disabled={!canStartJudging}
                      onClick={startJudging}
                    >
                      Start Judging →
                    </button>
                  )}

                  {judgingStarted && (
                    <div className="jg__notice">
                      Judging started. Complete Asana {currentAsana} to unlock next row.
                    </div>
                  )}
                </div>

                {pageError && <div className="jg__error">{pageError}</div>}
              </div>
            </div>
          )}

          {judgingStarted && submitState !== "success" && (
            <div className="jg__card">
              <div className="jg__card-head">
                <div>
                  <div className="jg__card-title">Score Sheet</div>
                  <div className="jg__card-sub">
                    Tags are arranged column-wise. Asanas are arranged row-wise.
                    Only one asana row is enabled at a time.
                  </div>
                </div>
              </div>

              <div className="jg__card-body">
                <div className="jg__table-wrap">
                  <table className="jg__score-table">
                    <thead>
                      <tr>
                        <th>Asana</th>

                        {verifiedParticipants.map((p) => (
                          <th key={p.key} className="jg__participant-col">
                            <div className="jg__tag-title">Tag #{p.tagNo}</div>
                            <GenderBadge gender={p.gender} />
                          </th>
                        ))}

                        <th>Submit Row</th>
                      </tr>
                    </thead>

                    <tbody>
                      {ASANAS.map((asana) => {
                        const rowDone = completedAsanas.has(asana.num);
                        const rowActive =
                          currentAsana === asana.num &&
                          !rowDone &&
                          submitState !== "loading";

                        return (
                          <tr
                            key={asana.num}
                            className={
                              rowDone
                                ? "jg__asana-row--done"
                                : !rowActive
                                ? "jg__asana-row--disabled"
                                : ""
                            }
                          >
                            <td className="jg__asana-head-cell">
                              {asana.name}
                              <br />
                              <span
                                style={{
                                  fontSize: ".62rem",
                                  color: "var(--ink-3)",
                                }}
                              >
                                Style {STYLE_MAX} + JKP {JKP_MAX}
                              </span>
                            </td>

                            {verifiedParticipants.map((p) => {
                              const pScores = scores[p.key]?.[asana.num];
                              const total = scoreTotal(scores[p.key], asana.num);

                              return (
                                <td key={`${p.key}-${asana.num}`}>
                                  <div className="jg__cell-score">
                                    <div className="jg__score-block">
                                      <span className="jg__score-label jg__score-label--style">
                                        Style
                                      </span>

                                      <div className="jg__stepper">
                                        <button
                                          disabled={
                                            !rowActive ||
                                            Number(pScores?.style || 0) <= 0
                                          }
                                          onClick={() =>
                                            changeScore(
                                              p.key,
                                              asana.num,
                                              "style",
                                              Number(pScores?.style || 0) - 1
                                            )
                                          }
                                        >
                                          −
                                        </button>

                                        <span>
                                          {pScores?.style === "" ? "–" : pScores?.style}
                                        </span>

                                        <button
                                          disabled={
                                            !rowActive ||
                                            Number(pScores?.style || 0) >= STYLE_MAX
                                          }
                                          onClick={() =>
                                            changeScore(
                                              p.key,
                                              asana.num,
                                              "style",
                                              Number(pScores?.style || 0) + 1
                                            )
                                          }
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>

                                    <div className="jg__score-block">
                                      <span className="jg__score-label jg__score-label--jkp">
                                        J.K.P.
                                      </span>

                                      <div className="jg__stepper">
                                        <button
                                          disabled={
                                            !rowActive ||
                                            Number(pScores?.jkp || 0) <= 0
                                          }
                                          onClick={() =>
                                            changeScore(
                                              p.key,
                                              asana.num,
                                              "jkp",
                                              Number(pScores?.jkp || 0) - 1
                                            )
                                          }
                                        >
                                          −
                                        </button>

                                        <span>
                                          {pScores?.jkp === "" ? "–" : pScores?.jkp}
                                        </span>

                                        <button
                                          disabled={
                                            !rowActive ||
                                            Number(pScores?.jkp || 0) >= JKP_MAX
                                          }
                                          onClick={() =>
                                            changeScore(
                                              p.key,
                                              asana.num,
                                              "jkp",
                                              Number(pScores?.jkp || 0) + 1
                                            )
                                          }
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>

                                    <div className="jg__cell-total">
                                      {total === null ? "–" : total} / {ASANA_MAX}
                                    </div>
                                  </div>
                                </td>
                              );
                            })}

                            <td>
                              {rowDone ? (
                                <div className="jg__notice">✓ Submitted</div>
                              ) : (
                                <button
                                  className="jg__btn jg__btn--green jg__row-action"
                                  disabled={!rowActive || !isAsanaComplete(asana.num)}
                                  onClick={() => submitAsanaRow(asana.num)}
                                >
                                  {submitState === "loading"
                                    ? "Submitting..."
                                    : asana.num === 5
                                    ? "Submit Asana 5 Final"
                                    : `Submit ${asana.name}`}
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="jg__notice" style={{ marginTop: "1rem" }}>
                  Current Enabled Row: Asana {currentAsana} · Total Tags:{" "}
                  {verifiedParticipants.length} · Full Max:{" "}
                  {verifiedParticipants.length * ASANAS.length * ASANA_MAX}
                </div>
              </div>
            </div>
          )}

          {submitState === "success" && (
            <div className="jg__card">
              <div className="jg__success">
                <div className="jg__success-icon">✓</div>
                <div className="jg__success-title">All Scores Submitted</div>

                <div className="jg__success-sub">
                  Scores submitted for {verifiedParticipants.length} verified participants.
                  Total score entered: <strong>{tableGrandTotal}</strong> /{" "}
                  {verifiedParticipants.length * ASANAS.length * ASANA_MAX}
                </div>

                <button
                  className="jg__btn jg__btn--accent"
                  style={{ marginTop: "1rem" }}
                  onClick={resetAll}
                >
                  Start New Batch →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
