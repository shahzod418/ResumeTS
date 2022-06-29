import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from './components/Course';
import { IAdditional } from '../../../../interfaces/IEducation';

const Additional: FC<{ additional: IAdditional }> = ({ additional }) => {
  const { title, schools } = additional;

  return (
    <Container>
      <Row>
        <h4 className="mb-3">{title}</h4>
      </Row>
      {schools.map(({ school, courses }) =>
        courses.map(({ id, name, date }) => (
          <Course key={id} school={school} id={id} name={name} date={date} />
        )),
      )}
    </Container>
  );
};

export default Additional;
