import { PDFPage, rgb } from 'pdf-lib';
import ISkill, { SkillsCategory } from '../../../interfaces/ISkill';
import { IOptions } from '../getPdfText';
import skills from '../../../../_data/skills';

const getSkillsText = (title: SkillsCategory, skills: ISkill[]) =>
  `${title}: ${skills.map(({ id }) => id).join(', ')}`;

const drawSkills = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const frontendSkills = skills.filter(({ category }) => category === SkillsCategory.Frontend);
  const backendSkills = skills.filter(({ category }) => category === SkillsCategory.Backend);
  const testingSkills = skills.filter(({ category }) => category === SkillsCategory.Testing);
  const toolsSkills = skills.filter(({ category }) => category === SkillsCategory.Tools);
  const layoutSkills = skills.filter(({ category }) => category === SkillsCategory.Layout);
  const otherSkills = skills.filter(({ category }) => category === SkillsCategory.Other);

  page.drawLine({
    start: { x: 25, y: height - 525 },
    end: { x: width - 25, y: height - 525 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(getSkillsText(SkillsCategory.Frontend, frontendSkills), {
    ...options,
    y: height - 390,
  });

  page.drawText(getSkillsText(SkillsCategory.Backend, backendSkills), {
    ...options,
    y: height - 410,
  });

  page.drawText(getSkillsText(SkillsCategory.Testing, testingSkills), {
    ...options,
    y: height - 430,
  });

  page.drawText(getSkillsText(SkillsCategory.Tools, toolsSkills), {
    ...options,
    y: height - 450,
  });

  page.drawText(getSkillsText(SkillsCategory.Layout, layoutSkills), {
    ...options,
    y: height - 470,
  });

  page.drawText(getSkillsText(SkillsCategory.Other, otherSkills), {
    ...options,
    y: height - 490,
  });
};

export default drawSkills;
