import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">🏰</span>
              <span className="logo-text">Luxury<span>Design</span></span>
            </div>
            <p className="footer-description">
              We create premium luxury house elevations, realistic 3D exterior visualizations
              and modern architectural concepts for your dream home.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="social-icon facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer" className="social-icon instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="social-icon whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.164-.571c.958.53 2.062.81 3.163.811h.003c3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.392 8.244c-.144.405-.837.776-1.17.824-.299.045-.677.063-1.092-.207-.479-.311-1.095-.76-1.86-1.468-.914-.844-1.527-1.715-1.737-2.107-.21-.391-.222-.741-.065-1.046.113-.22.333-.469.5-.704.153-.216.203-.352.301-.573.098-.22.048-.425-.029-.566-.076-.141-.332-.809-.461-1.109-.124-.291-.248-.246-.338-.25-.085-.005-.184-.005-.283-.005-.232 0-.543.108-.828.54-.286.432-.944 1.095-1.031 2.273-.087 1.178.483 2.228.727 2.679.244.451 1.277 2.024 3.023 2.784 1.745.76 1.745.511 2.113.475.368-.036 1.099-.492 1.243-1.006.144-.514.144-.928.049-1.118-.095-.19-.347-.309-.721-.54-.373-.232-1.095-.599-1.265-.667-.169-.068-.293-.102-.417.101-.124.203-.48.666-.588.802-.108.136-.216.153-.399.051-.184-.102-.777-.287-1.479-.905-.672-.592-1.116-1.312-1.244-1.524-.129-.212-.031-.327.096-.433.114-.096.254-.254.381-.38.128-.128.169-.213.254-.354.085-.141.042-.266-.021-.376-.064-.11-.371-.883-.508-1.212-.134-.32-.27-.277-.369-.282-.093-.005-.199-.005-.304-.005-.227 0-.564.068-.878.467-.315.398-1.216 1.189-1.216 2.891 0 1.702 1.239 3.348 1.412 3.579.174.231 2.514 3.836 6.034 4.938.825.258 1.611.36 2.229.412.716.063 1.424.032 1.987-.115.822-.215 1.526-.72 1.726-1.412.207-.706.207-1.391.146-1.522-.061-.131-.226-.212-.474-.332s-1.121-.537-1.176-.576c-.055-.039-.129-.039-.168.039-.101.18-.357.575-.457.693-.1.118-.166.167-.295.1-.129-.067-.591-.251-1.107-.688-.515-.438-1.066-1.041-1.201-1.321-.135-.28-.015-.43.099-.566.099-.118.216-.275.304-.39.088-.115.117-.202.166-.326.049-.124.024-.231-.012-.318-.036-.087-.318-.746-.521-1.044-.2-.292-.413-.247-.557-.252-.119-.005-.255-.005-.39-.005z" />
                </svg>
              </a>
            </div></div>

          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>🏠 Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>✨ About Us</Link></li>
              <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>🛠️ Our Services</Link></li>

              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>📞 Contact Us</Link></li>
            </ul>
          </div>



          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📍</span>
                <span>Darbhanga, Bihar, India</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span className="links">
                  <a href="tel:+918092294253">+91 8092294253</a>
                </span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>
                  <a href="mailto:info@luxurydesign.com">info@luxurydesign.com</a>
                </span>
              </li>
              <li>
                <span className="contact-icon">⏰</span>
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p>&copy; {currentYear} Developed By Chanchal Kumar Yadav & Prateek Pandey </p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;