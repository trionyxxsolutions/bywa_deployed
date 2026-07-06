import React, { useState } from 'react';
import './ContactInbox.css';

const INITIAL = [
  { id: 1, from: 'Priya Sharma',  email: 'priya@gmail.com',  subject: 'Membership Inquiry',     msg: 'Hello, I am interested in joining the association. Could you please provide details about the membership process and fees?', date: 'Apr 25', status: 'unread' },
  { id: 2, from: 'Amit Bose',    email: 'amit@yahoo.com',   subject: 'Competition Registration', msg: 'I would like to register for the State Youth Championship. My ward is 16 years old and has been practising for 3 years.', date: 'Apr 24', status: 'unread' },
  { id: 3, from: 'Sunita Pal',   email: 'sunita@gmail.com', subject: 'Media Access',             msg: 'We covered the Bengal Open 2026 for our local newspaper. Could we get access to the official competition photos?', date: 'Apr 24', status: 'unread' },
  { id: 4, from: 'Rahul Dey',    email: 'rahul@outlook.com', subject: 'Judge Application',       msg: 'I have 10 years of yoga experience and would like to apply as a judge for upcoming competitions. Please let me know the criteria.', date: 'Apr 22', status: 'read' },
  { id: 5, from: 'Monika Sen',   email: 'monika@gmail.com', subject: 'General Inquiry',         msg: 'What are the timings for the practice sessions at Bally Ghat? I would like to visit with my family.', date: 'Apr 20', status: 'read'  },
];

export default function ContactInbox() {
  const [messages, setMessages]   = useState(INITIAL);
  const [active, setActive]       = useState(null);
  const [reply, setReply]         = useState('');
  const [replySent, setReplySent] = useState(false);

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  const openMsg = (m) => {
    setActive(m);
    setReply('');
    setReplySent(false);
    setMessages((ms) => ms.map((x) => x.id === m.id ? { ...x, status: 'read' } : x));
  };

  const sendReply = () => {
    if (!reply.trim()) return;
    setReplySent(true);
    setReply('');
    setTimeout(() => setReplySent(false), 3000);
  };

  const deleteMsg = (id) => {
    setMessages((ms) => ms.filter((m) => m.id !== id));
    if (active?.id === id) setActive(null);
  };

  return (
    <div className="inbox">
      <div className="inbox__header">
        <div>
          <div className="a-label">Communication</div>
          <h2 className="a-title">
            Contact Inbox
            {unreadCount > 0 && <span className="inbox__count">{unreadCount} unread</span>}
          </h2>
        </div>
      </div>

      <div className="inbox__layout">
        {/* Message list */}
        <div className="inbox__list a-card">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`inbox__item ${active?.id === m.id ? 'inbox__item--active' : ''} ${m.status === 'unread' ? 'inbox__item--unread' : ''}`}
              onClick={() => openMsg(m)}
            >
              <div className="inbox__item-top">
                <div className="inbox__avatar">{m.from[0]}</div>
                <div className="inbox__item-meta">
                  <div className="inbox__from">{m.from}</div>
                  <div className="inbox__date">{m.date}</div>
                </div>
                {m.status === 'unread' && <span className="inbox__unread-dot" />}
              </div>
              <div className="inbox__subject">{m.subject}</div>
              <div className="inbox__preview">{m.msg.slice(0, 80)}…</div>
            </div>
          ))}
        </div>

        {/* Message detail */}
        <div className="inbox__detail a-card">
          {active ? (
            <>
              <div className="inbox__detail-header">
                <div>
                  <div className="inbox__detail-subject">{active.subject}</div>
                  <div className="inbox__detail-from">
                    From <strong>{active.from}</strong> &lt;{active.email}&gt; · {active.date}
                  </div>
                </div>
                <button className="a-btn a-btn-danger" onClick={() => deleteMsg(active.id)}>Delete</button>
              </div>

              <div className="inbox__detail-body">
                {active.msg}
              </div>

              <div className="inbox__reply">
                <div className="a-label" style={{ marginBottom: '0.6rem' }}>Reply</div>
                <textarea
                  className="a-input inbox__reply-input"
                  rows={4}
                  placeholder={`Reply to ${active.from}…`}
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <div className="inbox__reply-actions">
                  {replySent && <span className="inbox__sent">✓ Reply sent!</span>}
                  <button className="a-btn a-btn-primary" onClick={sendReply}>Send Reply</button>
                </div>
              </div>
            </>
          ) : (
            <div className="inbox__empty">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity="0.25">
                <rect x="4" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 16l20 14 20-14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <p>Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
