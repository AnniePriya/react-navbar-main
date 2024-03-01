import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export const Dance2 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="column" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Image on the left side */}
      <div style={{ width: '50%', textAlign: 'center', padding: '5%' }}>
        {/* Your image component goes here */}
        <img src="images/bhar.png" alt="Your Image" style={{ width: '55%', height: '80%', maxWidth: '800px', maxHeight: '800px' }} />
      </div>

      {/* Content for the tabs on the right side */}
      <div className="column" style={{ width: '60%' }}>
        <table style={{ border: '1px solid #ccc', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '10px', width: '90%', height: '80%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" style={{ width: '100%', backgroundColor: '#404040', color: '#fff' }}>
            <Tab icon={<DescriptionIcon />} label="ARTICLES" value={0} style={{ width: '25%' , color:"white"}} />
            <Tab icon={<LiveTvIcon />} label="VIDEOS" value={1} style={{ width: '25%', color:"white" }} />
            <Tab icon={<LocalLibraryIcon />} label="NEWS" value={2} style={{ width: '25%', color:"white" }} />
            <Tab icon={<EventIcon />} label="EVENTS" value={3} style={{ width: '25%', color:"white"}} /> {/* New tab with ChatIcon */}
          </Tabs>
          {/* Content based on the selected tab */}
          {value === 0 && (
            <div style={{ textAlign: 'center', padding: '10%' }}>
              <h2>Articles Content</h2>
              <p>This is the content for the Articles tab.</p>
            </div>
          )}
          {value === 1 && (
            <div style={{ textAlign: 'center', padding: '10%' }}>
              <h2>Videos Content</h2>
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
  );
};
