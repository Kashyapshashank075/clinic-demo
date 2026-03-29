import React, { useState } from "react";
import { reviews } from "../data/siteData";
import "./Reviews.css";

const Stars = ({ count = 5 }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </div>
);

const Reviews = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews__header">
          <span className="section-tag">💬 Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle" style={{ margin: "14px auto 0" }}>
            Don't just take our word for it — hear from thousands of happy smiles across Patna.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className={`review-card ${i === active ? "review-card--featured" : ""}`}
              onClick={() => setActive(i)}
            >
              <Stars />
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <div
                  className="review-card__avatar"
                  style={{ background: r.color }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__date">{r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Banner */}
        <div className="reviews__banner">
          <div className="reviews__banner-rating">
            <span className="reviews__banner-score">4.9</span>
            <Stars />
            <span className="reviews__banner-count">Based on 1,200+ reviews</span>
          </div>
          <div className="reviews__banner-divider" />
          <div className="reviews__banner-platforms">
            <span className="reviews__platform-badge">🌐 Google Reviews</span>
            <span className="reviews__platform-badge">📘 Facebook</span>
            <span className="reviews__platform-badge">🏥 Practo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
