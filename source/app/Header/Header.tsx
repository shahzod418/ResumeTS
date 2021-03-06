import React, { FC, lazy, Suspense, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PhotoSpinner from '../PhotoSpinner/PhotoSpinner';
import Contacts from '../Contacts/Contacts';
import DownloadResume from '../DownloadResume/DownloadResume';
import hexagon from '../../../assets/images/Hexagon.svg';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IContact from '../../interfaces/IContact';
import InfoTable from '../InfoTable/InfoTable';
import IAbout from '../../interfaces/IAbout';
import useUserAgent from '../../hooks/useUserAgent';
import DownloadResumeOnSafariIos from '../DownloadResumeOnSafariIos/DownloadResumeOnSafariIos';
import useDevice from '../../hooks/useDevice';

const Photo = lazy(() => import('../Photo/Photo'));

interface HeaderProps {
  contacts: IContact[];
  photos: string[];
}

const Header: FC<HeaderProps> = ({ contacts, photos }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null!);
  const { isIosSafari } = useUserAgent();
  const { isMobile } = useDevice();

  const info: IAbout = t('about.description', { returnObjects: true });

  useEffect(() => {
    if (!isMobile) {
      ref.current.style.backgroundImage = `url('${hexagon}')`;
      ref.current.style.backgroundRepeat = 'no-repeat';
      ref.current.style.backgroundSize = 'cover';
    } else {
      ref.current.style.background = 'none';
    }
  }, [isMobile]);

  return (
    <Container fluid ref={ref} className={classNames('p-3', 'p-md-5', text)}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} xxl={3} className="mb-3">
            <Suspense fallback={<PhotoSpinner />}>
              <Photo photos={photos} />
            </Suspense>
          </Col>
          <Col
            lg={5}
            xxl={4}
            className="d-flex flex-column align-items-center align-items-lg-stretch"
          >
            <h1 className="text-center text-md-start">{t('header.title')}</h1>
            <h6>{t('header.caption')}</h6>
            <Contacts contacts={contacts} />
            {isIosSafari ? <DownloadResumeOnSafariIos /> : <DownloadResume />}
            <InfoTable info={info} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
