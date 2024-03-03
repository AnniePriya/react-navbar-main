import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselSection from './CarouselSection';

import "./Navbar.css";

// Your existing code...

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div>
      {/* Top Header */}
      <header className="top-header">
        <div className="header-content">
          <div className="menu" onClick={handleMenuClick}>
            <span role="img" aria-label="phone icon" className="phone-icon"></span>
            <p>📞Contact: +91 9360959577</p>
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
            <span className="line2">நடனம் உங்கள் கலையில், உங்கள் கையில்!</span>
          </div>
        </Link>
        <div className="menu" onClick={handleMenuClick}>
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
       {/* Carousel Section */}
       <CarouselSection />
    </div>
  );
};
