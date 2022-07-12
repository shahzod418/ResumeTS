import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import University from '../University/University';
import { IHigher } from '../../interfaces/IEducation';

const Higher: FC<{ higher: IHigher }> = ({ higher }) => {
  const { title, universities } = higher;

  return (
    <Container>
      <Row>
        <h4 className="mb-3">{title}</h4>
      </Row>
      {universities.map(({ university, faculty, specialisation, date }) => (
        <University
          key={university}
          university={university}
          faculty={faculty}
          specialisation={specialisation}
          date={date}
        />
      ))}
    </Container>
  );
};

export default Higher;
