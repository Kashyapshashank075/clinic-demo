import React from "react";
import { services } from "../data/siteData";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-tag">🔬 Our Services</span>
          <h2 className="section-title">Comprehensive Dental Care</h2>
          <p className="section-subtitle">
            From preventive care to advanced cosmetic treatments, we offer a full spectrum of dental services tailored to your needs.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, idx) => (
            <div
              className="service-card"
              key={service.id}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className="service-card__icon"
                style={{ background: service.color }}
              >
                <span>{service.icon}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__link">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
