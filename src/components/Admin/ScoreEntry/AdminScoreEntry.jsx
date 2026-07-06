import React, { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const API_BASE = "/api";

const ASANAS = [
  { num: 1, name: "Asana 1" },
  { num: 2, name: "Asana 2" },
  { num: 3, name: "Asana 3" },
  { num: 4, name: "Asana 4" },
  { num: 5, name: "Asana 5" },
];

const ASANA_MAX = 10;

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

.ase {
  font-family:var(--mono);
  background:var(--paper);
  min-height:100vh;
  color:var(--ink);
}

.ase__bar {
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

.ase__bar-sub {
  font-size:.6rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--ink-3);
}

.ase__bar-name {
  font-family:var(--serif);
  font-size:1.1rem;
  font-weight:700;
}

.ase__bar-right {
  display:flex;
  align-items:center;
  gap:.75rem;
}

.ase__admin-chip {
  display:flex;
  align-items:center;
  gap:.45rem;
  background:var(--paper-2);
  border:1px solid var(--paper-3);
  padding:.3rem .8rem .3rem .3rem;
  border-radius:100px;
  font-size:.75rem;
}

.ase__admin-avatar {
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

.ase__logout {
  font-family:var(--mono);
  font-size:.72rem;
  padding:.3rem .75rem;
  border-radius:8px;
  border:1px solid var(--paper-3);
  background:transparent;
  color:var(--ink-3);
  cursor:pointer;
}

.ase__logout:hover {
  background:var(--red-soft);
  color:var(--red);
  border-color:var(--red);
}

.ase__main {
  padding:2rem 1rem 4rem;
}

.ase__panel {
  max-width:1180px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:1.25rem;
}

.ase__card {
  background:#fff;
  border:1px solid var(--paper-3);
  border-radius:12px;
  box-shadow:var(--shadow);
  overflow:hidden;
}

.ase__card-head {
  padding:1rem 1.25rem .75rem;
  border-bottom:1px solid var(--paper-3);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
}

.ase__card-title {
  font-size:.86rem;
  font-weight:700;
}

.ase__card-sub {
  font-size:.68rem;
  color:var(--ink-3);
  margin-top:.15rem;
}

.ase__card-body {
  padding:1.25rem;
}

.ase__lookup-row {
  display:grid;
  grid-template-columns:1fr 1.1fr 1.1fr auto;
  gap:.6rem;
  align-items:end;
  padding:.8rem;
  border:1px solid var(--paper-3);
  border-radius:10px;
  background:var(--paper);
}

.ase__lookup-row--ok {
  background:var(--green-soft);
  border-color:#a8d8bb;
}

.ase__field {
  display:flex;
  flex-direction:column;
  gap:.35rem;
}

.ase__label {
  font-size:.68rem;
  color:var(--ink-2);
  letter-spacing:.06em;
  text-transform:uppercase;
}

.ase__input {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
}

.ase__input:focus {
  border-color:var(--accent);
}

.ase__input:disabled {
  background:var(--paper-2);
  color:var(--ink-3);
}

.ase__select {
  font-family:var(--mono);
  font-size:.95rem;
  font-weight:600;
  padding:.65rem .8rem;
  border:2px solid var(--paper-3);
  border-radius:9px;
  background:#fff;
  outline:none;
  cursor:pointer;
}

.ase__select:focus {
  border-color:var(--accent);
}

.ase__gender {
  display:flex;
  height:43px;
  border:2px solid var(--paper-3);
  border-radius:9px;
  overflow:hidden;
}

.ase__gender button {
  flex:1;
  border:none;
  font-family:var(--mono);
  font-weight:700;
  font-size:.72rem;
  background:var(--paper-2);
  color:var(--ink-3);
  cursor:pointer;
}

.ase__gender button:first-child {
  border-right:1px solid var(--paper-3);
}

.ase__gender button:disabled {
  cursor:not-allowed;
  opacity:.65;
}

.ase__gender .male-on {
  background:var(--blue-soft);
  color:var(--blue);
}

.ase__gender .female-on {
  background:var(--pink-soft);
  color:var(--pink);
}

.ase__btn {
  font-family:var(--mono);
  border:none;
  border-radius:9px;
  padding:.75rem 1rem;
  font-weight:700;
  cursor:pointer;
  transition:.15s;
  white-space:nowrap;
}

.ase__btn:disabled {
  opacity:.45;
  cursor:not-allowed;
}

.ase__btn--accent {
  background:var(--accent);
  color:#fff;
}

.ase__btn--green {
  background:var(--green);
  color:#fff;
}

.ase__btn--muted {
  background:var(--paper-2);
  color:var(--ink-2);
  border:1px solid var(--paper-3);
}

.ase__btn:hover:not(:disabled) {
  transform:translateY(-1px);
}

.ase__verified-meta {
  font-size:.72rem;
  color:var(--green);
  font-weight:700;
}

.ase__error {
  margin-top:.75rem;
  padding:.7rem .9rem;
  border-radius:9px;
  background:var(--red-soft);
  color:var(--red);
  border:1px solid #f3b8b8;
  font-size:.75rem;
}

.ase__notice {
  padding:.75rem .9rem;
  border-radius:9px;
  background:var(--green-soft);
  color:var(--green);
  border:1px solid #a8d8bb;
  font-size:.75rem;
}

.ase__notice--existing {
  padding:.75rem .9rem;
  border-radius:9px;
  background:var(--gold-soft);
  color:var(--gold);
  border:1px solid #f0d080;
  font-size:.75rem;
  margin-top:.5rem;
}

.ase__score-grid {
  display:grid;
  grid-template-columns:repeat(5, 1fr);
  gap:1rem;
  margin-top:1rem;
}

.ase__asana-col {
  display:flex;
  flex-direction:column;
  gap:.5rem;
}

.ase__asana-head {
  font-size:.72rem;
  font-weight:800;
  text-transform:uppercase;
  text-align:center;
  padding:.5rem;
  background:var(--paper-2);
  border-radius:8px;
}

.ase__score-input {
  display:flex;
  flex-direction:column;
  gap:.25rem;
}

.ase__score-label {
  font-size:.58rem;
  font-weight:900;
  text-transform:uppercase;
  color:var(--ink-2);
}

.ase__score-input input {
  width:100%;
  font-family:var(--mono);
  font-size:1rem;
  font-weight:700;
  text-align:center;
  padding:.5rem;
  border:2px solid var(--paper-3);
  border-radius:8px;
  background:#fff;
  outline:none;
}

.ase__score-input input:focus {
  border-color:var(--accent);
}

.ase__score-input input.has-existing {
  border-color:var(--gold);
  background:var(--gold-soft);
}

.ase__total-row {
  display:flex;
  justify-content:flex-end;
  gap:.5rem;
  margin-top:1rem;
  padding-top:1rem;
  border-top:1px solid var(--paper-3);
  font-size:.75rem;
  color:var(--ink-3);
}

.ase__total-row strong {
  color:var(--green);
}

.ase__success {
  padding:2rem 1.25rem;
  text-align:center;
}

.ase__success-icon {
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

.ase__success-title {
  font-family:var(--serif);
  font-size:1.45rem;
  font-weight:700;
  color:var(--green);
}

.ase__success-sub {
  margin-top:.35rem;
  font-size:.78rem;
  color:var(--ink-3);
}

@media (max-width:900px) {
  .ase__score-grid {
    grid-template-columns:repeat(3, 1fr);
  }
}

@media (max-width:600px) {
  .ase__lookup-row {
    grid-template-columns:1fr;
  }

  .ase__score-grid {
    grid-template-columns:1fr 1fr;
  }
}
`;

function calculateTotal(scores) {
  return ASANAS.reduce((sum, a) => sum + (Number(scores[a.num]) || 0), 0);
}

const EMPTY_SCORES = ASANAS.reduce((acc, a) => { acc[a.num] = ""; return acc; }, {});

export default function AdminScoreEntry() {
  const { user, logout } = useAuth();
  const firstInputRef = useRef(null);

  const [gender, setGender] = useState("");
  const [tagNo, setTagNo] = useState("");
  const [judgeUsername, setJudgeUsername] = useState("");
  const [judges, setJudges] = useState([]);

  const [participant, setParticipant] = useState(null);
  const [lookupState, setLookupState] = useState("idle");
  const [lookupError, setLookupError] = useState("");
  const [hasExistingScores, setHasExistingScores] = useState(false);

  const [scores, setScores] = useState({ ...EMPTY_SCORES });

  const [submitState, setSubmitState] = useState("idle");
  const [pageError, setPageError] = useState("");

  const initials = user?.username?.slice(0, 2).toUpperCase() ?? "A";
  const totalScore = calculateTotal(scores);

  // Load judges on mount
  React.useEffect(() => {
    fetch(`${API_BASE}/admin/judges`, { credentials: "include" })
      .then((res) => res.json())
      .then(setJudges)
      .catch(console.error);
  }, []);

  const handleGenderSelect = (g) => {
    setGender(g);
    setLookupState("idle");
    setLookupError("");
  };

  const handleTagInput = (value) => {
    setTagNo(value);
    setLookupState("idle");
    setLookupError("");
    setParticipant(null);
    setHasExistingScores(false);
    setScores({ ...EMPTY_SCORES });
  };

  const handleLookup = async () => {
    if (!tagNo || Number.isNaN(Number(tagNo))) {
      setLookupError("Enter a valid tag number.");
      setLookupState("error");
      return;
    }

    if (!gender) {
      setLookupError("Select gender first.");
      setLookupState("error");
      return;
    }

    if (!judgeUsername) {
      setLookupError("Select a judge first.");
      setLookupState("error");
      return;
    }

    setLookupState("loading");
    setLookupError("");

    try {
      // Step 1: verify participant exists
      const res = await fetch(
        `${API_BASE}/Participants/check?tagNo=${encodeURIComponent(tagNo)}&gender=${encodeURIComponent(gender)}`,
        { credentials: "include" }
      );

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data = await res.json();

      if (!data.exists) {
        setLookupState("error");
        setLookupError(data.message || `Tag #${tagNo} (${gender}) is not registered.`);
        return;
      }

      setParticipant({
        serialNo: data.serialNo,
        tagNo: data.tagNo,
        gender: data.gender,
      });

      // Step 2: pre-load any existing scores for this participant+judge
      const scoreRes = await fetch(
        `${API_BASE}/admin/scores?participantSerialNo=${data.serialNo}&judgeUsername=${encodeURIComponent(judgeUsername)}`,
        { credentials: "include" }
      );

      if (scoreRes.ok) {
        const existing = await scoreRes.json();
        const loaded = {
          1: existing.asana1 !== "" ? existing.asana1 : "",
          2: existing.asana2 !== "" ? existing.asana2 : "",
          3: existing.asana3 !== "" ? existing.asana3 : "",
          4: existing.asana4 !== "" ? existing.asana4 : "",
          5: existing.asana5 !== "" ? existing.asana5 : "",
        };
        setScores(loaded);
        // Flag if any scores were already present
        const anyExisting = Object.values(loaded).some((v) => v !== "");
        setHasExistingScores(anyExisting);
      }

      setLookupState("found");
    } catch (e) {
      setLookupState("error");
      setLookupError(e.message);
    }
  };

  const handleScoreChange = (asanaNum, value) => {
    const num = Number(value);
    if (value === "" || (num >= 0 && num <= ASANA_MAX)) {
      setScores((prev) => ({ ...prev, [asanaNum]: value }));
    }
  };

  const handleSubmit = async () => {
    if (!participant) {
      setPageError("Please verify a participant first.");
      return;
    }

    if (!judgeUsername) {
      setPageError("Please select a judge.");
      return;
    }

    const missing = ASANAS.filter((a) => scores[a.num] === "" || scores[a.num] === null);
    if (missing.length > 0) {
      setPageError(`Enter scores for all 5 asanas. Missing: ${missing.map((a) => a.name).join(", ")}`);
      return;
    }

    setPageError("");
    setSubmitState("loading");

    try {
      for (const asana of ASANAS) {
        const body = {
          participantSerialNo: participant.serialNo,
          judgeUsername: judgeUsername,
          asanaNo: asana.num,
          score: Number(scores[asana.num]),
        };

        const res = await fetch(`${API_BASE}/admin/update-score`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `${res.status} ${res.statusText}`);
        }
      }

      setSubmitState("success");
    } catch (e) {
      setSubmitState("error");
      setPageError(e.message);
    }
  };

  const handleReset = () => {
    setTagNo("");
    setGender("");
    setJudgeUsername("");
    setParticipant(null);
    setScores({ ...EMPTY_SCORES });
    setLookupState("idle");
    setLookupError("");
    setSubmitState("idle");
    setPageError("");
    setHasExistingScores(false);
    setTimeout(() => firstInputRef.current?.focus(), 50);
  };

  return (
    <div className="ase">
      <style>{css}</style>

      <div className="ase__bar">
        <div>
          <div className="ase__bar-sub">BYWA · Admin Portal</div>
          <div className="ase__bar-name">Bengal Yoga Welfare Association</div>
        </div>
        <div className="ase__bar-right">
          <div className="ase__admin-chip">
            <div className="ase__admin-avatar">{initials}</div>
            <span>{user?.username ?? "Admin"}</span>
          </div>
          <button className="ase__logout" onClick={logout}>
            Sign out
          </button>
        </div>
      </div>

      <main className="ase__main">
        <div className="ase__panel">
          {submitState !== "success" && (
            <div className="ase__card">
              <div className="ase__card-head">
                <div>
                  <div className="ase__card-title">Admin Score Entry</div>
                  <div className="ase__card-sub">
                    Enter scores for a participant on behalf of a specific judge.
                    Used for corrections or manual entries.
                  </div>
                </div>
              </div>

              <div className="ase__card-body">
                <div className={`ase__lookup-row ${lookupState === "found" ? "ase__lookup-row--ok" : ""}`}>
                  <div className="ase__field">
                    <label className="ase__label">Tag Number</label>
                    <input
                      ref={firstInputRef}
                      className="ase__input"
                      type="number"
                      min="1"
                      placeholder="e.g. 4"
                      value={tagNo}
                      disabled={lookupState === "found"}
                      onChange={(e) => handleTagInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") handleLookup(); }}
                    />
                  </div>

                  <div className="ase__field">
                    <label className="ase__label">Gender</label>
                    <div className="ase__gender">
                      <button
                        className={gender === "Male" ? "male-on" : ""}
                        disabled={lookupState === "found"}
                        onClick={() => handleGenderSelect("Male")}
                      >
                        ♂ Male
                      </button>
                      <button
                        className={gender === "Female" ? "female-on" : ""}
                        disabled={lookupState === "found"}
                        onClick={() => handleGenderSelect("Female")}
                      >
                        ♀ Female
                      </button>
                    </div>
                  </div>

                  <div className="ase__field">
                    <label className="ase__label">Judge</label>
                    <select
                      className="ase__select"
                      value={judgeUsername}
                      disabled={lookupState === "found"}
                      onChange={(e) => setJudgeUsername(e.target.value)}
                    >
                      <option value="">Select judge...</option>
                      {judges.map((j) => (
                        <option key={j} value={j}>{j}</option>
                      ))}
                    </select>
                  </div>

                  <div className="ase__field">
                    <label className="ase__label" style={{ visibility: "hidden" }}>Action</label>
                    {lookupState === "found" ? (
                      <div className="ase__verified-meta">✓ Tag #{participant.tagNo} Verified</div>
                    ) : (
                      <button
                        className="ase__btn ase__btn--accent"
                        disabled={lookupState === "loading"}
                        onClick={handleLookup}
                      >
                        {lookupState === "loading" ? "Checking…" : "Verify →"}
                      </button>
                    )}
                  </div>

                  {lookupState === "error" && lookupError && (
                    <div className="ase__error" style={{ gridColumn: "1 / -1" }}>
                      {lookupError}
                    </div>
                  )}
                </div>

                {participant && (
                  <>
                    <div className="ase__notice" style={{ marginTop: "1rem" }}>
                      Participant: Tag #{participant.tagNo} ({participant.gender}) · Serial No:{" "}
                      {participant.serialNo} · Judge: {judgeUsername}
                    </div>

                    {hasExistingScores && (
                      <div className="ase__notice--existing">
                        ⚠ Existing scores loaded for {judgeUsername}. Submitting will overwrite them.
                      </div>
                    )}

                    <div className="ase__score-grid">
                      {ASANAS.map((asana) => (
                        <div key={asana.num} className="ase__asana-col">
                          <div className="ase__asana-head">{asana.name}</div>
                          <div className="ase__score-input">
                            <label className="ase__score-label">Score</label>
                            <input
                              type="number"
                              min="0"
                              max={ASANA_MAX}
                              value={scores[asana.num]}
                              className={scores[asana.num] !== "" && hasExistingScores ? "has-existing" : ""}
                              onChange={(e) => handleScoreChange(asana.num, e.target.value)}
                              placeholder="0-10"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="ase__total-row">
                      Total Score: <strong>{totalScore}</strong> / {ASANAS.length * ASANA_MAX}
                    </div>

                    <button
                      className="ase__btn ase__btn--green"
                      style={{ marginTop: "1rem", width: "100%" }}
                      disabled={submitState === "loading"}
                      onClick={handleSubmit}
                    >
                      {submitState === "loading"
                        ? "Submitting..."
                        : hasExistingScores
                        ? "Overwrite Scores →"
                        : "Submit All Scores →"}
                    </button>
                  </>
                )}

                {pageError && <div className="ase__error">{pageError}</div>}
              </div>
            </div>
          )}

          {submitState === "success" && (
            <div className="ase__card">
              <div className="ase__success">
                <div className="ase__success-icon">✓</div>
                <div className="ase__success-title">Scores Updated</div>
                <div className="ase__success-sub">
                  Updated scores for Tag #{participant?.tagNo} ({participant?.gender}) by judge{" "}
                  {judgeUsername}. Total score: <strong>{totalScore}</strong>
                </div>
                <button
                  className="ase__btn ase__btn--accent"
                  style={{ marginTop: "1rem" }}
                  onClick={handleReset}
                >
                  Enter Another Score →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}