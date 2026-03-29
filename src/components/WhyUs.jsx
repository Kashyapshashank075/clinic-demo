import React from "react";
import { stats } from "../data/siteData";
import "./WhyUs.css";

const reasons = [
  { icon: "🏥", title: "State-of-the-Art Equipment", desc: "Digital X-rays, 3D scanning, and laser dentistry for precise, comfortable treatment." },
  { icon: "💉", title: "Pain-Free Procedures", desc: "Advanced anaesthesia techniques so you feel little to no discomfort during any treatment." },
  { icon: "🔒", title: "Strict Sterilisation", desc: "Hospital-grade sterilisation protocols. Your safety and hygiene are non-negotiable." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. Clear treatment plans with cost breakdown before we begin." },
];

const WhyUs = () => (
  <section className="whyus">
    {/* Stats row */}
    <div className="whyus__stats-bar">
      <div className="container whyus__stats-inner">
        {stats.map((s) => (
          <div className="whyus__stat" key={s.label}>
            <span className="whyus__stat-value">{s.value}</span>
            <span className="whyus__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Why Us */}
    <div className="container whyus__body">
      <div className="whyus__left">
        <span className="section-tag">🏆 Why Choose Us</span>
        <h2 className="section-title">
          Dentistry You Can<br />Actually Trust
        </h2>
        <p className="section-subtitle" style={{ marginTop: 14, marginBottom: 32 }}>
          We combine clinical excellence with a warm, welcoming environment — because good dental care is about more than teeth.
        </p>
        <a className="btn-primary" href="#appointment"
          onClick={(e) => { e.preventDefault(); document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" }); }}>
          Get Started Today
        </a>
      </div>

      <div className="whyus__right">
        {reasons.map((r) => (
          <div className="whyus__reason" key={r.title}>
            <div className="whyus__reason-icon">{r.icon}</div>
            <div>
              <h4 className="whyus__reason-title">{r.title}</h4>
              <p className="whyus__reason-desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
