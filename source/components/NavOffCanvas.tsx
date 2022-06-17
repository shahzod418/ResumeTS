import React, { useState } from 'react';
import { ListGroup, Nav, Offcanvas } from 'react-bootstrap';
import NavOffCanvasButton from './Buttons/NavOffCanvas';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';

const NavOffCanvas = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavOffCanvasButton handleShow={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} backdrop={true}>
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
