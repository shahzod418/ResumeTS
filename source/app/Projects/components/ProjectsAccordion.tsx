import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Project from './Project';

const ProjectsAccordion = ({ projects }) => {
  const [activeItem, setActiveItem] = useState(projects[0].id);

  const handleClick = (id) => () => {
    setActiveItem(id);
  };

  return (
    <Accordion flush activeKey={activeItem}>
      {projects.map((project) => {
        const { id, title } = project;

        return (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header onClick={handleClick(id)}>{title}</Accordion.Header>
            <Accordion.Body>
              <Project project={project} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default ProjectsAccordion;
