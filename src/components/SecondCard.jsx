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
      header: 'Second Card 1',
      title: 'Special title treatment 1',
      text: 'With supporting text below as a natural lead-in to additional content.',
      footer: '3 days ago',
    },
    {
      header: 'Second Card 2',
      title: 'Special title treatment 2',
      text: 'With supporting text below as a natural lead-in to additional content.',
      footer: '3 days ago',
    },
    // Add more cards as needed
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % secondCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + secondCards.length) % secondCards.length);
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
          <MDBBtn href='#' className="second-card-footer-btn">
            Go somewhere
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>{secondCards[currentCardIndex].footer}</MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default SecondCard;
