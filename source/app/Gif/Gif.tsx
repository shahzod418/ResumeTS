import React, { FC } from 'react';
import { Col } from 'react-bootstrap';
import LazyGif from '../../hoсs/LazyGif';

const Gif: FC<{ id: string }> = ({ id }) => {
  return (
    <Col lg={7}>
      <div className="position-relative">
        <LazyGif name={id} />
      </div>
    </Col>
  );
};

export default Gif;
