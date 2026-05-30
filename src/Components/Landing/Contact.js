import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", msg: "" });

  // Floating Entry Scroll Animation Trigger System
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your consultancy request sent successfully.`);
    setFormData({ name: "", phone: "", email: "", msg: "" });
  };

  return (
    <section className="contact-premium-section" id="contact" ref={contactRef}>

      {/* BACKGROUND GRAPHIC BLOBS */}
      <div className="bg-glow-blob blob-gold"></div>
      <div className="bg-glow-blob blob-slate"></div>

      <div className="contact-main-container">

        {/* ==========================================
           LEFT SIDE CARD: ENGINEER PROFILE & CARD INFO
           ========================================== */}
        <div className="profile-identity-card">
          <div className="premium-badge">CIVIL ENGINEER</div>

          <h2 className="engineer-name">Bablu Kumar</h2>
          <p className="engineer-subtitle">Civil & Structural Planner</p>

          <div className="tagline-marquee-box">
            <span className="tag-quote">"</span>
            <p className="active-tagline">Designing Dreams Into Reality</p>
            <div className="tag-sub-features">
              <span>📐 Planning</span> • <span>🏗️ Structure</span> • <span>🎨 Elevation</span>
            </div>
          </div>

          <div className="divider-line-gold"></div>

          {/* CONTACT METHOD LIST PLUGS */}
          <div className="contact-quick-links">
            <a href="tel:+918092294253" className="info-row-item">
              <div className="icon-sphere-btn">📞</div>
              <div className="info-text-details">
                <span>CALL OR WHATSAPP NOW</span>
                <strong>+91 8092294253</strong>
              </div>
            </a>

            <div className="info-row-item">
              <div className="icon-sphere-btn">📍</div>
              <div className="info-text-details">
                <span>OFFICE LOCATION</span>
                <strong>Darbhanga Dili Mor, Bihar</strong>
              </div>
            </div>
          </div>

          {/* DIRECT CALL ACTION HOTSPOT BUTTON */}
          <a href="tel:+918092294253" className="action-glow-call-btn">
            <span>GET FREE CONSULTATION</span>
            <div className="arrow-pulse">⚡</div>
          </a>
        </div>

        {/* ==========================================
           RIGHT SIDE CARD: INTERACTIVE ENQUIRY FORM
           ========================================== */}
        <div className="interactive-form-card">
          <h3 className="form-card-title">Book Site Visit / Consultation</h3>
          <p className="form-card-desc">Apne dream project ke details fill karein, hum aapse jald hi contact karenge.</p>

          <form onSubmit={handleSubmit} className="actual-contact-form">
            <div className="input-field-group">
              <input
                type="text" name="name" required value={formData.name} onChange={handleChange}
                placeholder="Your Name *" className="premium-form-input"
              />
            </div>

            <div className="input-field-group">
              <input
                type="tel" name="phone" required maxLength="10" value={formData.phone} onChange={handleChange}
                placeholder="Phone Number *" className="premium-form-input"
              />
            </div>

            <div className="input-field-group">
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email Address (Optional)" className="premium-form-input"
              />
            </div>

            <div className="input-field-group">
              <textarea
                name="msg" required rows="4" value={formData.msg} onChange={handleChange}
                placeholder="Project Requirements (e.g., 2D Plan, 3D Elevation, Area size...)*"
                className="premium-form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="form-submit-premium-btn">
              SEND REQUIREMENT
            </button>
          </form>


        </div>


      </div>


    </section>


  );
}

export default Contact;