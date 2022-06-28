import projectsLinks from '../../_data/projectsLinks';
import IProjectLink from '../interfaces/IProjectLink';

const getLinks = (id: string): IProjectLink | undefined =>
  projectsLinks.find((link) => link.id === id);

export default getLinks;
