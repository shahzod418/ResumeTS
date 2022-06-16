import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutMeTable from './AboutMeTable';

const AboutMe = ({ title, data }) => {
  const { description } = data;

  return (
    <Container className="p-5">
      <Row>
        <h2 className="d-none">{title}</h2>
      </Row>
      <Row>
        <Col lg={4}>
          <AboutMeTable data={data} />
        </Col>
        <Col lg={7} className="align-self-center">
          {description.split('\n').map((text: string, id: number) => (
            <p key={id} className="d-inline-block rounded-3">
              {text}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
