import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Higher from './components/Higher/Higher';
import Additional from './components/Additional/Additional';

const Education = ({ title, info }) => {
  const { higher, additional } = info;

  return (
    <Container className="p-5">
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Higher higher={higher} />
      </Row>
      <Row>
        <Additional additional={additional} />
      </Row>
    </Container>
  );
};

export default Education;
