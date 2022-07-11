import { TFunction, useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Joke from '../Joke/Joke';
import skills from '../../../_data/skills';

interface Index {
  [index: string]: Function;
}

const mappingRoute: Index = {
  about: (t: TFunction) => (
    <About title={t('about.title')} info={t('about.description', { returnObjects: true })} />
  ),
  education: (t: TFunction) => (
    <Education
      title={t('education.title')}
      info={t('education.description', { returnObjects: true })}
    />
  ),
  skills: (t: TFunction) => (
    <Skills
      title={t('skills.title')}
      skills={skills}
      skillsTexts={t('skills.description', { returnObjects: true })}
    />
  ),
  projects: (t: TFunction) => (
    <Projects
      title={t('projects.title')}
      info={t('projects.description', { returnObjects: true })}
    />
  ),
};

const Routing: FC<{ pages: string[] }> = ({ pages }) => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="about" />} />
      {pages.map((page) => (
        <Route key={page} path={page} element={mappingRoute[page](t)} />
      ))}
      <Route path="*" element={<Joke title={t('toast')} />} />
    </Routes>
  );
};

export default Routing;
