import { PDFPage, rgb } from 'pdf-lib';
import i18n from '../../../i18n';
import { IOptions } from '../getPdfText';
import { ICustomFonts } from '../getPdf';

const drawTitles = (pages: PDFPage[], options: IOptions, customFont: ICustomFonts) => {
  const { width, height } = pages[0].getSize();

  pages[0].drawLine({
    start: { x: 25, y: height - 85 },
    end: { x: width - 25, y: height - 85 },
    thickness: 2,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  pages[0].drawText(i18n.t('header.title'), {
    ...options,
    x: 35,
    y: height - 50,
    size: 16,
    font: customFont.RobotoBoldFont,
  });

  pages[0].drawText('Junior Frontend Developer', {
    ...options,
    x: 35,
    y: height - 70,
    size: 10,
    font: customFont.RobotoLightFont,
  });

  pages[0].drawText(i18n.t('about.title'), {
    ...options,
    x: 35,
    y: height - 110,
    size: 14,
    font: customFont.RobotoItalicFont,
  });

  pages[0].drawText(i18n.t('resume.contacts'), {
    ...options,
    x: 35,
    y: height - 310,
    size: 14,
    font: customFont.RobotoItalicFont,
  });

  pages[0].drawText(i18n.t('skills.title'), {
    ...options,
    x: 35,
    y: height - 390,
    size: 14,
    font: customFont.RobotoItalicFont,
  });

  pages[0].drawText(i18n.t('education.title'), {
    ...options,
    x: 35,
    y: height - 550,
    size: 14,
    font: customFont.RobotoItalicFont,
  });

  pages[1].drawText(i18n.t('projects.title'), {
    ...options,
    x: 35,
    y: height - 50,
    size: 14,
    font: customFont.RobotoItalicFont,
  });
};

export default drawTitles;
