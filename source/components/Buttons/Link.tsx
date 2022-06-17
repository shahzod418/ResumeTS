import React, { Suspense, lazy } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/github'));

const Link = ({ name, link }) => (
  <Button variant="outline-dark" className="project-link me-3 mb-0 mb-lg-0">
    <Suspense fallback={<Spinner animation="border" size="sm" variant="dark" />}>
      <a href={link} target="_blank" className="d-flex align-items-center" rel="noreferrer">
        {name === 'Github' ? <Icon /> : name}
      </a>
    </Suspense>
  </Button>
);

export default Link;
