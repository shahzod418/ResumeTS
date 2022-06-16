import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import bar from '../../assets/images/F0A55220-F7D4-4964-8645-479CA10C3CD8_1_105_c.png';
import elevator from '../../assets/images/3926DCAF-C0E0-44D9-85CC-7AB187A1D431_1_105_c.png';

const Photo = () => (
  <div style={{ height: '400px', width: '310px' }} className="mx-auto">
    <Carousel fade touch controls={false} indicators={false} interval={2500}>
      <Carousel.Item>
        <Image fluid rounded src={bar} />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid rounded src={elevator} />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Photo;
