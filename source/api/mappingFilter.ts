import ISkill, { SkillsCategory } from '../interfaces/ISkill';

interface IMappingFilter {
  readonly [index: string]: (skill: ISkill) => boolean;
}

const mappingFilter: IMappingFilter = {
  All: () => true,
  [SkillsCategory.Frontend]: (skill) => skill.category === SkillsCategory.Frontend,
  [SkillsCategory.Backend]: (skill) => skill.category === SkillsCategory.Backend,
  [SkillsCategory.Testing]: (skill) => skill.category === SkillsCategory.Testing,
  [SkillsCategory.Layout]: (skill) => skill.category === SkillsCategory.Layout,
  [SkillsCategory.Tools]: (skill) => skill.category === SkillsCategory.Tools,
  [SkillsCategory.Other]: (skill) => skill.category === SkillsCategory.Other,
};

export default mappingFilter;
