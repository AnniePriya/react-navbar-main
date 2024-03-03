// NewsHighlights.jsx
import React, { useState } from "react";
import "./NewsHighlights.css"; // Import your stylesheet for styling

const NewsHighlights = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="news-highlights-container">
      <div className="news-title">News Highlights</div>
      <div className="news-highlights-box">
        {/* Your existing content */}
        <div className="arrow left-arrow" onClick={handlePrev}>
          {"<"}
        </div>
        <div className="highlighted-news">
          <h2>{newsData[currentIndex].title}</h2>
          <p>{newsData[currentIndex].content}</p>
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default NewsHighlights;
