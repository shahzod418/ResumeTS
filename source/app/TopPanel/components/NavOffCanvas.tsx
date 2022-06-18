import React, { lazy, Suspense } from 'react';
import { Button, ListGroup, Nav, Offcanvas, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import useShowCanvas from '../../../hooks/useShowCanvas';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/list'));

const NavOffCanvas = () => {
  const { show, handleShow, handleClose } = useShowCanvas();
  const { t } = useTranslation();

  return (
    <>
      <Button variant="outline-light" active={show} onClick={handleShow} className="ms-3">
        <Suspense fallback={<Spinner animation="border" size="sm" />}>
          <Icon />
        </Suspense>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" scroll backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('canvas')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <ListGroup variant="flush" onClick={handleClose}>
              <ListGroup.Item>
                <Nav.Item>
                  <LinkContainer to="about">
                    <Nav.Link eventKey="/about">{t('aboutMe.title')}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item>
                <Nav.Item>
                  <LinkContainer to="skills">
                    <Nav.Link eventKey="/skills">{t('skills.title')}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item>
                <Nav.Item>
                  <LinkContainer to="projects">
                    <Nav.Link eventKey="/projects">{t('projects.title')}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="education">
                  <Nav.Link eventKey="/education">{t('education.title')}</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
            </ListGroup>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavOffCanvas;
