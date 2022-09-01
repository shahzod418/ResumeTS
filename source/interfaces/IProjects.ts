export enum ProjectsId {
  Resume = 'resume',
  MultilingualClicker = 'multilingualClicker',
  ContractBuilder = 'contractBuilder',
  BrainGame = 'brainGame',
  MusicBox = 'musicBox',
  CognitiveDistortions = 'cognitiveDistortions',
}

export interface IProject {
  id: ProjectsId;
  title: string;
  shortDescription: string;
  stack: string;
  description: HTMLElement;
}

export default interface IProjects {
  type: string;
  projects: IProject[];
}
