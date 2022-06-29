import projects from '../../_data/links/projects';
import courses from '../../_data/links/courses';
import IProjectLinks from '../interfaces/IProjectLinks';
import ICourseLink from '../interfaces/ICourseLink';

const getLinks = (id: string): IProjectLinks | ICourseLink | any => {
  const projectLinks = projects.find((link) => link.id === id);

  if (projectLinks) {
    return projectLinks;
  }

  const courseLink = courses.find((link) => link.id === id);

  if (courseLink) {
    return courseLink;
  }

  return null;
};

export default getLinks;
