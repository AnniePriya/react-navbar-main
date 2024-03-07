// CardContainer.jsx

import React from 'react';
import CardDisplay from './CardDisplay';
import SecondCard from './SecondCard';

const CardContainer = () => {
  return (
    <div className="card-row-container">
      <CardDisplay />
      <SecondCard />
    </div>
  );
};

export default CardContainer;
