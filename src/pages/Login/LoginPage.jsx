import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loadFormState } from "../../utils/apiClient";
import "./LoginPage.css";

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [role,     setRole]     = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd,  setShowPwd]  = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  // Already logged in — redirect immediately by role
  useEffect(() => {
    if (!user?.role) return;
    if (user.role.includes("ADMIN"))      navigate("/admin", { replace: true });
    else if (user.role.includes("JUDGE")) navigate("/judge", { replace: true });
    else                                  navigate("/",      { replace: true });
  }, [user, navigate]);

  const selectRole = (r) => { setRole(r); setUsername(""); setPassword(""); setError(""); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password.trim()) { setError("Please enter username and password"); return; }
    if (!role) { setError("Please select a role"); return; }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: username.trim(), password }),
      });

      if (!response.ok) {
        setError(await response.text() || "Invalid username or password");
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (role === "admin" && !data.role?.includes("ADMIN")) {
        setError("This account is not an administrator"); setLoading(false); return;
      }
      if (role === "judge" && !data.role?.includes("JUDGE")) {
        setError("This account is not a judge"); setLoading(false); return;
      }

      login(data);

      // Redirect by role — no lastPath needed, logout clears it
      if (data.role?.includes("ADMIN"))      navigate("/admin", { replace: true });
      else if (data.role?.includes("JUDGE")) navigate("/judge", { replace: true });
      else                                   navigate("/",      { replace: true });

    } catch {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__bg">
        <div className="login__bg-circle login__bg-circle--1" />
        <div className="login__bg-circle login__bg-circle--2" />
        <div className="login__bg-circle login__bg-circle--3" />
      </div>

      <div className="login__card">
        <div className="login__header">
          <Link to="/" className="login__back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to site
          </Link>

          <div className="login__brand">
            <div className="login__brand-logo">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                <circle cx="18" cy="8" r="6" fill="none" stroke="#C4956A" strokeWidth="1.8" />
                <line x1="18" y1="14" x2="18" y2="30" stroke="#C4956A" strokeWidth="1.8" />
                <line x1="18" y1="20" x2="8"  y2="26" stroke="#C4956A" strokeWidth="1.8" />
                <line x1="18" y1="20" x2="28" y2="16" stroke="#C4956A" strokeWidth="1.8" />
                <line x1="18" y1="30" x2="10" y2="42" stroke="#C4956A" strokeWidth="1.8" />
                <line x1="18" y1="30" x2="26" y2="42" stroke="#C4956A" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div className="login__brand-name">Bengal <span>Yoga</span> Welfare Association</div>
              <div className="login__brand-sub">Admin Portal · Bally Ghat</div>
            </div>
          </div>
        </div>

        <div className={`login__body ${role ? "login__body--role-selected" : ""}`}>
          {!role ? (
            <>
              <div className="login__step-title">Sign in as</div>
              <div className="login__roles">
                <button className="login__role-card" onClick={() => selectRole("admin")}>
                  <div className="login__role-icon login__role-icon--admin">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M4 25c0-5.523 4.477-9 10-9s10 3.477 10 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="login__role-name">Administrator</div>
                  <div className="login__role-desc">Full dashboard access</div>
                </button>
                <button className="login__role-card" onClick={() => selectRole("judge")}>
                  <div className="login__role-icon login__role-icon--judge">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="login__role-name">Judge</div>
                  <div className="login__role-desc">Score entry panel</div>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="login__role-selected-bar">
                <div className="login__role-selected-label">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3.5 3.5L10 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {role === "admin" ? "Administrator" : "Judge"}
                </div>
                <button className="login__change-role" onClick={() => selectRole(null)}>Change role</button>
              </div>

              <div className="login__step-title">{role === "admin" ? "Admin Login" : "Judge Login"}</div>
              <p className="login__step-sub">
                {role === "admin"
                  ? "Enter your admin credentials to access the full dashboard."
                  : "Enter your assigned judge credentials to access the scoring panel."}
              </p>

              <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__field">
                  <label className="login__label">Username</label>
                  <div className="login__input-wrap">
                    <span className="login__input-icon">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M2 14c0-3.314 2.686-5 5.5-5s5.5 1.686 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <input className="login__input" type="text"
                      placeholder={role === "admin" ? "admin" : "judge1 … judge5"}
                      value={username}
                      onChange={(e) => { setUsername(e.target.value); setError(""); }}
                      autoFocus autoComplete="username" />
                  </div>
                </div>

                <div className="login__field">
                  <label className="login__label">Password</label>
                  <div className="login__input-wrap">
                    <span className="login__input-icon">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <rect x="3" y="6" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        <circle cx="7.5" cy="9.5" r="1" fill="currentColor" />
                      </svg>
                    </span>
                    <input className="login__input"
                      type={showPwd ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(""); }}
                      autoComplete="current-password" />
                    <button type="button" className="login__pwd-toggle"
                      onClick={() => setShowPwd(s => !s)} tabIndex={-1}>
                      {showPwd ? (
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M1 8C2.5 5 4.8 3.5 7.5 3.5S12.5 5 14 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                          <circle cx="7.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M2 2l11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <path d="M1 7.5C2.5 4.5 4.8 3 7.5 3S12.5 4.5 14 7.5C12.5 10.5 10.2 12 7.5 12S2.5 10.5 1 7.5z" stroke="currentColor" strokeWidth="1.3" />
                          <circle cx="7.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="login__error">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M6.5 4v3M6.5 9v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {error}
                  </div>
                )}

                <button type="submit"
                  className={`login__submit ${loading ? "login__submit--loading" : ""}`}
                  disabled={loading}>
                  {loading ? <span className="login__spinner" /> : (
                    <>Sign In
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <div className="login__hint">
                  {role === "admin" ? "Admin: admin / bywa@admin2026" : "Judges: judge1–judge5 / judge@1–judge@5"}
                </div>
              </form>
            </>
          )}
        </div>

        <div className="login__card-footer">
          Bengal Yoga Welfare Association · Bally Ghat, Howrah
        </div>
      </div>
    </div>
  );
}
