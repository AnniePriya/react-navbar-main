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
      header: 'News Highlight 1',
      title: 'Apply for the post of Folk Art Instructors and Supervisors for Part Time Folk Art Training Center',
      text: 'Press Release 18.12.2023',
      footer: '2 days ago',
      link: 'https://artandculture.tn.gov.in/apply-post-folk-art-instructors-and-supervisors-part-time-folk-art%C2%A0training%C2%A0center-0', // Add the link for the first card
    },
    {
      header: 'News Highlight 2',
      title: 'Application Invited for District Art Awards for the year 2022-2023 & 2023-2024',
      text: 'pr300523_1052',
      footer: '2 days ago',
      link: 'https://artandculture.tn.gov.in/application-invited-district-art-awards-year-2022-2023-2023-2024', // Add the link for the second card
    },
    // Add more cards as needed
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % featuredCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + featuredCards.length) % featuredCards.length);
  };

  const handleGoSomewhere = () => {
    const currentCard = featuredCards[currentCardIndex];
    window.location.href = currentCard.link; // Redirect to the specified link
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
          <MDBBtn onClick={handleGoSomewhere} className="card-footer-btn">
            Visit
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>{featuredCards[currentCardIndex].footer}</MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default CardDisplay;
