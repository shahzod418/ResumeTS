import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

const Gif = ({ gif }) => (
  <div className="position-relative" style={{ width: 'auto', height: 'auto' }}>
    <Suspense
      fallback={
        <Spinner animation="border" variant="dark" className="position-absolute start-50" />
      }
    >
      {gif}
    </Suspense>
  </div>
);

export default Gif;
