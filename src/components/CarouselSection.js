// CarouselSection.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css'
import './CarouselStyles.css';

const CarouselSection = () => {
  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img src="/carousel_images/img1.jpg" alt="Slide 1" />
        <img src="/carousel_images/img2.jpg" alt="Slide 2" />
        <img src="/carousel_images/img3.webp" alt="Slide 3" />
        <img src="/carousel_images/bharatha_natyam.webp" alt="Slide 4" />
        <img src="/carousel_images/img6.jpg" alt="Slide 5"/>
        <img src="/carousel_images/img4.jpg" alt="Slide 6"/>
        <img src="/carousel_images/img5.jpg" alt="Slide 7"/>
        <img src="/carousel_images/img7.jpeg" alt="Slide 8"/>

        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default CarouselSection;
