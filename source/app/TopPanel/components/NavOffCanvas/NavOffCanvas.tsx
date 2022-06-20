import React, { lazy, Suspense, useContext } from 'react';
import { Button, Offcanvas, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useShowCanvas from '../../../../hooks/useShowCanvas';
import NavCanvas from './components/NavCanvas';
import ThemeContext from '../../../../context/ThemeContext';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/list'));

const NavOffCanvas = ({ pages }) => {
  const { theme } = useContext(ThemeContext);
  const { show, handleShow, handleClose } = useShowCanvas();
  const { t } = useTranslation();

  return (
    <>
      <Button variant="outline-light" active={show} onClick={handleShow} className="ms-3">
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
        style={{ backgroundColor: theme.background }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className={theme.class.text}>{t('canvas')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavCanvas pages={pages} handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffCanvas;
