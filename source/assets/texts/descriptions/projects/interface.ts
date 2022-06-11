export default interface Project {
  type: string;
  projects: {
    title: string;
    shortDescription: string;
    stack: string;
  }[];
}
