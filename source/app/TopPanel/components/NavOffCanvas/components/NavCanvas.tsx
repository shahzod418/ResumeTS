import { ListGroup, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NavCanvas = ({ pages, handleClose }) => {
  const { t } = useTranslation();

  return (
    <Nav>
      <ListGroup variant="flush" onClick={handleClose}>
        {pages.map((page) => (
          <ListGroup.Item key={page}>
            <Nav.Item>
              <LinkContainer to={page}>
                <Nav.Link eventKey={`/${page}`}>{t(`${page}.title`)}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Nav>
  );
};

export default NavCanvas;
