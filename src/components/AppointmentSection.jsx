import React from "react";
import { workingHours } from "../data/siteData";
import AppointmentForm from "./AppointmentForm";
import "./AppointmentSection.css";

const AppointmentSection = () => {
  return (
    <section className="appt-section" id="appointment">
      <div className="container appt-section__inner">
        {/* Left - Info + Hours */}
        <div className="appt-section__info">
          <span className="section-tag">📅 Book a Visit</span>
          <h2 className="section-title">
            Schedule Your<br />Appointment Today
          </h2>
          <p className="section-subtitle" style={{ marginTop: 14 }}>
            We make it easy to get the dental care you need. Same-day appointments often available.
          </p>

          {/* Working Hours */}
          <div className="hours-card">
            <h3 className="hours-card__title">
              <span>🕐</span> Working Hours
            </h3>
            <ul className="hours-list">
              {workingHours.map((h, i) => (
                <li className="hours-item" key={i}>
                  <span className="hours-item__day">{h.day}</span>
                  <span className={`hours-item__time ${!h.open ? "hours-item__time--closed" : ""}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact */}
          <div className="appt-section__contacts">
            <a href="tel:+9194743 36239" className="appt-contact-chip">
              <span>📞</span> +91 94743 36239
            </a>
            <a href="https://wa.me/9194743 36239" className="appt-contact-chip appt-contact-chip--green">
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="appt-section__form-card">
          <div className="appt-section__form-header">
            <h3>Book an Appointment</h3>
            <p>Fill in the form and we'll confirm within 2 hours.</p>
          </div>
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
