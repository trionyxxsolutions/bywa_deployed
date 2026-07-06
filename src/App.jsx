import React, { useEffect } from "react";
import "./styles/globals.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AdminPage from "./pages/Admin/AdminPage";
import JudgePage from "./pages/Judge/Judgepage";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SessionExpiredModal from "./components/SessionExpiredModal";

// ─── Save last visited path ────────────────────────────────────────────────────────
const LAST_PATH_KEY = "bywa_last_path";

function saveLastPath(path) {
  try {
    localStorage.setItem(LAST_PATH_KEY, path);
  } catch (e) {
    // Ignore storage errors
  }
}

function getLastPath() {
  try {
    return localStorage.getItem(LAST_PATH_KEY);
  } catch (e) {
    return null;
  }
}

// ─── Auth-aware route wrapper ───────────────────────────────────────────
function AuthAwareRoutes() {
  const { user, isLoggedIn, sessionExpired, clearSessionExpired } = useAuth();
  const location = useLocation();

  // Save last visited path when navigating to protected routes
  useEffect(() => {
    if (location.pathname === "/admin" || location.pathname === "/judge") {
      saveLastPath(location.pathname);
    }
  }, [location.pathname]);

  // After re-login, redirect to last path if session was expired
  useEffect(() => {
    if (sessionExpired && user) {
      // Session was restored after expiry
      clearSessionExpired();
    }
  }, [sessionExpired, user, clearSessionExpired]);

  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected — any logged-in user (admin or judge) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/judge"
          element={
            <ProtectedRoute allowedRoles={["ROLE_ADMIN", "ROLE_JUDGE"]}>
              <JudgePage />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Session expired modal */}
      <SessionExpiredModal
        show={sessionExpired}
        savedFormKey="participant_entry"
        onClose={clearSessionExpired}
      />
    </>
  );
}

// ─── Auto-redirect to last page on load ──────────────────────────────
function AutoRedirect() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Only on initial load
    if (isLoggedIn && (location.pathname === "/" || location.pathname === "/login")) {
      const lastPath = getLastPath();
      if (lastPath && lastPath !== "/" && lastPath !== "/login") {
        // We can't navigate here directly because we're inside Routes
        // The ProtectedRoute will handle the redirect
      }
    }
  }, []); // Only run once on mount

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AutoRedirect />
        <AuthAwareRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}