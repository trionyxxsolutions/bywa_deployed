// ─── API Client — BYWA ───────────────────────────────────────────────────────
// Uses Spring Security JSESSIONID cookie (credentials: 'include').
// Handles 401/403 with one silent ping-retry, then fires session-expired event.
// Form state is saved to localStorage so it survives browser close + reopen.

// Use relative URLs — works in dev (proxied via vite.config.js) and production
const API_BASE = "/api";

// ─── Session refresh queue ────────────────────────────────────────────────────
let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshSuccess() {
  refreshSubscribers.forEach(cb => cb(true));
  refreshSubscribers = [];
}

function onRefreshFailure() {
  refreshSubscribers.forEach(cb => cb(false));
  refreshSubscribers = [];
}

function subscribeToRefresh() {
  return new Promise(resolve => refreshSubscribers.push(resolve));
}

// ─── Silent ping to keep/verify session ──────────────────────────────────────
async function refreshSession() {
  if (isRefreshing) return subscribeToRefresh();

  isRefreshing = true;
  try {
    const res = await fetch(`${API_BASE}/auth/ping`, { credentials: "include" });
    if (res.ok) { onRefreshSuccess(); return true; }
    onRefreshFailure(); return false;
  } catch {
    onRefreshFailure(); return false;
  } finally {
    isRefreshing = false;
  }
}

// ─── Core fetch wrapper ───────────────────────────────────────────────────────
export async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const config = { ...options, credentials: "include" };

  let res = await fetch(url, config);

  // On 401/403 — one silent retry after ping
  if (res.status === 401 || res.status === 403) {
    const refreshed = await refreshSession();
    if (refreshed) {
      res = await fetch(url, config);
    } else {
      window.dispatchEvent(new CustomEvent("session-expired", { detail: { status: res.status } }));
      throw new Error("Session expired");
    }
  }

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

  const text = await res.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
}

// ─── Form state persistence ───────────────────────────────────────────────────
// Saved to localStorage (NOT sessionStorage) so data survives browser close.
// loadFormState does NOT delete on read — call clearFormState explicitly after
// the data has been successfully restored to component state.

const FORM_KEY = (key) => `bywa_form_${key}`;

export function saveFormState(key, state) {
  try {
    localStorage.setItem(FORM_KEY(key), JSON.stringify(state));
  } catch (e) {
    console.warn("saveFormState failed:", e);
  }
}

export function loadFormState(key) {
  try {
    const raw = localStorage.getItem(FORM_KEY(key));
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("loadFormState failed:", e);
    return null;
  }
}

export function clearFormState(key) {
  try {
    localStorage.removeItem(FORM_KEY(key));
  } catch (e) {
    // ignore
  }
}