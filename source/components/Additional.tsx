import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Additional = ({ additional }) => {
  const { title, schools } = additional;

  return (
    <Container>
      <Row>
        <h4 className="mb-3">{title}</h4>
      </Row>
      {schools.map(({ school, courses }) =>
        courses.map(({ name, date, link }) => (
          <Row key={name}>
            <Col lg={2} className="border-start border-end d-flex align-items-center mb-3">
              <div>{school}</div>
            </Col>
            <Col lg={4} className="border-start border-end d-flex align-items-center mb-3">
              <a href={link} target="_blank" className="text-decoration-none" rel="noreferrer">
                {name}
              </a>
            </Col>
            <Col lg={6} className="px-5">
              <p>
                <i>{date}</i>
              </p>
            </Col>
          </Row>
        )),
      )}
    </Container>
  );
};

export default Additional;
