export interface IProject {
  id: string;
  title: string;
  shortDescription: string;
  stack: string;
  description: HTMLElement;
}

export default interface IProjects {
  type: string;
  projects: IProject[];
}
