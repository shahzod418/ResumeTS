import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClipboardButton from './ClipboardButton';

const Clipboard = ({ popup }) => {
  const [isCopy, setCopy] = useState(false);

  const buttonRef = useRef();
  useEffect(() => {
    buttonRef.current.blur();
  }, []);

  const handleClipboard = (text) => async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
    } catch (error) {
      setCopy(false);
      throw error;
    }
  };

  return (
    <Container className="text-white py-2 px-3">
      <Row className="align-items-center">
        <Col xs="auto">
          <span>{popup}</span>
        </Col>
        <ClipboardButton
          buttonRef={buttonRef}
          handleClipboard={handleClipboard}
          isCopy={isCopy}
          popup={popup}
        />
      </Row>
    </Container>
  );
};

export default Clipboard;
