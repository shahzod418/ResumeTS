import React from 'react';
import { Col, Container, ListGroup, Row, Tab, Tabs } from 'react-bootstrap';

const Skills = ({ title, skills }) => {
  return (
    <Container className="p-5">
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Tabs variant="pills" defaultActiveKey={skills[0].title} id="tab-skills" className="mb-3">
          {skills.map(({ title, list, description }) => {
            return (
              <Tab key={title} eventKey={title} title={title} className="border-top">
                <Row>
                  <Col lg={3}>
                    <ListGroup variant="flush">
                      {list.map((name) => (
                        <ListGroup.Item key={name}>{name}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                  <Col lg={7} className="p-3">
                    {description.split('\n').map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </Col>
                </Row>
              </Tab>
            );
          })}
        </Tabs>
      </Row>
    </Container>
  );
};

export default Skills;
