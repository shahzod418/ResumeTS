import React, { FC } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import classNames from 'classnames';
import ProjectsAccordion from './components/ProjectsAccordion';
import IProjects from '../../interfaces/IProjects';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';

interface ProjectsProps {
  title: string;
  info: IProjects[];
}

const Projects: FC<ProjectsProps> = ({ title, info }) => {
  const theme = useSelector(selectTheme);

  return (
    <Container className={classNames('p-4', 'p-md-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row className="justify-content-center">
        <Tab.Container defaultActiveKey={info[0].type}>
          <Row>
            <Col lg={2} className="mb-3 mb-lg-0">
              <Nav variant="pills" className="flex-column">
                {info.map(({ type }) => (
                  <Nav.Item key={type}>
                    <Nav.Link eventKey={type}>{type}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={10}>
              <Tab.Content>
                {info.map(({ type, projects }) => (
                  <Tab.Pane key={type} eventKey={type}>
                    <ProjectsAccordion projects={projects} />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};

export default Projects;
