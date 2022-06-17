import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Higher = ({ higher }) => {
  const { title, universities } = higher;

  return (
    <Container>
      <Row>
        <h4 className="mb-3">{title}</h4>
      </Row>
      {universities.map(({ university, faculty, specialisation, date }) => (
        <Row key={university} className="mb-4">
          <Col lg={4} className="border-start border-end d-flex align-items-center mb-3 mb-lg-0">
            <div>{university}</div>
          </Col>
          <Col lg={8} className="px-5">
            <p>{faculty}</p>
            <p>{specialisation}</p>
            <i>{date}</i>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Higher;
