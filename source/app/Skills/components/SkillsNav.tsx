import { Nav } from 'react-bootstrap';
import React from 'react';

const SkillsNav = ({ skills }) => (
  <Nav variant="pills" className="flex-column">
    {skills.map(({ title }) => (
      <Nav.Item key={title}>
        <Nav.Link eventKey={title}>{title}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default SkillsNav;
