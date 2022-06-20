import React, { useContext, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import classNames from 'classnames';
import Project from './Project/Project';
import ThemeContext from '../../../context/ThemeContext';

const ProjectsAccordion = ({ projects }) => {
  const { theme } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState(projects[0].id);

  const handleClick = (id) => () => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <Accordion flush activeKey={activeItem}>
      {projects.map((project) => {
        const { id, title } = project;

        return (
          <Accordion.Item
            key={id}
            eventKey={id}
            className={classNames('bg-transparent', theme.class.text)}
          >
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
