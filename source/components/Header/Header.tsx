import React, { lazy, Suspense, useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PhotoSpinner from '../PhotoSpinner/PhotoSpinner';
import Contacts from '../Contacts/Contacts';
import contacts from '../../assets/links/contacts';
import DownloadResume from '../Buttons/DownloadResume/DownloadResume';
import NET from 'vanta/dist/vanta.net.min';

const Photo = lazy(() => import('../Photo/Photo'));

const Header = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0d6efd,
          backgroundColor: 0xffffff,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 20.0,
        }),
      );
    }
  }, [vantaEffect]);

  return (
    <Container fluid ref={ref} className="p-5">
      <Row className="justify-content-center">
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center align-items-lg-start"
        >
          <h1 className="text-center text-md-start">{t('header.title')}</h1>
          <h3>{t('header.caption')}</h3>
          <Contacts contacts={contacts} variant={'dark'} size={'lg'} />
          <DownloadResume text={t('header.download')} />
        </Col>
        <Col lg={4}>
          <Suspense fallback={<PhotoSpinner />}>
            <Photo />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
