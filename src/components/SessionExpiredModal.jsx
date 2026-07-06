import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { loadFormState } from "../utils/apiClient";

// ─── Styles ─────────────────────────────────────────────────────────────────

const css = `
.sem-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 23, 20, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.sem-modal {
  background: #fff;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(26, 23, 20, 0.2);
  text-align: center;
}

.sem-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 1.25rem;
  background: #fef3f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sem-icon svg {
  color: #c0392b;
}

.sem-title {
  font-family: 'DM Mono', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1714;
  margin-bottom: 0.5rem;
}

.sem-message {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  color: #4a4540;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.sem-restore {
  background: #e8f5ee;
  border: 1px solid #b2dfc5;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  color: #2d7a4f;
}

.sem-btn {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
  width: 100%;
}

.sem-btn-primary {
  background: #c8440a;
  color: #fff;
}

.sem-btn-primary:hover {
  background: #a83608;
  transform: translateY(-1px);
}
`;

// ─── Modal Component ───────────────────────────────────────────────────────

export default function SessionExpiredModal({ show, savedFormKey, onClose }) {
  const navigate = useNavigate();
  const [restoredData, setRestoredData] = useState(null);

  // Check for saved form data on mount
  useEffect(() => {
    if (show && savedFormKey) {
      const saved = loadFormState(savedFormKey);
      if (saved) {
        setRestoredData(saved);
      }
    }
  }, [show, savedFormKey]);

  const handleGoToLogin = useCallback(() => {
    navigate("/login", { state: { from: window.location.pathname } });
  }, [navigate]);

  // Prevent close by escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  // Prevent close by click outside
  const handleOverlayClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{css}</style>
      <div className="sem-overlay" onClick={handleOverlayClick}>
        <div className="sem-modal" onClick={(e) => e.stopPropagation()}>
          <div className="sem-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
              <path d="M14 8v6M14 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="sem-title">Session Expired</div>
          <div className="sem-message">
            Your login session has expired. Please log in again to continue.
          </div>

          {restoredData && (
            <div className="sem-restore">
              ✓ Your previous form data has been restored.
            </div>
          )}

          <button className="sem-btn sem-btn-primary" onClick={handleGoToLogin}>
            Go to Login
          </button>
        </div>
      </div>
    </>
  );
}