import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Joke from '../Joke/Joke';

const Routing = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="about" />} />
      <Route
        path="about"
        element={
          <About title={t('about.title')} info={t('about.description', { returnObjects: true })} />
        }
      />
      <Route
        path="education"
        element={
          <Education
            title={t('education.title')}
            info={t('education.description', { returnObjects: true })}
          />
        }
      />
      <Route
        path="skills"
        element={
          <Skills
            header={t('skills.title')}
            skills={t('skills.description', { returnObjects: true })}
          />
        }
      />
      <Route
        path="projects"
        element={
          <Projects
            title={t('projects.title')}
            info={t('projects.description', { returnObjects: true })}
          />
        }
      />
      <Route path="*" element={<Joke title={t('toast')} />} />
    </Routes>
  );
};

export default Routing;
