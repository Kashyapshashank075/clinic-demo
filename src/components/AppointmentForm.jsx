import React, { useState } from "react";
import "./AppointmentForm.css";

const SERVICES = [
  "General Check-up",
  "Teeth Whitening",
  "Orthodontics",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Emergency Care",
  "Other",
];

const AppointmentForm = ({ compact = false }) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.service) e.service = "Please select a service";
    if (!form.date) e.date = "Please pick a date";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="appt-success">
        <div className="appt-success__icon">✅</div>
        <h3>Appointment Requested!</h3>
        <p>Thank you, <strong>{form.name}</strong>! We'll call you within 2 hours to confirm your appointment.</p>
        <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", email:"", service:"", date:"", time:"", message:"" }); }}>
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form className={`appt-form ${compact ? "appt-form--compact" : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="appt-form__row">
        <div className="appt-form__field">
          <label>Full Name *</label>
          <input
            type="text" name="name" value={form.name}
            onChange={handleChange} placeholder="e.g. Priya Sharma"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="appt-form__error">{errors.name}</span>}
        </div>
        <div className="appt-form__field">
          <label>Phone Number *</label>
          <input
            type="tel" name="phone" value={form.phone}
            onChange={handleChange} placeholder="+91 98765 43210"
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <span className="appt-form__error">{errors.phone}</span>}
        </div>
      </div>

      <div className="appt-form__row">
        <div className="appt-form__field">
          <label>Email Address</label>
          <input
            type="email" name="email" value={form.email}
            onChange={handleChange} placeholder="you@email.com"
          />
        </div>
        <div className="appt-form__field">
          <label>Service Required *</label>
          <select name="service" value={form.service} onChange={handleChange} className={errors.service ? "error" : ""}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <span className="appt-form__error">{errors.service}</span>}
        </div>
      </div>

      <div className="appt-form__row">
        <div className="appt-form__field">
          <label>Preferred Date *</label>
          <input
            type="date" name="date" value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={errors.date ? "error" : ""}
          />
          {errors.date && <span className="appt-form__error">{errors.date}</span>}
        </div>
        <div className="appt-form__field">
          <label>Preferred Time</label>
          <select name="time" value={form.time} onChange={handleChange}>
            <option value="">Any time</option>
            {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div className="appt-form__field">
          <label>Additional Notes</label>
          <textarea
            name="message" value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your concern or any special requirements..."
            rows={3}
          />
        </div>
      )}

      <button type="submit" className="btn-primary appt-form__submit">
        <span>📅</span> Confirm Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
