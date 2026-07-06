import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

const AuthContext = createContext(null);

const KEEP_ALIVE_INTERVAL = 4 * 60 * 1000; // 4 minutes

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);
  const keepAliveTimer = useRef(null);

  const pingSession = useCallback(async () => {
    if (!localStorage.getItem("user")) return;
    try {
      await fetch("/api/auth/ping", { credentials: "include" });
    } catch {
      // network blip — don't trigger session expired, just miss this ping
    }
  }, []);

  const stopKeepAlive = useCallback(() => {
    if (keepAliveTimer.current) {
      clearInterval(keepAliveTimer.current);
      keepAliveTimer.current = null;
    }
  }, []);

  const startKeepAlive = useCallback(() => {
    stopKeepAlive();
    keepAliveTimer.current = setInterval(pingSession, KEEP_ALIVE_INTERVAL);
  }, [pingSession, stopKeepAlive]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
        startKeepAlive();
      }
    } catch {
      localStorage.removeItem("user");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (user) startKeepAlive();
    else stopKeepAlive();
    return () => stopKeepAlive();
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handle = () => {
      setSessionExpired(true);
      stopKeepAlive();
    };
    window.addEventListener("session-expired", handle);
    return () => window.removeEventListener("session-expired", handle);
  }, [stopKeepAlive]);

  const login = useCallback((userData) => {
    setUser(userData);
    setSessionExpired(false);
    localStorage.setItem("user", JSON.stringify(userData));
    startKeepAlive();
  }, [startKeepAlive]);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch { /* ignore */ }
    localStorage.removeItem("user");
    localStorage.removeItem("bywa_last_path");
    setUser(null);
    stopKeepAlive();
  }, [stopKeepAlive]);

  const clearSessionExpired = useCallback(() => setSessionExpired(false), []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoggedIn: !!user,
      sessionExpired,
      clearSessionExpired,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
