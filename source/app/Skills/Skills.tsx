import React, { FC } from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import classNames from 'classnames';
import Tabs from './components/Tabs';
import Content from './components/Content';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import ISkill from '../../interfaces/ISkill';

interface SkillsProps {
  header: string;
  skills: ISkill[];
}

const Skills: FC<SkillsProps> = ({ header, skills }) => {
  const theme = useSelector(selectTheme);

  return (
    <Container className={classNames('p-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{header}</h2>
      </Row>
      <Row className="justify-content-center">
        <Tab.Container defaultActiveKey={skills[0].title}>
          <Row>
            <Col lg={2} className="mb-3 mb-lg-0">
              <Tabs skills={skills} />
            </Col>
            <Col lg={10}>
              <Content skills={skills} />
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Skills;
