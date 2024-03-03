import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Navbarpages.css'; 

export const Dance3 = () => {
  const [value, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <header className="top-header">
        <div className="header-content">
          <div className="menu" onClick={handleMenuClick}>
            <span role="img" aria-label="phone icon" className="phone-icon">📞 Contact: +91 9360959577</span>
           
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

      {/* Content for Dance2 */}
      <div className="column" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Image on the left side */}
        <div style={{ width: '50%', textAlign: 'center', padding: '5%' }}>
          {/* Your image component goes here */}
          <img src="/public/images/kara.jpeg" alt="Your Image" style={{ width: '55%', height: '80%', maxWidth: '800px', maxHeight: '800px' }} />
        </div>

        {/* Content for the tabs on the right side */}
        <div className="column" style={{ width: '60%' }}>
          <table style={{ border: '1px solid #ccc', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '10px', width: '90%', height: '80%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" style={{ width: '100%', backgroundColor: '#404040', color: '#fff' }}>
              <Tab icon={<DescriptionIcon />} label="ARTICLES" value={0} style={{ width: '25%', color: 'white' }} />
              <Tab icon={<LiveTvIcon />} label="VIDEOS" value={1} style={{ width: '25%', color: 'white' }} />
              <Tab icon={<LocalLibraryIcon />} label="NEWS" value={2} style={{ width: '25%', color: 'white' }} />
              <Tab icon={<EventIcon />} label="EVENTS" value={3} style={{ width: '25%', color: 'white' }} />
            </Tabs>
            {/* Content based on the selected tab */}
            {value === 0 && (
              <div style={{ textAlign: 'center', padding: '10%' }}>
                <h2>Articles Content </h2>
                <p>This is the content for the Articles tab.</p>
              </div>
            )}
            {value === 1 && (
              <div style={{ textAlign: 'center', padding: '10%' }}>
                <h2>Videos Content </h2>
                <p>This is the content for the Videos tab.</p>
              </div>
            )}
            {value === 2 && (
              <div style={{ textAlign: 'center', padding: '10%' }}>
                <h2>News Content</h2>
                <p>This is the content for the News tab.</p>
              </div>
            )}
            {value === 3 && (
              <div style={{ textAlign: 'center', padding: '10%' }}>
                <h2>Events Content</h2>
                <p>This is the content for the Events tab.</p>
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
