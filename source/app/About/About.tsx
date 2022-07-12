import React, { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
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

const aboutTemplate: { [index: string]: string } = {
  firstParagraph: developerImage,
  secondParagraph: workImage,
  thirdParagraph: catImage,
};

const About: FC<AboutProps> = ({ title, info }) => {
  const theme = useSelector(selectTheme);

  const style = { width: '100%', height: 'auto' };

  return (
    <Container className={classNames('p-4', 'p-md-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      {Object.keys(aboutTemplate).map((paragraph, index) => (
        <Row
          key={paragraph}
          className={classNames('align-items-center', { 'flex-row-reverse': index % 2 === 0 })}
        >
          <Col md={6} className="mb-4">
            <Image src={aboutTemplate[paragraph]} style={style} />
          </Col>
          <Col md={6} className="mb-4">
            {info[paragraph].split('\n').map((text: string) => (
              <p key={nanoid()}>{text}</p>
            ))}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default About;
