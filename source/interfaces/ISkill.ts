export enum SkillsCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Testing = 'Testing',
  Tools = 'Tools',
  Layout = 'Layout',
  Other = 'Other',
}

export interface ISkillsText {
  [index: string]: string;
}

export default interface ISkill {
  category: SkillsCategory;
  id: string;
  logo: string;
}
