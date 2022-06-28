import projectsLinks from '../../_data/projectsLinks';
import IProjectLinks from '../interfaces/IProjectLinks';

const getLinks = (id: string): IProjectLinks | undefined =>
  projectsLinks.find((link) => link.id === id);

export default getLinks;
