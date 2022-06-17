import { Button, Col, Spinner } from 'react-bootstrap';
import React, { lazy, Suspense } from 'react';

const LazyClipboardIcon = lazy(() => import('react-bootstrap-icons/dist/icons/clipboard'));
const LazyClipboardCheckIcon = lazy(
  () => import('react-bootstrap-icons/dist/icons/clipboard-check'),
);

const ClipboardButton = ({ buttonRef, handleClipboard, isCopy, popup }) => (
  <Col>
    <Button
      variant="warning"
      size="sm"
      ref={buttonRef}
      style={{ pointerEvents: isCopy ? 'none' : 'auto' }}
      onClick={handleClipboard(popup)}
    >
      <div className="d-flex align-items-center">
        <Suspense fallback={<Spinner animation="border" size="sm" />}>
          {isCopy ? <LazyClipboardCheckIcon /> : <LazyClipboardIcon />}
        </Suspense>
      </div>
    </Button>
  </Col>
);

export default ClipboardButton;
