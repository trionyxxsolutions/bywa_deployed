import React, { useState } from 'react';
import './Contact.css';

const details = [
  { label: 'Location', value: 'Bally Ghat, Howrah\nWest Bengal, India' },
  { label: 'Email', value: 'contact@bengalyoga.org' },
  { label: 'Phone', value: '+91 XXXXX XXXXX' },
  { label: 'Hours', value: 'Mon – Sat, 6:00 AM – 8:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* Details */}
        <div className="contact__info">
          <div className="section-label fade-up">Get in Touch</div>
          <h2 className="section-title fade-up stagger-1">
            We'd love to <em>hear</em><br />from you
          </h2>

          {details.map((d, i) => (
            <div className={`contact__detail fade-up stagger-${i + 1}`} key={d.label}>
              <div className="contact__detail-label">{d.label}</div>
              <div className="contact__detail-val">
                {d.value.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < d.value.split('\n').length - 1 && <br />}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="contact__form fade-up stagger-2" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__field">
              <label>First Name</label>
              <input name="firstName" placeholder="Arjun" value={form.firstName} onChange={handleChange} />
            </div>
            <div className="contact__field">
              <label>Last Name</label>
              <input name="lastName" placeholder="Sharma" value={form.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="contact__field">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </div>

          <div className="contact__field">
            <label>Subject</label>
            <input name="subject" placeholder="Membership Inquiry" value={form.subject} onChange={handleChange} />
          </div>

          <div className="contact__field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about yourself or your inquiry…"
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <button
            type="submit"
            className={`contact__submit ${sent ? 'contact__submit--sent' : ''}`}
          >
            {sent ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
