import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import React from 'react';

const SkillsContent = ({ skills }) => (
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
);

export default SkillsContent;
