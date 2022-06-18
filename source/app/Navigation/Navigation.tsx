import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Nav justify variant="tabs" className="d-none d-sm-flex">
      <Nav.Item>
        <LinkContainer to="about">
          <Nav.Link eventKey="/about">{t('about.title')}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="skills">
          <Nav.Link eventKey="/skills">{t('skills.title')}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="projects">
          <Nav.Link eventKey="/projects">{t('projects.title')}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="education">
          <Nav.Link eventKey="/education">{t('education.title')}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
