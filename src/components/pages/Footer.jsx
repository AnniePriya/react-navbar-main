import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles
import './Footer.css';

const Footer = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <div>
      {/* Colored line at the top */}
      <div className="colored-line">
        <div className="red-line"></div>
        <div className="yellow-line"></div>
        <div className="green-line"></div>
      </div>

      {/* Animated footer */}
      <animated.footer style={fadeIn} className="footer">
        {/* Glowing title */}
        <div className="glowing-title">
          <p className="italic-cursive">Dance Website: "A Cross Generation Platform"</p>
        </div>

        {/* Partially done line below the title */}
        <div className="partially-done-line"></div>

        {/* Top footer with links */}
        <div className="top-footer">
          <p>
            <Link to="/AboutUs">About Us</Link> |{' '}
            <Link to="/Sitemap">Sitemap</Link> |{' '}
            <Link to="/TellAFriend">Tell a Friend</Link> |{' '}
            <Link to="/Artint">Art Institutions</Link> |{' '}
            <Link to="/Tac">Terms and Conditions</Link> |{' '}
            <Link to="/Webpolicy">Website Policy</Link> |{' '}
          </p>
        </div>
        {/* Partially done line below the title */}
        <div className="partially-done-line"></div>

        {/* Lower footer with logo and details */}
        <div className="lower-footer">
          {/* Left section with small logo */}
          <div className="footer-logo">
            <img src="/src/logo2.webp" alt="Logo" style={{ width: '50px', height: 'auto' }} />
          </div>

          {/* Right section with details and icons */}
          <div className="footer-details">
            <p>
              <i className="fas fa-map-marker-alt"></i> Nungambakkam, Chennai
            </p>
            <p>
              <i className="fas fa-phone"></i> Phone: +91 123 456 7890, +91 987 654 3210
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email: example@example.com
            </p>
          </div>

          {/* Social media icons and additional links */}
          <div className="social-icons">
            <a href="#" className="icon-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </animated.footer>
    </div>
  );
};

export default Footer;
