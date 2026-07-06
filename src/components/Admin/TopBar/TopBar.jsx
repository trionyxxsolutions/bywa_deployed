import React, { useState } from 'react';
import './TopBar.css';

const PAGE_LABELS = {
  dashboard:    'Dashboard',
  competitions: 'Competitions',
  judging:      'Judging Panel',
  judgesheet:   'Judge Sheet',
  media:        'Media Library',
  inbox:        'Contact Inbox',
  settings:     'Settings',
};

export default function TopBar({ activePage, user, onLogout, onMenuClick }) {
  const [search, setSearch] = useState('');

  const isAdmin = user?.role === 'ROLE_ADMIN';
  const roleLabel = isAdmin ? 'Admin' : 'Judge';
  const roleDesc  = isAdmin ? 'Administrator' : 'Judge Panel';

  return (
    <header className="topbar">
      {/* Mobile menu button */}
      <button className="topbar__menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Breadcrumb */}
      <div className="topbar__left">
        <div className="topbar__breadcrumb">
          <span className="topbar__breadcrumb-root">{roleLabel}</span>
          <span className="topbar__breadcrumb-sep">/</span>
          <span className="topbar__breadcrumb-page">{PAGE_LABELS[activePage] ?? activePage}</span>
        </div>
      </div>

      {/* Search */}
      <div className="topbar__center">
        <div className="topbar__search">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="topbar__search-icon">
            <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M8.5 8.5L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <input
            className="topbar__search-input"
            type="text"
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="topbar__search-kbd">⌘K</span>
        </div>
      </div>

      {/* Right */}
      <div className="topbar__right">
        {/* Role badge */}
        <div className={`topbar__role-badge topbar__role-badge--${isAdmin ? 'admin' : 'judge'}`}>
          {roleLabel}
        </div>

        <div className="topbar__divider" />

        {/* User */}
        <div className="topbar__profile">
          <div className={`topbar__avatar topbar__avatar--${isAdmin ? 'admin' : 'judge'}`}>
            {(user?.username?.[0] || user?.name?.[0] || 'U').toUpperCase()}
          </div>
          <div className="topbar__profile-info">
            <div className="topbar__profile-name">{user?.username || user?.name || 'User'}</div>
            <div className="topbar__profile-role">{roleDesc}</div>
          </div>
        </div>

        {/* Logout */}
        <button className="topbar__logout" onClick={onLogout} title="Sign out">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3H4a1 1 0 00-1 1v8a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M10 5l3 3-3 3M13 8H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sign out
        </button>
      </div>
    </header>
  );
}