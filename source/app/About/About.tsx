import React, { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import classNames from 'classnames';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IAbout from '../../interfaces/IAbout';
import developerImage from '../../../assets/images/developer.png';
import catImage from '../../../assets/images/cat.png';
import workImage from '../../../assets/images/work.png';

interface AboutProps {
  title: string;
  info: IAbout;
}

const About: FC<AboutProps> = ({ title, info }) => {
  const theme = useSelector(selectTheme);
  const { firstParagraph, secondParagraph, thirdParagraph } = info;

  const style = { width: '100%', height: 'auto' };

  return (
    <Container className={classNames('p-4', 'p-md-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row className="align-items-center flex-row-reverse">
        <Col md={6} className="mb-3">
          <Image src={developerImage} style={style} />
        </Col>
        <Col md={6} className="mb-3">
          <p>{firstParagraph}</p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Image src={workImage} style={style} />
        </Col>
        <Col md={6} className="mb-3">
          <p>{secondParagraph}</p>
        </Col>
      </Row>
      <Row className="align-items-center flex-row-reverse">
        <Col md={6} className="mb-3">
          <Image src={catImage} style={style} />
        </Col>
        <Col md={6}>
          <p>{thirdParagraph}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
