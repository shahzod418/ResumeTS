import React, { FC, lazy, Suspense, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PhotoSpinner from './components/Photo/components/PhotoSpinner';
import Contacts from './components/Contacts/Contacts';
import DownloadResume from './components/DownloadResume';
import hexagon from '../../../assets/images/Hexagon.svg';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IContact from '../../interfaces/IContact';

const Photo = lazy(() => import('./components/Photo/Photo'));

interface HeaderProps {
  contacts: IContact[];
  photos: string[];
}

const Header: FC<HeaderProps> = ({ contacts, photos }) => {
  const theme = useSelector(selectTheme);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    ref.current.style.backgroundImage = `url('${hexagon}')`;
  }, []);

  return (
    <Container fluid ref={ref} className="p-5">
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
