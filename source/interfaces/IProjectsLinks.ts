export interface IProjectLinks {
  id: string;
  name: string;
  link: string;
}

export default interface IProjectsLinks {
  [index: string]: IProjectLinks[];
}
