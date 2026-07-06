import React, { useState } from 'react';
import './SettingsPanel.css';

export default function SettingsPanel() {
  const [org, setOrg] = useState({
    name: 'Bengal Yoga Welfare Association',
    location: 'Bally Ghat, Howrah, West Bengal',
    email: 'contact@bengalyoga.org',
    phone: '+91 XXXXX XXXXX',
    hours: 'Mon – Sat, 6:00 AM – 8:00 PM',
    about: 'A sanctuary of traditional yoga practice rooted in the heritage of Bally Ghat, Bengal.',
  });

  const [pwd, setPwd]     = useState({ current: '', next: '', confirm: '' });
  const [saved, setSaved] = useState('');

  const handleOrg = (k, v) => setOrg((o) => ({ ...o, [k]: v }));

  const saveOrg = () => { setSaved('org'); setTimeout(() => setSaved(''), 2500); };
  const savePwd = () => {
    if (!pwd.next || pwd.next !== pwd.confirm) return;
    setSaved('pwd');
    setPwd({ current: '', next: '', confirm: '' });
    setTimeout(() => setSaved(''), 2500);
  };

  return (
    <div className="settings">
      <div className="settings__header">
        <div className="a-label">System</div>
        <h2 className="a-title">Settings</h2>
      </div>

      {/* Org info */}
      <div className="a-card settings__section">
        <div className="settings__section-title">Organisation Details</div>
        <div className="settings__grid">
          {[
            { label: 'Organisation Name', key: 'name',     type: 'text' },
            { label: 'Location',          key: 'location', type: 'text' },
            { label: 'Contact Email',     key: 'email',    type: 'email' },
            { label: 'Phone',             key: 'phone',    type: 'text' },
            { label: 'Opening Hours',     key: 'hours',    type: 'text' },
          ].map((f) => (
            <div className="settings__field" key={f.key}>
              <label className="a-label">{f.label}</label>
              <input
                type={f.type}
                className="a-input"
                value={org[f.key]}
                onChange={(e) => handleOrg(f.key, e.target.value)}
              />
            </div>
          ))}

          <div className="settings__field settings__field--full">
            <label className="a-label">About Text</label>
            <textarea
              className="a-input"
              rows={3}
              value={org.about}
              onChange={(e) => handleOrg('about', e.target.value)}
            />
          </div>
        </div>

        <div className="settings__footer">
          {saved === 'org' && <span className="settings__saved">✓ Changes saved</span>}
          <button className="a-btn a-btn-primary" onClick={saveOrg}>Save Changes</button>
        </div>
      </div>

      {/* Password */}
      <div className="a-card settings__section">
        <div className="settings__section-title">Change Password</div>
        <div className="settings__grid settings__grid--3">
          {[
            { label: 'Current Password', key: 'current' },
            { label: 'New Password',     key: 'next'    },
            { label: 'Confirm Password', key: 'confirm' },
          ].map((f) => (
            <div className="settings__field" key={f.key}>
              <label className="a-label">{f.label}</label>
              <input
                type="password"
                className="a-input"
                value={pwd[f.key]}
                onChange={(e) => setPwd({ ...pwd, [f.key]: e.target.value })}
                placeholder="••••••••"
              />
            </div>
          ))}
        </div>
        {pwd.next && pwd.confirm && pwd.next !== pwd.confirm && (
          <p className="settings__error">Passwords do not match.</p>
        )}
        <div className="settings__footer">
          {saved === 'pwd' && <span className="settings__saved">✓ Password updated</span>}
          <button className="a-btn a-btn-primary" onClick={savePwd}>Update Password</button>
        </div>
      </div>

      {/* Judging defaults */}
      <div className="a-card settings__section">
        <div className="settings__section-title">Judging System Defaults</div>
        <div className="settings__info-grid">
          {[
            { label: 'Number of Judges',    value: '5 judges per panel' },
            { label: 'Exclusion Rule',      value: 'Highest + Lowest excluded' },
            { label: 'Final Score',         value: 'Sum of middle 3 scores' },
            { label: 'Tie-breaking',        value: 'Excluded scores included on tie' },
          ].map((r) => (
            <div className="settings__info-row" key={r.label}>
              <div className="settings__info-label">{r.label}</div>
              <div className="settings__info-val">{r.value}</div>
            </div>
          ))}
        </div>
        <p className="settings__note">Judging rules are defined by the association bylaws and cannot be changed here.</p>
      </div>
    </div>
  );
}
