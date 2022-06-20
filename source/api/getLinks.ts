import projectsLinks from '../../_data/projectsLinks';

const getLinks = (id) => projectsLinks.find((link) => link.id === id).links;

export default getLinks;
