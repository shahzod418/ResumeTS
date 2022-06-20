import React, { useContext } from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import classNames from 'classnames';
import SkillsNav from './components/SkillsNav';
import SkillsContent from './components/SkillsContent';
import ThemeContext from '../../context/ThemeContext';

const Skills = ({ header, skills }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className={classNames('p-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{header}</h2>
      </Row>
      <Row className="justify-content-center">
        <Tab.Container defaultActiveKey={skills[0].title}>
          <Row>
            <Col lg={2} className="mb-3 mb-lg-0">
              <SkillsNav skills={skills} />
            </Col>
            <Col lg={10}>
              <SkillsContent skills={skills} />
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Skills;
