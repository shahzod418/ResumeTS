import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import author from '../../assets/links/author';

const Footer = () => (
  <Container fluid className="ps-3 pt-1 pb-1 bg-black">
    <Row className="align-items-center">
      <Col className="text-white text-center">
        <span>{`\u00A9 ${new Date().getFullYear()} `}</span>
        <a
          href={author.link}
          target="_blank"
          className="text-white text-decoration-none"
          rel="noreferrer"
        >
          {author.name}
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
