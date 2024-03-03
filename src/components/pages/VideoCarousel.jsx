import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/YuxLEc2JqnE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 2"
          src="https://www.youtube.com/embed/i7upkzTsvew"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/hZChD72XJd0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
    </Carousel>
  );
};

export default VideoCarousel;
