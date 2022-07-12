import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import classNames from 'classnames';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import AboutTemplate from '../AboutTemplate/AboutTemplate';

const About: FC<{ title: string }> = ({ title }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);

  return (
    <Container className={classNames('p-4', 'p-md-5', text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <AboutTemplate />
    </Container>
  );
};

export default About;
