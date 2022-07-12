import React, { FC, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import classNames from 'classnames';
import Project from '../Project/Project';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import { IProject } from '../../interfaces/IProjects';

const ProjectsAccordion: FC<{ projects: IProject[] }> = ({ projects }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);
  const [activeItem, setActiveItem] = useState<string | null>(projects[0].id);

  const handleClick = (id: string) => () => {
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
          <Accordion.Item key={id} eventKey={id} className={classNames('bg-transparent', text)}>
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
