import React, { FC } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Photo: FC<{ photos: string[] }> = ({ photos }) => {
  return (
    <div style={{ height: 'auto', width: '85%' }} className="mx-auto">
      <Carousel fade touch controls={false} indicators={false} interval={2500}>
        {photos.map((photo) => (
          <Carousel.Item key={photo}>
            <Image fluid rounded src={photo} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Photo;
