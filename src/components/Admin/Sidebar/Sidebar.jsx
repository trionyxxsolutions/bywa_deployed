import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

/* =========================
   ADMIN NAVIGATION
========================= */

const adminNavItems = [
  {
    group: "Overview",
    items: [{ id: "dashboard", label: "Dashboard", icon: <IconGrid /> }],
  },
  {
    group: "Manage",
    items: [
      //{ id: "competitions", label: "Competitions", icon: <IconTrophy /> },
      { id: "judging", label: "Scrutiny Sheet", icon: <IconStar /> },
      { id: "judgesheet", label: "Result Sheet", icon: <IconClipboard /> },
     // { id: "media", label: "Media Library", icon: <IconImage /> },
      { id: "Participant", label: "Participant Entry", icon: <IconImage /> },
      { id: "scoreentry", label: "Score Entry", icon: <IconPencil /> },

    ],
  },
  // {
  //   group: "Communication",
  //   items: [
  //     { id: "inbox", label: "Contact Inbox", icon: <IconMail />, badge: 3 },
  //   ],
  // },
  {
    group: "System",
    items: [{ id: "settings", label: "Settings", icon: <IconSettings /> }],
  },
];

/* =========================
   JUDGE NAVIGATION
========================= */

const judgeNavItems = [
  {
    group: "Judging",
    items: [
      { id: "judgesheet", label: "Judge Sheet", icon: <IconClipboard /> },
      { id: "judging", label: "Judging Panel", icon: <IconStar /> },
    ],
  },
];

export default function Sidebar({
  active,
  onNav,
  collapsed,
  onToggle,
  user,
  judgeOnly,
  mobileOpen,
  onMobileClose,
}) {

  // choose menu based on role
  const navItems = judgeOnly ? judgeNavItems : adminNavItems;

  return (
    <aside className={`sidebar ${collapsed ? "sidebar--collapsed" : ""} ${mobileOpen ? "sidebar--open" : ""}`}>

      {/* Logo */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-mark">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="8" r="4" fill="#C4956A" />
            <line x1="14" y1="12" x2="14" y2="22" stroke="#C4956A" strokeWidth="2"/>
            <line x1="14" y1="16" x2="8" y2="20" stroke="#C4956A" strokeWidth="2"/>
            <line x1="14" y1="16" x2="20" y2="13" stroke="#C4956A" strokeWidth="2"/>
          </svg>
        </div>

        {!collapsed && (
          <div className="sidebar__logo-text">
            <span className="sidebar__logo-name">BYWA</span>
            <span className="sidebar__logo-sub">
              {judgeOnly ? "Judge Panel" : "Admin Portal"}
            </span>
          </div>
        )}

        <button
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d={collapsed ? "M6 3l5 5-5 5" : "M10 3L5 8l5 5"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">

        {navItems.map((group) => (
          <div className="sidebar__group" key={group.group}>

            {!collapsed && (
              <div className="sidebar__group-label">
                {group.group}
              </div>
            )}

            {group.items.map((item) => (
              <button
                key={item.id}
                className={`sidebar__item ${
                  active === item.id ? "sidebar__item--active" : ""
                }`}
                onClick={() => onNav(item.id)}
                title={collapsed ? item.label : undefined}
              >
                <span className="sidebar__icon">{item.icon}</span>

                {!collapsed && (
                  <span className="sidebar__item-label">
                    {item.label}
                  </span>
                )}

                {!collapsed && item.badge && (
                  <span className="sidebar__badge">
                    {item.badge}
                  </span>
                )}

                {collapsed && item.badge && (
                  <span className="sidebar__badge sidebar__badge--dot" />
                )}
              </button>
            ))}

          </div>
        ))}

      </nav>

      {/* Back Button */}
      <Link
        to="/"
        className={`sidebar__back ${
          collapsed ? "sidebar__back--collapsed" : ""
        }`}
        title="Back to site"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M9 2L4 7l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {!collapsed && <span>Back to Site</span>}
      </Link>

      {/* User */}
      <div className="sidebar__user">

        <div className="sidebar__avatar">
          {user?.username?.charAt(0)?.toUpperCase() || "A"}
        </div>

        {!collapsed && (
          <div className="sidebar__user-info">
            <div className="sidebar__user-name">
              {user?.username || "Admin"}
            </div>

            <div className="sidebar__user-role">
              {judgeOnly ? "Judge" : "Super Admin"}
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}

/* ───────────────── ICONS ───────────────── */

function IconGrid() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 2h6v5a3 3 0 01-6 0V2z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 3h3M11 3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8 9v4M5 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 2.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M5.5 6h5M5.5 9h5M5.5 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="5.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M1 11l4-3 3 2.5 2.5-2 4.5 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      <path
        d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPencil() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M11.5 2.5l2 2-8.5 8.5-2.5.5.5-2.5 8.5-8.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M10 3l3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}