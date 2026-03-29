import React, { useState } from "react";
import "./OurWork.css";

const cases = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    type: "Cosmetic Dentistry",
    desc: "Porcelain veneers + whitening transformed a misaligned smile into a stunning one in just 2 visits.",
    before: { label: "Discoloured, uneven", icon: "😬" },
    after: { label: "Bright, uniform, confident", icon: "😁" },
    color: "#e6f5f3",
  },
  {
    id: 2,
    title: "Dental Implant Restoration",
    type: "Implantology",
    desc: "Single missing molar replaced with a titanium implant — indistinguishable from natural teeth.",
    before: { label: "Missing tooth, bone loss", icon: "😟" },
    after: { label: "Full function restored", icon: "😊" },
    color: "#fff9e6",
  },
  {
    id: 3,
    title: "Orthodontic Treatment",
    type: "Orthodontics",
    desc: "Clear aligners corrected crowding and spacing issues over 8 months — no metal braces.",
    before: { label: "Crowded, overlapping", icon: "😕" },
    after: { label: "Straight, balanced smile", icon: "🤩" },
    color: "#f0e6f5",
  },
];

const stats = [
  { value: "2,400+", label: "Smile Transformations" },
  { value: "500+", label: "Implants Placed" },
  { value: "98%", label: "Would Recommend Us" },
];

const OurWork = () => {
  const [activeCase, setActiveCase] = useState(0);
  const c = cases[activeCase];

  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work__header">
          <span className="section-tag">✨ Our Work</span>
          <h2 className="section-title">Smile Transformations</h2>
          <p className="section-subtitle" style={{ margin: "14px auto 0" }}>
            Real patients, real results. Every smile tells a story of renewed confidence.
          </p>
        </div>

        {/* Stats bar */}
        <div className="work__stats">
          {stats.map((s) => (
            <div className="work__stat" key={s.label}>
              <span className="work__stat-val">{s.value}</span>
              <span className="work__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Case tabs */}
        <div className="work__tabs">
          {cases.map((c, i) => (
            <button
              key={c.id}
              className={`work__tab ${i === activeCase ? "work__tab--active" : ""}`}
              onClick={() => setActiveCase(i)}
            >
              {c.type}
            </button>
          ))}
        </div>

        {/* Case display */}
        <div className="work__case" style={{ "--case-color": c.color }}>
          <div className="work__before-after">
            <div className="work__ba-card work__ba-card--before">
              <div className="work__ba-label">Before</div>
              <div className="work__ba-icon">{c.before.icon}</div>
              <div className="work__ba-desc">{c.before.label}</div>
            </div>
            <div className="work__ba-arrow">→</div>
            <div className="work__ba-card work__ba-card--after">
              <div className="work__ba-label">After</div>
              <div className="work__ba-icon">{c.after.icon}</div>
              <div className="work__ba-desc">{c.after.label}</div>
            </div>
          </div>

          <div className="work__case-info">
            <span className="work__case-type">{c.type}</span>
            <h3 className="work__case-title">{c.title}</h3>
            <p className="work__case-desc">{c.desc}</p>
            <div className="work__case-badge">
              <span>✅</span> Real Patient Result
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
