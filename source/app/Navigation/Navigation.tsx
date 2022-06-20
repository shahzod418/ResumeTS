import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = ({ pages }) => {
  const { t } = useTranslation();

  return (
    <Container fluid>
      <Nav justify variant="tabs" className="d-none d-sm-flex ">
        {pages.map((page) => (
          <Nav.Item key={page}>
            <LinkContainer to={page}>
              <Nav.Link eventKey={`/${page}`}>{t(`${page}.title`)}</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default Navigation;
