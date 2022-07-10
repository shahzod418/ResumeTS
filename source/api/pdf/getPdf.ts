import { PDFDocument, PDFFont } from 'pdf-lib';
import fontKit from '@pdf-lib/fontkit';
import RobotoRegular from '../../../assets/fonts/Roboto-Regular.ttf';
import RobotoItalic from '../../../assets/fonts/Roboto-Italic.ttf';
import RobotoBold from '../../../assets/fonts/Roboto-Bold.ttf';
import RobotoLight from '../../../assets/fonts/Roboto-Light.ttf';
import getPdfText from './getPdfText';

export interface ICustomFonts {
  RobotoRegularFont: PDFFont;
  RobotoBoldFont: PDFFont;
  RobotoLightFont: PDFFont;
  RobotoItalicFont: PDFFont;
}

const getPdf = async () => {
  const RobotoRegularBytes = await fetch(RobotoRegular).then((res) => res.arrayBuffer());
  const RobotoBoldBytes = await fetch(RobotoBold).then((res) => res.arrayBuffer());
  const RobotoLightBytes = await fetch(RobotoLight).then((res) => res.arrayBuffer());
  const RobotoItalicBytes = await fetch(RobotoItalic).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.create();

  pdfDoc.registerFontkit(fontKit);
  const RobotoRegularFont = await pdfDoc.embedFont(RobotoRegularBytes);
  const RobotoBoldFont = await pdfDoc.embedFont(RobotoBoldBytes);
  const RobotoLightFont = await pdfDoc.embedFont(RobotoLightBytes);
  const RobotoItalicFont = await pdfDoc.embedFont(RobotoItalicBytes);

  const customFonts: ICustomFonts = {
    RobotoRegularFont,
    RobotoBoldFont,
    RobotoLightFont,
    RobotoItalicFont,
  };

  const firstPage = pdfDoc.addPage();
  const secondPage = pdfDoc.addPage();

  const pages = [firstPage, secondPage];

  getPdfText(pages, customFonts);

  pdfDoc.setTitle('Davlatov CV');

  return pdfDoc.saveAsBase64({ dataUri: true });
};

export default getPdf;
