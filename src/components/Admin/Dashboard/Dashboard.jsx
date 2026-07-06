import React from 'react';
import './Dashboard.css';

const stats = [
  { label: 'Total Competitions', value: '24', delta: '+3 this month', color: 'clay' },
  { label: 'Active Judges',      value: '5',  delta: 'All assigned',   color: 'sage' },
  { label: 'Media Files',        value: '318', delta: '+47 this week', color: 'blue' },
  { label: 'Pending Inquiries',  value: '3',  delta: 'Needs reply',    color: 'red'  },
];

const recentComps = [
  { name: 'Bengal Open 2026',      date: 'Apr 18, 2026', status: 'completed', participants: 32 },
  { name: 'Bally Ghat Invitational', date: 'Mar 29, 2026', status: 'completed', participants: 18 },
  { name: 'State Youth Championship', date: 'May 10, 2026', status: 'upcoming',  participants: 45 },
  { name: 'Inter-District Finals',  date: 'Jun 5, 2026',  status: 'upcoming',  participants: 24 },
];

const activity = [
  { action: 'New inquiry from Priya S.',    time: '12 min ago',  icon: '✉' },
  { action: '18 photos uploaded to gallery', time: '2 hrs ago',   icon: '🖼' },
  { action: 'Score sheet saved — Bengal Open', time: '5 hrs ago', icon: '⭐' },
  { action: 'New competition added',         time: 'Yesterday',   icon: '🏆' },
  { action: 'Settings updated',             time: '2 days ago',   icon: '⚙' },
];

export default function Dashboard({ onNav }) {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard__header">
        <div>
          <div className="a-label">Good morning</div>
          <h1 className="a-title" style={{ fontSize: '2rem', marginTop: '0.25rem' }}>
            Welcome back, Admin
          </h1>
        </div>
        <button className="a-btn a-btn-primary" onClick={() => onNav('competitions')}>
          + New Competition
        </button>
      </div>

      {/* Stat Cards */}
      <div className="dashboard__stats">
        {stats.map((s) => (
          <div className={`dashboard__stat-card dashboard__stat-card--${s.color} a-card`} key={s.label}>
            <div className="dashboard__stat-label a-label">{s.label}</div>
            <div className="dashboard__stat-value">{s.value}</div>
            <div className="dashboard__stat-delta">{s.delta}</div>
          </div>
        ))}
      </div>

      {/* Two-col: competitions + activity */}
      <div className="dashboard__grid">
        {/* Recent competitions */}
        <div className="a-card">
          <div className="dashboard__card-head">
            <div className="a-label">Recent Competitions</div>
            <button className="dashboard__link" onClick={() => onNav('competitions')}>
              View all →
            </button>
          </div>
          <table className="a-table" style={{ marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Competition</th>
                <th>Date</th>
                <th>Participants</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentComps.map((c) => (
                <tr key={c.name}>
                  <td style={{ fontWeight: 500, color: 'var(--a-ink)' }}>{c.name}</td>
                  <td>{c.date}</td>
                  <td>{c.participants}</td>
                  <td>
                    <span className={`a-badge ${c.status === 'completed' ? 'a-badge-green' : 'a-badge-blue'}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity feed */}
        <div className="a-card">
          <div className="dashboard__card-head">
            <div className="a-label">Recent Activity</div>
          </div>
          <ul className="dashboard__activity">
            {activity.map((a, i) => (
              <li className="dashboard__activity-item" key={i}>
                <div className="dashboard__activity-icon">{a.icon}</div>
                <div className="dashboard__activity-content">
                  <div className="dashboard__activity-action">{a.action}</div>
                  <div className="dashboard__activity-time">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
