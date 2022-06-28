import { Nav } from 'react-bootstrap';
import React, { FC } from 'react';
import ISkill from '../../../interfaces/ISkill';

const SkillsNav: FC<{ skills: ISkill[] }> = ({ skills }) => {
  return (
    <Nav variant="pills" className="flex-column">
      {skills.map(({ title }) => (
        <Nav.Item key={title}>
          <Nav.Link eventKey={title}>{title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SkillsNav;
