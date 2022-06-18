import React from 'react';
import { Col, Container, ListGroup, Nav, Row, Tab } from 'react-bootstrap';

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
              <Nav variant="pills" className="flex-column">
                {skills.map(({ title }) => (
                  <Nav.Item key={title}>
                    <Nav.Link eventKey={title}>{title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={10} className="border-start border-end">
              <Tab.Content>
                {skills.map(({ title, list, description }) => (
                  <Tab.Pane key={title} eventKey={title}>
                    <Row>
                      <Col lg={3}>
                        <ListGroup variant="flush">
                          {list.map((name) => (
                            <ListGroup.Item key={name}>{name}</ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Col>
                      <Col lg={7}>
                        {description.split('\n').map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </Col>
                    </Row>
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

export default Skills;
