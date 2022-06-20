import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import React, { useContext } from 'react';
import classNames from 'classnames';
import ThemeContext from '../../../context/ThemeContext';

const SkillsContent = ({ skills }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Content>
      {skills.map(({ title, list, description }) => (
        <Tab.Pane key={title} eventKey={title}>
          <Row>
            <Col lg={3}>
              <ListGroup variant="flush">
                {list.map((name) => (
                  <ListGroup.Item
                    key={name}
                    className={classNames('bg-transparent', theme.class.text, theme.class.border)}
                  >
                    {name}
                  </ListGroup.Item>
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
};

export default SkillsContent;
