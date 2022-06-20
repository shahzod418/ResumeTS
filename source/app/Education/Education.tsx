import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Higher from './components/Higher/Higher';
import Additional from './components/Additional/Additional';
import classNames from 'classnames';
import ThemeContext from '../../context/ThemeContext';

const Education = ({ title, info }) => {
  const { theme } = useContext(ThemeContext);
  const { higher, additional } = info;

  return (
    <Container className={classNames('p-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Higher higher={higher} />
      </Row>
      <Row>
        <Additional additional={additional} />
      </Row>
    </Container>
  );
};

export default Education;
