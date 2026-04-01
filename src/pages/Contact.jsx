import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container contact-hero__content">
          <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>📬 Get in Touch</span>
          <h1 className="contact-hero__title">We're Here for You</h1>
          <p className="contact-hero__desc">
            Questions, concerns, or ready to book? Reach out and our friendly team will respond within a few hours.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="contact-body">
        <div className="container contact-body__inner">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title" style={{ fontSize: 28, marginBottom: 28 }}>Contact Details</h2>

            {[
              { icon: "📍", label: "Visit Us", value: " Hakim Para, Siliguri, West Bengal 734001", sub: "Near Jayasree Pharmacy, Kachari Road," },
              { icon: "📞", label: "Call Us", value: "+91 94743 36239", sub: "Mon–Sat, 9 AM – 7 PM" },
              { icon: "✉️", label: "Email Us", value: "northbengal@dentacare.in", sub: "We reply within 24 hours" },
              { icon: "💬", label: "WhatsApp", value: "+91  94743 36239", sub: "Quick responses, any time" },
            ].map((item) => (
              <div className="contact-detail" key={item.label}>
                <div className="contact-detail__icon">{item.icon}</div>
                <div>
                  <div className="contact-detail__label">{item.label}</div>
                  <div className="contact-detail__value">{item.value}</div>
                  <div className="contact-detail__sub">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__inner">
                <span>🗺️</span>
                <p> Hakim Para, Siliguri, West Bengal 734001</p>
                <a
                  href="https://maps.google.com/?q=Boring+Road+Patna"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ marginTop: 12, justifyContent: "center" }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="contact-form-card">
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent__icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks <strong>{form.name}</strong>! We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => { setSent(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-card__title">Send a Message</h3>
                <p className="contact-form-card__sub">We'll respond within 24 hours.</p>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="contact-form__field">
                      <label>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                    <div className="contact-form__field">
                      <label>Subject</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us more..." required />
                  </div>
                  <button type="submit" className="btn-primary contact-form__submit">
                    <span>📤</span> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq__header">
            <span className="section-tag">❓ FAQs</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>Common Questions</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: "Do you accept walk-in patients?", a: "Yes! We accept walk-ins, but booking in advance guarantees your preferred time slot and reduces wait time." },
              { q: "What insurance plans do you accept?", a: "We accept most major health insurance plans. Please call us to verify coverage before your visit." },
              { q: "Is parking available?", a: "Yes, free parking is available in our dedicated clinic parking lot on Boring Road." },
              { q: "Do you offer EMI or payment plans?", a: "Absolutely. We offer no-cost EMI for major treatments through leading banks and NBFCs." },
              { q: "How do I prepare for my first visit?", a: "Bring a valid ID, any previous dental records, and arrive 10 minutes early to complete your patient form." },
              { q: "Do you treat children?", a: "Yes! Our dedicated pediatric dentist makes dental visits fun and stress-free for children of all ages." },
            ].map((f, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-item__q">
                  <span className="faq-item__icon">Q</span>
                  {f.q}
                </div>
                <p className="faq-item__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
