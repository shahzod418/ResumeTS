import React, { lazy, Suspense } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const NavOffCanvasButton = ({ handleShow }) => {
  const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/list'));

  return (
    <Button variant="outline-light" onClick={handleShow} className="ms-3">
      <Suspense fallback={<Spinner animation="border" size="sm" />}>
        <Icon />
      </Suspense>
    </Button>
  );
};

export default NavOffCanvasButton;
