import React, { FC, lazy, Suspense, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PhotoSpinner from './components/Photo/components/PhotoSpinner';
import Contacts from './components/Contacts/Contacts';
import DownloadResume from './components/DownloadResume';
import meteor from '../../../assets/images/Meteor.svg';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IContact from '../../interfaces/IContact';
import AboutTable from './components/AboutTable';
import IAbout from '../../interfaces/IAbout';

const Photo = lazy(() => import('./components/Photo/Photo'));

interface HeaderProps {
  contacts: IContact[];
  photos: string[];
}

const Header: FC<HeaderProps> = ({ contacts, photos }) => {
  const theme = useSelector(selectTheme);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);

  const info: IAbout = t('about.description', { returnObjects: true });

  useEffect(() => {
    ref.current.style.backgroundImage = `url('${meteor}')`;
    ref.current.style.backgroundRepeat = 'no-repeat';
    ref.current.style.backgroundSize = 'cover';
  }, []);

  return (
    <Container ref={ref} className="p-5">
      <Row className="justify-content-center">
        <Col lg={4} xxl={3} className="me-3">
          <Suspense fallback={<PhotoSpinner />}>
            <Photo photos={photos} />
          </Suspense>
        </Col>
        <Col
          lg={5}
          xxl={4}
          className="d-flex flex-column align-items-center align-items-lg-stretch"
        >
          <h1 className={classNames('text-center', 'text-md-start', theme.class.text)}>
            {t('header.title')}
          </h1>
          <h6 className={theme.class.text}>{t('header.caption')}</h6>
          <Contacts contacts={contacts} />
          <DownloadResume />
          <AboutTable info={info} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
