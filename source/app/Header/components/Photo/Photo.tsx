import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Photo = ({ photos }) => (
  <div style={{ height: '400px', width: '280px' }} className="mx-auto">
    <Carousel fade touch controls={false} indicators={false} interval={2500}>
      {photos.map((photo) => (
        <Carousel.Item key={photo}>
          <Image fluid rounded src={photo} />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default Photo;
