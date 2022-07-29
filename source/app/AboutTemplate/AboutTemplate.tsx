import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import IAbout from '../../interfaces/IAbout';
import LazyImage from '../../hoсs/LazyImage';

const aboutTemplate = {
  firstParagraph: 'developer',
  secondParagraph: 'work',
  thirdParagraph: 'cat',
};

const AboutTemplate = () => {
  const { t } = useTranslation();

  const info: IAbout = t('about.description', { returnObjects: true });

  return (
    <>
      {(Object.keys(aboutTemplate) as (keyof typeof aboutTemplate)[]).map((paragraph, index) => (
        <Row
          key={paragraph}
          className={classNames('align-items-center', {
            'flex-row-reverse': index % 2 === 0,
          })}
        >
          <Col md={6} className="position-relative mb-4">
            <LazyImage name={aboutTemplate[paragraph]} />
          </Col>
          <Col md={6} className="mb-4">
            {info[paragraph]?.split('\n').map((text: string) => (
              <p key={nanoid()}>{text}</p>
            ))}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default AboutTemplate;
