import React, { lazy, Suspense } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import useClipboard from '../../../../../hooks/useClipboard';

const ClipboardIcon = lazy(() => import('react-bootstrap-icons/dist/icons/clipboard'));
const ClipboardCheckIcon = lazy(() => import('react-bootstrap-icons/dist/icons/clipboard-check'));

const Clipboard = ({ popup }) => {
  const { isCopy, handleClipboard } = useClipboard();

  return (
    <Container className="text-white py-2 px-3">
      <Row className="align-items-center">
        <Col xs="auto">
          <span>{popup}</span>
        </Col>
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
      </Row>
    </Container>
  );
};

export default Clipboard;
