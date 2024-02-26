import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Header */}
      <header className="top-header">
        <div className="header-content">
          <div className="contact-info">
            <span role="img" aria-label="phone icon" className="phone-icon">📞</span>
            <p>Contact: +91 9360959577</p>
          </div>
          <div className="social-icons">
            <Link to="/twitter" className="social-icon" aria-label="Twitter">
              <img src="/src/icons8-x-20.png" alt="Twitter icon" />
            </Link>
            <Link to="/instagram" className="social-icon" aria-label="Instagram">
              <img src="/src/icons8-instagram-20.png" alt="Instagram icon" />
            </Link>
          </div>
        </div>
      </header>

      {/* Middle Header (Navigation) */}
      <nav className="middle-header">
        <Link to="/" className="title">
          <img src="/src/logo2.webp" alt="KalaiAttam Logo" className="logo" />
          <div className="text-container">
            <span className="line1">KalaiAttam</span>
            <span className="line2">நாடகம் உங்கள் கலையில், உங்கள் கையில்!</span>
          </div>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
          <NavLink to="/Dance1">Dance1</NavLink>

          </li>
          <li>
            <NavLink to="/Dance2">Dance2</NavLink>
          </li>
          <li>
            <NavLink to="/Dance3">Dance3</NavLink>
          </li>
          <li>
            <NavLink to="/Dance4">Dance4</NavLink>
          </li>
          <li>
            <NavLink to="/CommunityForums">CommunityForums</NavLink>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <div className="top-footer">
         
          <p>
  <Link to="/Aboutus">About Us</Link> |{" "}
  <Link to="/Contactus">Contact Us</Link> |{" "}
  <Link to="/Sitemap">Sitemap</Link> |{" "}
  <Link to="/Tellafriend">Tell a Friend</Link> |{" "}
</p>

          
        </div>
        <div className="middle-footer">
          <p>
            Dance Website Info: A cross-Generation Platform 
          </p>
        </div>
        <div className="lower-footer">
          <p className="italic-cursive">
            Thank you for visiting our website.
          </p>
        </div>
      </footer>
    </div>
  );
};
