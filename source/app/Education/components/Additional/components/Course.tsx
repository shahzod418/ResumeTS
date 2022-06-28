import { Col, Row } from 'react-bootstrap';
import React, { FC } from 'react';
import { ICourse } from '../../../../../interfaces/IEducation';

interface CourseProps extends ICourse {
  school: string;
}

const Course: FC<CourseProps> = ({ name, school, link, date }) => {
  return (
    <Row>
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
  );
};

export default Course;
