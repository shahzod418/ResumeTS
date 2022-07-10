import { PDFPage, rgb } from 'pdf-lib';
import contacts from '../../../../_data/contacts';
import { IOptions } from '../getPdfText';

const drawContacts = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const telegram = contacts.find(({ type }) => type === 'telegram')?.popup;
  const email = contacts.find(({ type }) => type === 'envelope')?.popup;
  const github = contacts.find(({ type }) => type === 'github');

  page.drawLine({
    start: { x: 25, y: height - 365 },
    end: { x: width - 25, y: height - 365 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(`Telegram: ${telegram}`, {
    ...options,
    y: height - 310,
  });

  page.drawText(`Email: ${email}`, {
    ...options,
    y: height - 330,
  });

  page.drawText(`GitHub: ${github?.popup} (${github?.link})`, {
    ...options,
    y: height - 350,
  });
};

export default drawContacts;
