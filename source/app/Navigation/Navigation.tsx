import React, { FC } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation: FC<{ pages: string[] }> = ({ pages }) => {
  const { t } = useTranslation();

  return (
    <Nav justify variant="tabs" className="d-none d-sm-flex ">
      {pages.map((page) => (
        <Nav.Item key={page}>
          <LinkContainer to={page}>
            <Nav.Link eventKey={`/${page}`}>{t(`${page}.title`)}</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navigation;
