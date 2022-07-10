import { PDFFont, PDFPage } from 'pdf-lib';
import drawTitles from './draw/drawTitles';
import drawAbout from './draw/drawAbout';
import drawContacts from './draw/drawContacts';
import drawSkills from './draw/drawSkills';
import drawProjects from './draw/drawProjects';
import drawEducation from './draw/drawEducation';
import { ICustomFonts } from './getPdf';

export interface IOptions {
  maxWidth: number;
  x: number;
  lineHeight: number;
  font: PDFFont;
  size: number;
}

const drawPdf = (pages: PDFPage[], customFont: ICustomFonts) => {
  const { width } = pages[0].getSize();

  const options: IOptions = {
    maxWidth: width - 175,
    x: width / 4,
    lineHeight: 20,
    font: customFont.RobotoRegularFont,
    size: 12,
  };

  drawTitles(pages, options, customFont);
  drawAbout(pages[0], options);
  drawContacts(pages[0], options);
  drawSkills(pages[0], options);
  drawEducation(pages[0], options);
  drawProjects(pages[1], options, customFont.RobotoBoldFont);
};

export default drawPdf;
