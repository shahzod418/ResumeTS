import { Spinner } from 'react-bootstrap';
import React from 'react';

const PhotoSpinner = () => (
  <div style={{ height: '400px', width: '310px' }} className="mx-auto position-relative">
    <div className="position-absolute top-50 start-50">
      <Spinner animation="border" />
    </div>
  </div>
);

export default PhotoSpinner;
