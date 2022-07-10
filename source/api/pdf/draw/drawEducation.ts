import { PDFPage, rgb } from 'pdf-lib';
import { IOptions } from '../getPdfText';
import i18n from '../../../i18n';
import IEducation from '../../../interfaces/IEducation';

const drawEducation = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const education: IEducation = i18n.t('education.description', { returnObjects: true });

  const educationHigherText = `${education.higher.title}\n${education.higher.universities
    .map(
      ({ university, faculty, specialisation }) =>
        `\t\t${university}\n\t\t${faculty}\n\t\t${specialisation}`,
    )
    .join('\n')}`;

  const educationAdditionalText = `${education.additional.title}\n${education.additional.schools
    .map(
      ({ school, courses }) =>
        `\t\t${school}\n\t\t\t\t${courses.map(({ name }) => `${name}`).join(', ')}`,
    )
    .join('\n')}`;

  page.drawLine({
    start: { x: 25, y: height - 775 },
    end: { x: width - 25, y: height - 775 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(educationHigherText, {
    ...options,
    y: height - 530,
  });

  page.drawText(educationAdditionalText, {
    ...options,
    y: height - 620,
  });
};

export default drawEducation;
