import React, { useEffect, useRef } from 'react';
import './About.css';

const AboutUs = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      icon: "fa-solid fa-drafting-compass",
      title: "Complete Planning",
      desc: "Sapno ke ghar ka blueprint, perfect space utilization ke saath.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format"
    },
    {
      icon: "fa-solid fa-building",
      title: "Structural Design",
      desc: "Mazzboot nivaan, taaki ghar rahe surakshit aur kaayam.",
      image: "https://dreamworldlandscape.com/img/update/STRUCTURAL-DRAWING/HEADER.jpg"
    },
    {
      icon: "fa-solid fa-palette",
      title: "Modern Elevation",
      desc: "Aapka ghar dikhe sabse alag, premium aur stylish facade design.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format"
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Electrical Layout",
      desc: "Safe aur smart wiring, taaki bijli ka har point ho bilkul sahi.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format"
    },
    {
      icon: "fa-solid fa-calculator",
      title: "Estimation",
      desc: "No hidden costs! Sahi budget aur material planning.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format"
    },
    {
      icon: "fa-solid fa-hard-hat",
      title: "Practical Execution",
      desc: "Design se lekar construction tak, hum hai aapke saath.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, idx) => {
              setTimeout(() => {
                card.classList.add("card-visible");
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" ref={sectionRef}>
      <div className="about-header">
        <span className="about-badge">✦ ABOUT US ✦</span>
        <p className="about-subtitle">
          Darbhanga's Most Trusted Engineering Experts
        </p>
        <div className="title-gold-line"></div>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-card"
          >
            {/* Image Section - Height Increased */}
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="image-overlay-gold"></div>
              <div className="image-gold-border"></div>
            </div>

            {/* Card Content */}
            <div className="card-content-wrapper">
              <div className="icon-circle">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="read-more">
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;