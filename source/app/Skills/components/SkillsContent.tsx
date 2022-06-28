import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import React, { FC } from 'react';
import classNames from 'classnames';
import useSelector from '../../../store/hooks/useSelector';
import selectTheme from '../../../store/modules/theme/selectors';
import ISkill from '../../../interfaces/ISkill';

const SkillsContent: FC<{ skills: ISkill[] }> = ({ skills }) => {
  const theme = useSelector(selectTheme);

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
