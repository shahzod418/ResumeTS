export default interface IProjectLink {
  id: string;
  links: {
    id: string;
    name: string;
    link: string;
  }[];
}
