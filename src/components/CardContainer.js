import React from 'react';
import CardDisplay from './CardDisplay'; // Import your CardDisplay component
import SecondCard from './SecondCard'; // Import your SecondCard component


const CardContainer = () => {
  return (
    <div className="app-container">
      <div className="card-container">
        <CardDisplay /> {/* Render your first card component */}
        <SecondCard /> {/* Render your second card component */}
      </div>
    </div>
  );
};

export default CardContainer;