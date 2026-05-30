import React, { useEffect, useRef } from "react";
import "./Services.css";

function Services() {
  const gridRef = useRef(null);

  // Deep Premium HD Unsplash Architecture & Engineering Vectors - ALL WORKING IMAGES
  const serviceData = [
    {
      title: "ARCHITECTURAL PLANNING",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format", 
      items: [
        "2D Floor Plan",
        "Smart Space Planning",
        "Duplex & Residential Design",
        "Vastu Based Planning",
        "Working Drawing Detail"
      ]
    },
    {
      title: "STRUCTURAL DESIGN",
      image: "https://images.unsplash.com/photo-1503387762-592b58aef4ac?w=800&auto=format", 
      items: [
        "RCC Structural Drawing",
        "Column & Beam Design",
        "Footing Layout",
        "Slab Reinforcement Detail",
        "Safe & Strong Structure Planning"
      ]
    },
    {
      title: "3D ELEVATION DESIGN",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format", 
      items: [
        "Modern Front Elevation",
        "Exterior Visualization",
        "Luxury House Design",
        "Contemporary Elevation Concept",
        "Realistic 3D View"
      ]
    },
    {
      title: "ELECTRICAL & PLUMBING",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format", 
      items: [
        "Electrical Layout Plan",
        "Light & Switch Detail",
        "Plumbing Line Drawing",
        "Functional Utility Design"
      ]
    },
    {
      title: "ESTIMATION & BOQ",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format", 
      items: [
        "Material Estimation",
        "BOQ Preparation",
        "Cost Analysis",
        "Construction Quantity Detail"
      ]
    },
    {
      title: "LUXURY ELEVATIONS",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format",
      items: [
        "Premium Facade Design",
        "Royal Entrance Look",
        "Luxury Villa Elevation",
        "Glass & Stone Cladding",
        "High-End Architectural Finish"
      ]
    },
    {
      title: "3D VISUALIZATION",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format",
      items: [
        "Realistic Renders",
        "Walkthrough Animation",
        "VR & AR Presentation",
        "Day & Night Views",
        "Material & Lighting Simulation"
      ]
    },
    {
      title: "MODERN ARCHITECTURE",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format",
      items: [
        "Contemporary House Design",
        "Minimalist Architecture",
        "Sustainable Building",
        "Smart Home Integration",
        "Biophilic Design Elements"
      ]
    },
    {
      title: "INTERIOR DESIGN",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format",
      items: [
        "Living Room Design",
        "Bedroom Styling",
        "Modular Kitchen",
        "False Ceiling Design",
        "Furniture Layout & Color Palette"
      ]
    },
    {
      title: "LANDSCAPE PLANNING",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format",
      items: [
        "Garden Layout Design",
        "Terrace Garden Planning",
        "Lawn & Plantation",
        "Water Feature Integration",
        "Outdoor Lighting & Pathway"
      ]
    }
  ];

  // Scroll active animation trigger using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-premium-card");
            cards.forEach((card, idx) => {
              setTimeout(() => {
                card.classList.add("reveal-active");
              }, idx * 150); // Fluid Staggered Entrance delay
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      
      {/* SECTION HEADER BLOCK */}
      <div className="services-header-box">
        <p className="services-mini-title">WHAT WE OFFER</p>
        <h2 className="services-main-title">OUR PROFESSIONAL SERVICES</h2>
        <div className="title-gold-line"></div>
      </div>

      {/* COMPACT INTERACTIVE SERVICES GRID CONTAINER */}
      <div className="services-grid-wrapper" ref={gridRef}>
        {serviceData.map((service, index) => (
          <div className="service-premium-card" key={index}>
            
            {/* HD IMAGE VISUAL BOX */}
            <div className="service-card-image-box">
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-card-img"
                loading="lazy"
                onError={(e) => {
                  // Fallback image if original fails to load
                  e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format";
                }}
              />
              <div className="image-gold-gradient-overlay"></div>
            </div>
            
            {/* CARD MAIN TEXT CONTENT BODY */}
            <div className="service-card-body">
              <h3 className="service-card-title">{service.title}</h3>
              
              <ul className="service-item-list">
                {service.items.map((item, idx) => (
                  <li key={idx} style={{ "--item-idx": idx }}>
                    <span className="bullet-glow">🔹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;