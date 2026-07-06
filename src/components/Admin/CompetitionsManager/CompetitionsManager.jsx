import React, { useState } from 'react';
import './CompetitionsManager.css';

const INITIAL = [
  { id: 1, name: 'Bengal Open 2026',        date: 'Apr 18, 2026', venue: 'Bally Ghat Main Hall', participants: 32, status: 'completed' },
  { id: 2, name: 'Bally Ghat Invitational', date: 'Mar 29, 2026', venue: 'Riverside Pavilion',   participants: 18, status: 'completed' },
  { id: 3, name: 'State Youth Championship', date: 'May 10, 2026', venue: 'Kolkata Indoor Arena', participants: 45, status: 'upcoming'  },
  { id: 4, name: 'Inter-District Finals',   date: 'Jun 5, 2026',  venue: 'Bally Ghat Main Hall', participants: 24, status: 'upcoming'  },
  { id: 5, name: 'Summer Open',             date: 'Jul 20, 2026', venue: 'TBD',                  participants: 0,  status: 'draft'     },
];

const statusOpts = ['All', 'upcoming', 'completed', 'draft'];
const EMPTY = { name: '', date: '', venue: '', participants: '', status: 'upcoming' };

export default function CompetitionsManager() {
  const [comps, setComps]       = useState(INITIAL);
  const [filter, setFilter]     = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing]   = useState(null);
  const [form, setForm]         = useState(EMPTY);

  const filtered = filter === 'All' ? comps : comps.filter((c) => c.status === filter);

  const openAdd = () => { setForm(EMPTY); setEditing(null); setShowForm(true); };
  const openEdit = (c) => { setForm({ ...c, participants: String(c.participants) }); setEditing(c.id); setShowForm(true); };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editing) {
      setComps((cs) => cs.map((c) => c.id === editing ? { ...form, id: editing, participants: Number(form.participants) || 0 } : c));
    } else {
      setComps((cs) => [...cs, { ...form, id: Date.now(), participants: Number(form.participants) || 0 }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => setComps((cs) => cs.filter((c) => c.id !== id));

  const badgeClass = (s) => ({ completed: 'a-badge-green', upcoming: 'a-badge-blue', draft: 'a-badge-orange' }[s] || 'a-badge-orange');

  return (
    <div className="comps">
      {/* Header */}
      <div className="comps__header">
        <div>
          <div className="a-label">Manage</div>
          <h2 className="a-title">Competitions</h2>
        </div>
        <button className="a-btn a-btn-primary" onClick={openAdd}>+ Add Competition</button>
      </div>

      {/* Filter tabs */}
      <div className="comps__tabs">
        {statusOpts.map((s) => (
          <button
            key={s}
            className={`comps__tab ${filter === s ? 'comps__tab--active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="a-card comps__table-wrap">
        <table className="a-table">
          <thead>
            <tr>
              <th>Competition Name</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Participants</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td style={{ fontWeight: 500, color: 'var(--a-ink)' }}>{c.name}</td>
                <td>{c.date}</td>
                <td>{c.venue}</td>
                <td>{c.participants}</td>
                <td><span className={`a-badge ${badgeClass(c.status)}`}>{c.status}</span></td>
                <td>
                  <div className="comps__actions">
                    <button className="a-btn a-btn-ghost comps__action-btn" onClick={() => openEdit(c)}>Edit</button>
                    <button className="a-btn a-btn-danger comps__action-btn" onClick={() => handleDelete(c.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: 'var(--a-ink-light)', padding: '2rem' }}>No competitions found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="comps__modal-overlay" onClick={() => setShowForm(false)}>
          <div className="comps__modal" onClick={(e) => e.stopPropagation()}>
            <div className="comps__modal-header">
              <h3 className="a-title" style={{ fontSize: '1.3rem' }}>
                {editing ? 'Edit Competition' : 'Add Competition'}
              </h3>
              <button className="comps__modal-close" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <div className="comps__modal-body">
              {[
                { label: 'Competition Name', key: 'name', placeholder: 'Bengal Open 2027' },
                { label: 'Date',             key: 'date', placeholder: 'DD MMM YYYY'       },
                { label: 'Venue',            key: 'venue', placeholder: 'Bally Ghat...'    },
                { label: 'Participants',     key: 'participants', placeholder: '0'          },
              ].map((f) => (
                <div className="comps__field" key={f.key}>
                  <label className="a-label">{f.label}</label>
                  <input
                    className="a-input"
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                </div>
              ))}

              <div className="comps__field">
                <label className="a-label">Status</label>
                <select
                  className="a-input"
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>

            <div className="comps__modal-footer">
              <button className="a-btn a-btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="a-btn a-btn-primary" onClick={handleSave}>
                {editing ? 'Save Changes' : 'Add Competition'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
