import { PDFFont, PDFPage, rgb } from 'pdf-lib';
import i18n from '../../../i18n';
import IProjects from '../../../interfaces/IProjects';
import { IOptions } from '../getPdfText';

const drawProjects = (page: PDFPage, options: IOptions, RobotoBoldFont: PDFFont) => {
  const { width, height } = page.getSize();

  const projects: IProjects[] = i18n.t('projects.description', { returnObjects: true });

  const projectsText = projects
    .map(
      ({ type, projects }) =>
        `${type}\n${projects
          .map(
            ({ title, shortDescription, stack }) =>
              `\t\t${title}\n\t\t${shortDescription}\n\t\t${stack}\n`,
          )
          .join('\n')}`,
    )
    .join('\n');

  page.drawLine({
    start: { x: 25, y: height - 695 },
    end: { x: width - 25, y: height - 695 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(i18n.t('resume.projects'), {
    ...options,
    y: height - 50,
    font: RobotoBoldFont,
  });

  page.drawText(projectsText, {
    ...options,
    y: height - 70,
  });
};

export default drawProjects;
