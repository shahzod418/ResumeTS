import links from '../../_data/projects/links';

const getLinks = (id) => links.find((link) => link.id === id).links;

export default getLinks;
