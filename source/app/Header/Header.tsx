import React, { lazy, Suspense, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PhotoSpinner from './components/Photo/components/PhotoSpinner';
import Contacts from './components/Contacts/Contacts';
import DownloadResume from './components/DownloadResume';
import ThemeContext from '../../context/ThemeContext';
import useVanta from '../../hooks/useVanta';

const Photo = lazy(() => import('./components/Photo/Photo'));

const Header = ({ contacts, photos }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { setRef } = useVanta();

  return (
    <Container fluid ref={setRef} className="p-5 border-bottom">
      <Row className="justify-content-center">
        <Col
          lg={5}
          className="d-flex flex-column justify-content-center align-items-center align-items-lg-start"
        >
          <h1 className={classNames('text-center', 'text-md-start', theme.class.text)}>
            {t('header.title')}
          </h1>
          <h6 className={theme.class.text}>{t('header.caption')}</h6>
          <Contacts contacts={contacts} />
          <DownloadResume text={t('header.download')} />
        </Col>
        <Col lg={3}>
          <Suspense fallback={<PhotoSpinner />}>
            <Photo photos={photos} />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
