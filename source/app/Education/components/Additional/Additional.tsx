import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from './components/Course';

const Additional = ({ additional }) => {
  const { title, schools } = additional;

  return (
    <Container>
      <Row>
        <h4 className="mb-3">{title}</h4>
      </Row>
      {schools.map(({ school, courses }) =>
        courses.map(({ name, date, link }) => (
          <Course key={name} school={school} name={name} date={date} link={link} />
        )),
      )}
    </Container>
  );
};

export default Additional;
