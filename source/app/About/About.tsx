import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classNames from 'classnames';
import AboutTable from './components/AboutTable';
import ThemeContext from '../../context/ThemeContext';

const About = ({ title, info }) => {
  const { theme } = useContext(ThemeContext);
  const { description } = info;

  return (
    <Container className={classNames('p-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Col lg={4}>
          <AboutTable info={info} />
        </Col>
        <Col lg={7} className="align-self-center">
          {description.split('\n').map((text: string, id: number) => (
            <p key={id} className="rounded-3">
              {text}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
