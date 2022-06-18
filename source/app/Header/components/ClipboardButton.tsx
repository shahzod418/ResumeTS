import { Button, Col, Spinner } from 'react-bootstrap';
import React, { lazy, Suspense } from 'react';

const ClipboardIcon = lazy(() => import('react-bootstrap-icons/dist/icons/clipboard'));
const ClipboardCheckIcon = lazy(() => import('react-bootstrap-icons/dist/icons/clipboard-check'));

const ClipboardButton = ({ handleClipboard, isCopy, popup }) => (
  <Col>
    <Button
      variant="warning"
      size="sm"
      style={{ pointerEvents: isCopy ? 'none' : 'auto' }}
      onClick={handleClipboard(popup)}
    >
      <div className="d-flex align-items-center">
        <Suspense fallback={<Spinner animation="border" size="sm" />}>
          {isCopy ? <ClipboardCheckIcon /> : <ClipboardIcon />}
        </Suspense>
      </div>
    </Button>
  </Col>
);

export default ClipboardButton;
