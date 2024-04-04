// SecondCard.jsx

import React, { useState } from 'react';
import './SecondCard.css'; // Import the CSS file

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

const SecondCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const secondCards = [
    {
      header: 'Event Highlight 1',
      title: 'சங்கமம்-நம்ம-ஊரு-திருவிழா 2023-24',
      text: 'சென்னை நம்ம ஊரு சங்கமம்-நம்ம-ஊரு-திருவிழா நிகழ்ச்சி தொகுப்பு (Day2-5)Linkbelow',
      footer: '3 days ago',
      link: 'https://artandculture.tn.gov.in/event/%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AE%AE%E0%AF%8D-%E0%AE%A8%E0%AE%AE%E0%AF%8D%E0%AE%AE-%E0%AE%8A%E0%AE%B0%E0%AF%81-%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BE-2023-24', // Add the link for the first card
    },
    {
      header: 'Event Highlight 2',
      title: 'Tamil Nadu Day Celebration at Tn Illam Newdelhi',
      text: 'Tamil Nadu Day Celebration at Tn illam Newdelhi Around 35 Artist head by Hemanathan, Regional Assist Director Salem',
      footer: '3 days ago',
      link: 'https://artandculture.tn.gov.in/tamil-nadu-day-celebration-tn-illam-newdelhi',
       // Add the link for the second card
    },
    // Add more cards as needed   
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % secondCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + secondCards.length) % secondCards.length);
  };

  const handleGoSomewhere = () => {
    const currentCard = secondCards[currentCardIndex];
    window.location.href = currentCard.link; // Redirect to the specified link
  };

  return (
    <div className="second-card-container">
      <MDBCard className="second-card" alignment='center'>
        <MDBCardHeader className="second-card-header">
          {secondCards[currentCardIndex].header}
          <div className="second-card-arrows">
            <MDBBtn onClick={goToPrevCard} disabled={currentCardIndex === 0}>
              <i className="bi bi-arrow-left"></i>
            </MDBBtn>
            <MDBBtn onClick={goToNextCard} disabled={currentCardIndex === secondCards.length - 1}>
              <i className="bi bi-arrow-right"></i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{secondCards[currentCardIndex].title}</MDBCardTitle>
          <MDBCardText>{secondCards[currentCardIndex].text}</MDBCardText>
          <MDBBtn onClick={handleGoSomewhere} className="second-card-footer-btn">
            Visit
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>{secondCards[currentCardIndex].footer}</MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default SecondCard;
