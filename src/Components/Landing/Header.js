import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Link ki jagah NavLink
import "./Header.css";
import Logo from "../Dashboard/assests/VisionLOGO1.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <div className="nav-logo1">
            <img src={Logo} alt="Vision Civil Design Logo" />
          </div>
          <div>
            VISION <span className="logo-highlight">CIVIL DESIGN</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/services">SERVICES</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>

        </ul>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="mobile-nav-links">
          <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} end>HOME</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>SERVICES</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink></li>
          <li><NavLink to="/login" onClick={() => setIsMenuOpen(false)}>LOGIN</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Header;