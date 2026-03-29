import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🦷</span>
            <span className="footer__logo-text">DentaCare Clinic</span>
          </div>
          <p className="footer__tagline">
            Your smile is our greatest achievement. Caring for Patna's families since 2009.
          </p>
          <div className="footer__socials">
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Book Appointment", to: "/#appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__list">
            {["General Dentistry", "Teeth Whitening", "Orthodontics", "Dental Implants", "Cosmetic Dentistry", "Emergency Care"].map((s) => (
              <li key={s}><span className="footer__link">{s}</span></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact Us</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-icon">📍</span>
              <span>Boring Road, Patna, Bihar 800001</span>
            </li>
            <li>
              <span className="footer__contact-icon">📞</span>
              <a href="tel:+916125550100">+91 612 555 0100</a>
            </li>
            <li>
              <span className="footer__contact-icon">✉️</span>
              <a href="mailto:hello@dentacare.in">hello@dentacare.in</a>
            </li>
            <li>
              <span className="footer__contact-icon">🕐</span>
              <span>Mon–Fri: 9 AM – 7 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} DentaCare Clinic. All rights reserved.</p>
          <p>Designed with ❤️ for healthy smiles.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
