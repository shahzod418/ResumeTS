import { PDFPage, rgb } from 'pdf-lib';
import i18n from '../../../i18n';
import ISkill from '../../../interfaces/ISkill';
import { IOptions } from '../getPdfText';

const drawSkills = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const skills: ISkill[] = i18n.t('skills.description', { returnObjects: true });

  const skillsText = skills
    .map(({ title, list }) => `${title}:\n\t\t${list.join(', ')}`)
    .join('\n');

  page.drawLine({
    start: { x: 25, y: height - 505 },
    end: { x: width - 25, y: height - 505 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(skillsText, {
    ...options,
    y: height - 390,
  });
};

export default drawSkills;
