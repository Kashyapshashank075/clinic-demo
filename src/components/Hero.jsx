import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const scrollToAppointment = () => {
    document
      .getElementById("appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="container hero__inner">
        {/* Left */}
        <div className="hero__content animate-fadeUp">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Siliguri's Most Trusted Dental Clinic
          </div>

          <h1 className="hero__title">
            Beautiful Smiles
            <br />
            <span className="hero__title-accent">Start Here.</span>
          </h1>

          <p className="hero__desc">
            Expert dental care with a gentle touch. From routine cleanings to
            complete smile makeovers — we make every visit comfortable and every
            result stunning.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={scrollToAppointment}>
              📅 Book Appointment
            </button>
            <Link to="/about" className="btn-outline">
              Meet Our Team →
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">⭐</span>
              <span>
                <strong>4.9/5</strong> Rating
              </span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-icon">👥</span>
              <span>
                <strong>8,500+</strong> Patients
              </span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🏆</span>
              <span>
                <strong>15+</strong> Years
              </span>
            </div>
          </div>
        </div>

        {/* Right – visual card */}
        <div className="hero__visual animate-fadeIn">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-avatar">
                <span>👨‍⚕️</span>
              </div>
              <div>
                <div className="hero__card-name"> Dr. Abhijit Nag</div>
              </div>
              <div className="hero__card-online">
                <span /> Available
              </div>
            </div>
           
            <div className="hero__card-divider" />
            <div className="hero__card-stats">
              <div className="hero__card-stat">
                <span className="hero__card-stat-val">98%</span>
                <span className="hero__card-stat-label">Satisfaction</span>
              </div>
              <div className="hero__card-stat">
                <span className="hero__card-stat-val">15yr</span>
                <span className="hero__card-stat-label">Experience</span>
              </div>
              <div className="hero__card-stat">
                <span className="hero__card-stat-val">4.9★</span>
                <span className="hero__card-stat-label">Rating</span>
              </div>
            </div>
            <div className="hero__card-note">
              <span>📅</span>
              <span>
                Next available: <strong>Today at 2:00 PM</strong>
              </span>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__float hero__float--1">
            <span>✅</span> Pain-Free Treatment
          </div>
          <div className="hero__float hero__float--2">
            <span>🛡️</span> ISO Certified Clinic
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span />
      </div>
    </section>
  );
};

export default Hero;
