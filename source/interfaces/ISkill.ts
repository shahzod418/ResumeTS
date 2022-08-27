export const enum SkillsCategory {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Testing = 'Testing',
  Tools = 'Tools',
  Layout = 'Layout',
  Other = 'Other',
}

export interface ISkillsText {
  JavaScript: string;
  TypeScript: string;
  Bootstrap: string;
  i18next: string;
  ReactRouter: string;
  Redux: string;
  Svelte: string;
  React: string;
  Webpack: string;
  SASS: string;
  HTML: string;
  CSS: string;
  NodeJS: string;
  Axios: string;
  Fedora: string;
  Figma: string;
  Git: string;
  GitHub: string;
  Vim: string;
  WebStorm: string;
  ESLint: string;
  Lodash: string;
  Prettier: string;
  Jest: string;
  Formik: string;
  Vercel: string;
  Babel: string;
  NPM: string;
  Arch: string;
  Pug: string;
  VSCode: string;
  Sequelize: string;
  Postman: string;
  MySQL: string;
  Jira: string;
  GitLab: string;
  Express: string;
  Docker: string;
}

export default interface ISkill {
  category: SkillsCategory;
  id: keyof ISkillsText;
  logo: string;
}
