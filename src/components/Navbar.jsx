// Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselSection from './CarouselSection';
import { useSpring, animated } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import "./Navbar.css";
import CardContainer from './CardContainer';
import Footer from "./pages/Footer";
import { CheckCircle, Aperture, GitHub } from 'react-feather';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const props = useSpring({
    opacity: menuOpen ? 1 : 0,
    height: menuOpen ? "100%" : "0%",
  });
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
      <header className="top-header">
        <div className="social-icons">
          <Link to="/facebook" style={{ color: 'black', textDecoration: 'none' }}>
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/twitter" style={{ color: 'black', textDecoration: 'none' }}>
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/instagram" style={{ color: 'black', textDecoration: 'none' }}>
            <i className="fab fa-instagram"></i>
          </Link>
          {/* Add more social media icons as needed */}
        </div>

        <div className="icon-container">
  <Link to="/CommunityForums" className="icon-wrapper" title="Check Circle" style={{ color: 'black', textDecoration: 'none' }}>
    <CheckCircle size={20} />
    <span className="icon-text">Check Circle</span>
  </Link>
  <Link to="/Navbar" className="icon-wrapper" title="Aperture" style={{ color: 'black', textDecoration: 'none' }}>
    <Aperture size={20} />
    <span className="icon-text">Aperture</span>
  </Link>
  <a href="https://github.com/AnniePriya/react-navbar-main" className="icon-wrapper" title="GitHub" style={{ color: 'black', textDecoration: 'none' }}>
    <GitHub size={20} />
    <span className="icon-text">GitHub</span>
  </a>
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
      <div className="app-container">
      {/* Other components or content */}
      <CardContainer />
    </div>
      {/* Animate a div with useSpring */}
      <animated.div style={props}>
        <p>This content will be animated based on menuOpen state.</p>
      </animated.div>
  
      <Footer />
    </div>
  );
};