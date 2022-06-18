import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutTable from './components/AboutTable';

const About = ({ title, info }) => {
  const { description } = info;

  return (
    <Container className="p-5">
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Col lg={4}>
          <AboutTable info={info} />
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

export default About;
