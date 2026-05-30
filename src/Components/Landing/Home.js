import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [scroll, setScroll] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prev) => (prev <= -1200 ? 0 : prev - 320));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hero carousel autoplay
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  // Counter animation for stats
 // Counter animation for stats
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          let count = 0;
          const updateCounter = () => {
            const increment = target / 50;
            if (count < target) {
              count += increment;
              counter.innerText = Math.ceil(count);
              setTimeout(updateCounter, 20);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
    
    // Yahan cleanup function add karna achha practice hai
    return () => {
      counters.forEach(counter => observer.unobserve(counter));
    };
  }, []); // <--- Ye closing bracket sahi hona chahiye

// Hero carousel slides data
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    title: "DISCOVER THE BEST",
    tagline: "✨ Professional Civil Design Solutions",
    description: "We create premium luxury house elevations, realistic 3D exterior visualizations and modern architectural concepts for your dream home."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop",
    title: "LUXURY LIVING",
    tagline: "✨ Elegant & Modern Designs",
    description: "Transform your dream home into reality with our expert architectural designs and premium quality craftsmanship."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop",
    title: "DREAM PROJECTS",
    tagline: "✨ Innovative Architecture",
    description: "From concept to completion, we bring your vision to life with cutting-edge design and attention to detail."
  }
];

// Testimonials data
const testimonials = [
  { id: 1, name: "Rajesh Kumar", text: "Exceptional design quality! They transformed our vision into reality.", rating: 5 },
  { id: 2, name: "Priya Singh", text: "Professional team with amazing attention to detail.", rating: 5 },
  { id: 3, name: "Amit Verma", text: "Best architectural firm in Darbhanga. Highly recommended!", rating: 5 },
];

// Services data with images
const services = [
  { id: 1, title: "Luxury House Elevations", desc: "Stunning facade designs that make your home stand out.", icon: "🏰", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  { id: 2, title: "3D Exterior Visualization", desc: "Realistic renders showing every detail before construction.", icon: "🎨", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop" },
  { id: 3, title: "Modern Architectural Concepts", desc: "Contemporary designs with innovative space planning.", icon: "🏛️", img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop" },
  { id: 4, title: "Interior Design", desc: "Beautiful spaces that complement your exterior perfectly.", icon: "🛋️", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop" },
  { id: 5, title: "Landscape Planning", desc: "Green spaces with gardens and outdoor living areas.", icon: "🌳", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop" },
  { id: 6, title: "Project Consultation", desc: "Expert advice from concept to completion.", icon: "💡", img: "https://images.unsplash.com/photo-1503387762-592b58aef4ac?w=600&h=400&fit=crop" },
];

return (
  <div className="home-page-container">
    {/* HERO SECTION WITH CAROUSEL */}
    <section className="hero-viewport">
      {/* Carousel Background Images */}
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentHeroSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="dark-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-text-box">
        <p className="hero-mini-tagline">{heroSlides[currentHeroSlide].tagline}</p>
        <h1 className="hero-huge-title">{heroSlides[currentHeroSlide].title}</h1>
        <p className="hero-description">
          {heroSlides[currentHeroSlide].description}
        </p>

        <div className="hero-cta-wrapper">
          <a href="tel:+919999999999" className="action-call-btn">📞 CALL US NOW</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="secondary-btn">
            💬 WHATSAPP
          </a>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentHeroSlide ? 'active' : ''}`}
            onClick={() => setCurrentHeroSlide(index)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse"></div>
      </div>
    </section>

    {/* SERVICES SECTION */}
    <section className="services-section-home">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✨ What We Offer</span>
          <h2>Our Premium Services</h2>
          <p>Comprehensive architectural solutions tailored to your dream home</p>
        </div>
        <div className="services-grid-home">
          {services.map((service) => (
            <div key={service.id} className="service-card-home">
              <div className="service-image-home">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop";
                  }}
                />
                <div className="service-overlay-home">
                  <div className="service-icon-large">{service.icon}</div>
                </div>
              </div>
              <div className="service-content-home">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#" className="service-link-home">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROJECTS SLIDER SECTION */}
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Portfolio</span>
          <h2>Recent Projects</h2>
          <p>Showcasing our best luxury designs and transformations</p>
        </div>
        <div className="slider-container">
          <div className="slider-wrapper" style={{ transform: `translateX(${scroll}px)` }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="slider-card">
                <div className="project-img-box">
                  <img src={`https://picsum.photos/400/300?random=${item}`} alt={`Project ${item}`} />
                  <div className="project-overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <h3>Luxury Villa Project {item}</h3>
                <p>📍 Darbhanga, Bihar</p>
                <div className="project-tags">
                  <span>Modern</span>
                  <span>Premium</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* STATS SECTION */}
    <section className="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🏗️</div>
              <div className="stat-number">
                <span className="counter" data-target="150">0</span>+
              </div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-line"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">😊</div>
              <div className="stat-number">
                <span className="counter" data-target="98">0</span>%
              </div>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-line"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">👨‍🎨</div>
              <div className="stat-number">
                <span className="counter" data-target="45">0</span>+
              </div>
              <div className="stat-label">Expert Architects</div>
              <div className="stat-line"></div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">
                <span className="counter" data-target="8">0</span>+
              </div>
              <div className="stat-label">Years of Excellence</div>
              <div className="stat-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS SECTION */}
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Love</span>
          <h2>What Our Clients Say</h2>
          <p>Real stories from our happy customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
              </div>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US SECTION */}
    <section className="whyus-section">
      <div className="container">
        <div className="whyus-content">
          <div className="whyus-left">
            <span className="section-tag">Why Choose Us</span>
            <h2>We Build Dreams Into Reality</h2>
            <p>With years of experience in luxury architectural design, we bring expertise, creativity, and precision to every project.</p>
            <ul className="whyus-list">
              <li>✓ Free initial consultation</li>
              <li>✓ Detailed 3D visualizations</li>
              <li>✓ Timely project completion</li>
              <li>✓ Affordable premium designs</li>
            </ul>
            <a href="tel:+919999999999" className="action-call-btn outline">Start Your Dream Project</a>
          </div>
          <div className="whyus-right">
            <div className="whyus-image-placeholder">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" alt="Luxury Home" />
              <div className="play-icon">▶</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
);
}

export default Home;