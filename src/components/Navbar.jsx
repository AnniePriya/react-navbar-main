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
import Footer from "./pages/Footer";

import NewsHighlights from "./Newshighlights";

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

  const newsData = [
    { title: "HighLight 1", content: "Scheme for Scholarships to Young Artistes in Different Cultural Fields",subDescription: "DETAIL : Find information on Scheme for Scholarships to Young Artistes in Different Cultural Fields by Ministry of Culture. Information about the scheme, its scope, number of scholarships, fields, eligibility and duration of scholarship is given. Users can get details about documents required and indicative list of folk, traditional and indigenous art." },
    { title: "Highlight 2", content: "Scheme for the Award of Fellowships to Outstanding Persons in the Field of Culture",subDescription: "DETAIL : Information on Scheme for the Award of Fellowships to Outstanding Persons in the Field of Culture by Ministry of Culture is available. Users can get details related to scheme, its objective, fields, number of fellowships, publishing grant, eligibility, conditions, procedure of selection and disbursing authority." },
    // Add more news items as needed
  ];

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

      {/* News Highlights Section */}
      <NewsHighlights newsData={newsData} />
      {/* Animate a div with useSpring */}
      <animated.div style={props}>
        <p>This content will be animated based on menuOpen state.</p>
      </animated.div>
      {/* News Highlights Section */}
      <Footer />
    </div>
  );
};
