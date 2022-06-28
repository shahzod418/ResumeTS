export interface IProjectLink {
  id: string;
  name: string;
  link: string;
}

export default interface IProjectLinks {
  id: string;
  links: IProjectLink[];
}
