import React from "react";
import { team } from "../data/siteData";
import AppointmentForm from "../components/AppointmentForm";
import "./About.css";

const milestones = [
  { year: "2009", title: "Founded", desc: "DentaCare opened its doors in Boring Road, Patna with 2 dentists and a dream." },
  { year: "2013", title: "Expanded", desc: "Added orthodontics and cosmetic dentistry, growing to a team of 6 specialists." },
  { year: "2017", title: "Tech Upgrade", desc: "Introduced digital X-rays, 3D cone beam CT scanning, and laser dentistry." },
  { year: "2021", title: "5,000 Patients", desc: "Crossed 5,000 happy patients and launched our children's dental wing." },
  { year: "2024", title: "Award-Winning", desc: "Recognised as Bihar's Best Dental Clinic by Health Excellence Awards." },
];

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="container about-hero__content">
          <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>🏥 About Us</span>
          <h1 className="about-hero__title">
            Caring for Patna's<br />Smiles Since 2009
          </h1>
          <p className="about-hero__desc">
            We're more than a dental clinic — we're your long-term partners in oral health. Meet the passionate team behind every bright smile.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container about-mission__inner">
          <div>
            <span className="section-tag">🎯 Our Mission</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>
              Dentistry That Puts<br />People First
            </h2>
            <p className="section-subtitle" style={{ marginTop: 14 }}>
              We believe everyone deserves access to excellent dental care in a comfortable, judgment-free environment. Our clinic combines the latest technology with a deeply human touch — because behind every tooth is a person who deserves to smile freely.
            </p>
            <div className="about-mission__values">
              {[
                { icon: "❤️", label: "Compassionate Care" },
                { icon: "🔬", label: "Clinical Excellence" },
                { icon: "🤝", label: "Patient Partnership" },
                { icon: "🌱", label: "Continuous Learning" },
              ].map((v) => (
                <div className="about-mission__value" key={v.label}>
                  <span>{v.icon}</span> {v.label}
                </div>
              ))}
            </div>
          </div>
          <div className="about-mission__card">
            <div className="about-mission__quote">
              "Every patient who walks through our doors deserves to leave with a brighter smile and complete confidence in their dental health."
            </div>
            <div className="about-mission__cite">
              <div className="about-mission__avatar" style={{ background: "#0a7c6e" }}>MK</div>
              <div>
                <strong>Dr. Meera Kapoor</strong>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>Founder & Chief Dental Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <div className="about-timeline__header">
            <span className="section-tag">📅 Our Journey</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>15 Years of Smiles</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`} key={m.year}>
                <div className="timeline__dot">{m.year}</div>
                <div className="timeline__card">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="about-team__header">
            <span className="section-tag">👩‍⚕️ Our Experts</span>
            <h2 className="section-title" style={{ marginTop: 8 }}>Meet the Team</h2>
            <p className="section-subtitle" style={{ margin: "12px auto 0" }}>
              Our dentists bring decades of combined experience and genuine passion for patient care.
            </p>
          </div>
          <div className="team-grid">
            {team.map((t) => (
              <div className="team-card" key={t.name}>
                <div className="team-card__avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <h3 className="team-card__name">{t.name}</h3>
                <div className="team-card__role">{t.role}</div>
                <div className="team-card__tags">
                  <span>🎓 {t.exp}</span>
                  <span>🔬 {t.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="about-appt">
        <div className="container about-appt__inner">
          <div className="about-appt__info">
            <span className="section-tag">📅 Book a Visit</span>
            <h2 className="section-title" style={{ marginTop: 8, color: "#fff" }}>
              Ready to Meet Us?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", marginTop: 12, fontSize: 16, lineHeight: 1.7 }}>
              Schedule an appointment today. We'd love to be your family's dental home.
            </p>
          </div>
          <div className="about-appt__form">
            <AppointmentForm compact />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
