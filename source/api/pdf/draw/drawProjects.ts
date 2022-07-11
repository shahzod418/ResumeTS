import { PDFPage, rgb } from 'pdf-lib';
import i18n from '../../../i18n';
import IProjects from '../../../interfaces/IProjects';
import { IOptions } from '../getPdfText';
import projectsLinks from '../../../../_data/projectsLinks';

interface IGithubLinks {
  [index: string]: string | undefined;
}

const drawProjects = (page: PDFPage, options: IOptions) => {
  const { width, height } = page.getSize();

  const projects: IProjects[] = i18n.t('projects.description', { returnObjects: true });
  const githubLinks = Object.keys(projectsLinks).reduce((acc: IGithubLinks, key) => {
    acc[key] = projectsLinks[key].find(({ id }) => id === 'github')?.link;

    return acc;
  }, {});

  const projectsText = projects
    .map(({ projects }) =>
      projects
        .map(
          ({ id, title, shortDescription }) =>
            `${title}\n\t\t${shortDescription}\n\t\tGitHub: ${githubLinks[id]}\n`,
        )
        .join('\n'),
    )
    .join('\n');

  page.drawLine({
    start: { x: 25, y: height - 465 },
    end: { x: width - 25, y: height - 465 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
    opacity: 0.75,
  });

  page.drawText(projectsText, {
    ...options,
    y: height - 50,
  });
};

export default drawProjects;
