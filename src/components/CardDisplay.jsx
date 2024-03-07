// CardDisplay.jsx

import React, { useState } from 'react';
import './CardDisplay.css';

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

const CardDisplay = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const featuredCards = [
    {
      header: 'Featured 1',
      title: 'Special title treatment 1',
      text: 'With supporting text below as a natural lead-in to additional content.',
      footer: '2 days ago',
    },
    {
      header: 'Featured 2',
      title: 'Special title treatment 2',
      text: 'With supporting text below as a natural lead-in to additional content.',
      footer: '2 days ago',
    },
    // Add more cards as needed
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % featuredCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + featuredCards.length) % featuredCards.length);
  };

  return (
    <div className="card-container">
      <MDBCard className="card" alignment='center'>
        <MDBCardHeader className="card-header">
          {featuredCards[currentCardIndex].header}
          <div className="card-arrows">
            <MDBBtn onClick={goToPrevCard} disabled={currentCardIndex === 0}>
              <i className="bi bi-arrow-left"></i>
            </MDBBtn>
            <MDBBtn onClick={goToNextCard} disabled={currentCardIndex === featuredCards.length - 1}>
              <i className="bi bi-arrow-right"></i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{featuredCards[currentCardIndex].title}</MDBCardTitle>
          <MDBCardText>{featuredCards[currentCardIndex].text}</MDBCardText>
          <MDBBtn href='#' className="card-footer-btn">
            Go somewhere
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>{featuredCards[currentCardIndex].footer}</MDBCardFooter>
      </MDBCard>
     
    </div>
  );
};

export default CardDisplay;
