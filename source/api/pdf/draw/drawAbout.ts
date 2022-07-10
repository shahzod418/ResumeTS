import { PDFPage, rgb } from 'pdf-lib';
import IAbout from '../../../interfaces/IAbout';
import i18n from '../../../i18n';
import { IOptions } from '../getPdfText';

const drawAbout = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const about: IAbout = i18n.t('about.description', { returnObjects: true });

  const aboutDescription = about.description.split('\n').join(' ');

  const aboutNationality = `${about.nationality.title}: ${about.nationality.text}`;

  const aboutBirthday = `${about.birthday.title}: ${about.birthday.text}`;

  page.drawLine({
    start: { x: 25, y: height - 285 },
    end: { x: width - 25, y: height - 285 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(aboutNationality, {
    ...options,
    y: height - 110,
  });

  page.drawText(aboutBirthday, {
    ...options,
    y: height - 130,
  });

  page.drawText(i18n.t('resume.main'), {
    ...options,
    y: height - 160,
  });

  page.drawText(aboutDescription, {
    ...options,
    y: height - 210,
  });
};

export default drawAbout;
