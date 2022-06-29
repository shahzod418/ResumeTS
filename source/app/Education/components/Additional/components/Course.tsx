import { Col, Row } from 'react-bootstrap';
import React, { FC } from 'react';
import { ICourse } from '../../../../../interfaces/IEducation';
import getLinks from '../../../../../api/getLinks';
import CourseLink from './CourseLink';

interface CourseProps extends ICourse {
  school: string;
}

const Course: FC<CourseProps> = ({ id, name, date, school }) => {
  const { link } = getLinks(id);

  return (
    <Row>
      <Col lg={2} className="border-start border-end d-flex align-items-center mb-3">
        <div>{school}</div>
      </Col>
      <Col lg={4} className="border-start border-end d-flex align-items-center mb-3">
        <CourseLink link={link} name={name} />
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
