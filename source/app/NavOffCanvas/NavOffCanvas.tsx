import React, { FC, lazy, Suspense } from 'react';
import { Button, Offcanvas, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useShowCanvas from '../../hooks/useShowCanvas';
import NavCanvas from '../NavCanvas/NavCanvas';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import useDevice from '../../hooks/useDevice';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/list'));

const NavOffCanvas: FC<{ pages: string[] }> = ({ pages }) => {
  const {
    background,
    class: { text },
  } = useSelector(selectTheme);
  const { show, handleShow, handleClose } = useShowCanvas();
  const { t } = useTranslation();
  const { isMobile } = useDevice();

  return (
    <>
      <Button
        size={isMobile ? 'sm' : undefined}
        variant="outline-light"
        active={show}
        onClick={handleShow}
        className="ms-3"
      >
        <Suspense fallback={<Spinner animation="border" size="sm" />}>
          <Icon />
        </Suspense>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll
        backdrop
        style={{ backgroundColor: background }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className={text}>{t('canvas')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavCanvas pages={pages} handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffCanvas;
