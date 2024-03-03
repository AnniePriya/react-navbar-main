import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'; // Import useSpring and animated
import './Footer.css';

const Footer = () => {
  // Add a simple fade-in animation
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.footer style={fadeIn} className="footer">
      <div className="top-footer">
        <p>
          <Link to="/AboutUs">About Us</Link> |{' '}
          <Link to="/Sitemap">Sitemap</Link> |{' '}
          <Link to="/TellAFriend">Tell a Friend</Link> |{' '}
        </p>
      </div>
      <div className="middle-footer">
        <p>Dance Website Info: A cross-Generation Platform</p>
      </div>
      <div className="lower-footer">
        <p className="italic-cursive">Thank you for visiting our website.</p>
      </div>
    </animated.footer>
  );
};

export default Footer;
