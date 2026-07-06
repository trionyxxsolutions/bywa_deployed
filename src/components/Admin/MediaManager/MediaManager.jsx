import React, { useState, useRef } from 'react';
import './MediaManager.css';

const INITIAL = [
  { id: 1, name: 'bengal-open-finals.jpg',     type: 'image', size: '2.4 MB', comp: 'Bengal Open 2026',    date: 'Apr 18' },
  { id: 2, name: 'opening-ceremony.mp4',       type: 'video', size: '84 MB',  comp: 'Bengal Open 2026',    date: 'Apr 18' },
  { id: 3, name: 'warrior-pose-riya.jpg',      type: 'image', size: '1.8 MB', comp: 'Bally Invitational',  date: 'Mar 29' },
  { id: 4, name: 'award-ceremony.jpg',         type: 'image', size: '3.1 MB', comp: 'Bally Invitational',  date: 'Mar 29' },
  { id: 5, name: 'highlights-reel.mp4',        type: 'video', size: '210 MB', comp: 'Bengal Open 2026',    date: 'Apr 20' },
  { id: 6, name: 'group-warmup.jpg',           type: 'image', size: '2.2 MB', comp: 'State Championship',  date: 'May 10' },
];

export default function MediaManager() {
  const [files, setFiles]         = useState(INITIAL);
  const [filter, setFilter]       = useState('All');
  const [selected, setSelected]   = useState(new Set());
  const [dragging, setDragging]   = useState(false);
  const inputRef                  = useRef();

  const filtered = filter === 'All' ? files : files.filter((f) => f.type === filter.toLowerCase());

  const toggleSelect = (id) => {
    setSelected((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const deleteSelected = () => {
    setFiles((fs) => fs.filter((f) => !selected.has(f.id)));
    setSelected(new Set());
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    addFiles(dropped);
  };

  const addFiles = (newFiles) => {
    const mapped = newFiles.map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      type: f.type.startsWith('video') ? 'video' : 'image',
      size: (f.size / (1024 * 1024)).toFixed(1) + ' MB',
      comp: '—',
      date: 'Just now',
    }));
    setFiles((fs) => [...mapped, ...fs]);
  };

  return (
    <div className="mm">
      <div className="mm__header">
        <div>
          <div className="a-label">Media</div>
          <h2 className="a-title">Media Library</h2>
        </div>
        <div className="mm__header-actions">
          {selected.size > 0 && (
            <button className="a-btn a-btn-danger" onClick={deleteSelected}>
              Delete {selected.size} selected
            </button>
          )}
          <button className="a-btn a-btn-primary" onClick={() => inputRef.current.click()}>
            ↑ Upload Files
          </button>
          <input ref={inputRef} type="file" multiple accept="image/*,video/*" style={{ display: 'none' }}
            onChange={(e) => addFiles(Array.from(e.target.files))} />
        </div>
      </div>

      {/* Stats row */}
      <div className="mm__stats">
        {[
          { label: 'Total Files', value: files.length },
          { label: 'Images',      value: files.filter((f) => f.type === 'image').length },
          { label: 'Videos',      value: files.filter((f) => f.type === 'video').length },
          { label: 'Total Size',  value: '~305 MB' },
        ].map((s) => (
          <div className="a-card mm__stat" key={s.label}>
            <div className="a-label">{s.label}</div>
            <div className="mm__stat-val">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="mm__filters">
        {['All', 'Image', 'Video'].map((f) => (
          <button key={f} className={`comps__tab ${filter === f ? 'comps__tab--active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {/* Drop zone */}
      <div
        className={`mm__dropzone ${dragging ? 'mm__dropzone--active' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4v18M8 12l8-8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 24v2a2 2 0 002 2h20a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span>Drag &amp; drop photos or videos here</span>
      </div>

      {/* File grid */}
      <div className="mm__grid">
        {filtered.map((f) => (
          <div
            key={f.id}
            className={`mm__file ${selected.has(f.id) ? 'mm__file--selected' : ''}`}
            onClick={() => toggleSelect(f.id)}
          >
            <div className="mm__file-preview">
              {f.type === 'image'
                ? <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="5" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 20l6-5 5 4 4-3 9 7" stroke="currentColor" strokeWidth="1.5"/></svg>
                : <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="5" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><polygon points="11,10 20,14 11,18" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              }
              {selected.has(f.id) && (
                <div className="mm__file-check">✓</div>
              )}
            </div>
            <div className="mm__file-info">
              <div className="mm__file-name" title={f.name}>{f.name}</div>
              <div className="mm__file-meta">{f.size} · {f.comp} · {f.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
