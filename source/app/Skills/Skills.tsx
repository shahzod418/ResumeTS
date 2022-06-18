import React from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import SkillsNav from './components/SkillsNav';
import SkillsContent from './components/SkillsContent';

const Skills = ({ header, skills }) => {
  return (
    <Container className="p-5">
      <Row>
        <h2 className="d-block d-sm-none mb-3">{header}</h2>
      </Row>
      <Row className="justify-content-center">
        <Tab.Container defaultActiveKey={skills[0].title}>
          <Row>
            <Col lg={2} className="mb-3 mb-lg-0">
              <SkillsNav skills={skills} />
            </Col>
            <Col lg={10} className="border-start border-end">
              <SkillsContent skills={skills} />
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Skills;
