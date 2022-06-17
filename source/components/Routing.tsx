import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import AboutMe from '../page/AboutMe';
import Education from '../page/Education';
import Skills from '../page/Skills';
import Projects from '../page/Projects';
import Joke from '../page/Joke';

const Routing = () => {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="about" />} />
      <Route
        path="about"
        element={
          <AboutMe
            title={t('aboutMe.title')}
            data={t('aboutMe.description', { returnObjects: true })}
          />
        }
      />
      <Route
        path="education"
        element={
          <Education
            title={t('education.title')}
            data={t('education.description', { returnObjects: true })}
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
            data={t('projects.description', { returnObjects: true })}
          />
        }
      />
      <Route path="*" element={<Joke title={t('toast')} />} />
    </Routes>
  );
};

export default Routing;
