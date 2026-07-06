import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/globals.css";
import "../../styles/admin.css";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import TopBar from "../../components/Admin/TopBar/TopBar";
import Dashboard from "../../components/Admin/Dashboard/Dashboard";
import CompetitionsManager from "../../components/Admin/CompetitionsManager/CompetitionsManager";
import JudgingPanel from "../../components/Admin/JudgingPanel/JudgingPanel";
import MediaManager from "../../components/Admin/MediaManager/MediaManager";
import ContactInbox from "../../components/Admin/ContactInbox/ContactInbox";
import SettingsPanel from "../../components/Admin/SettingsPanel/SettingsPanel";
import JudgesSheet from "../../components/Admin/JudgeSheet/JudgesSheet";
import ParticipantEntry from "../../components/Participant/Participantentry";
import AdminScoreEntry from "../../components/Admin/ScoreEntry/AdminScoreEntry";
import "./AdminPage.css";

export default function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === "ROLE_ADMIN";
  const isJudge = user?.role === "ROLE_JUDGE";

  // ── Hooks always at the top, before any conditional returns ──
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(
    isJudge ? "judgesheet" : "dashboard",
  );

  useEffect(() => {
    if (!user || (!isAdmin && !isJudge)) {
      navigate("/login");
      return;
    }
    if (isJudge && !["judgesheet", "judging"].includes(activePage)) {
      setActivePage("judgesheet");
    }
  }, [user, isAdmin, isJudge, activePage, navigate]);

  // Safe to return early after all hooks
  if (!user || (!isAdmin && !isJudge)) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  const judgePages = {
    judgesheet: <JudgesSheet />,
    judging:    <JudgingPanel />,
  };

  const adminPages = {
    dashboard:    <Dashboard onNav={setActivePage} />,
    competitions: <CompetitionsManager />,
    judging:      <JudgingPanel />,
    judgesheet:   <JudgesSheet />,
    media:        <MediaManager />,
    inbox:        <ContactInbox />,
    settings:     <SettingsPanel />,
    Participant: <ParticipantEntry />,
    scoreentry:   <AdminScoreEntry />,
  };

  const pages = isJudge ? judgePages : adminPages;

  return (
    <div className="admin-root">
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${mobileMenuOpen ? 'sidebar-overlay--visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <Sidebar
        active={activePage}
        onNav={handleNav}
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        user={user}
        onLogout={handleLogout}
        judgeOnly={isJudge}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="admin-main">
        <TopBar
          activePage={activePage}
          user={user}
          onLogout={handleLogout}
          onMenuClick={() => setMobileMenuOpen(true)}
        />
        <div className="admin-content">{pages[activePage]}</div>
      </div>
    </div>
  );
}