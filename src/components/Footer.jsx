// Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
