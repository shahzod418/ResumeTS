import React from 'react';
import Header from './page/Header';
import Navigation from './page/Navigation';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './page/Footer';
import AboutMe from './page/AboutMe';
import { useTranslation } from 'react-i18next';
import Education from './page/Education';
import Joke from './page/Joke';
import TopPanel from './page/TopPanel';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopPanel />
      <Header />
      <Navigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to='about' />}/>
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
          <Route path="skills" element={<Joke title={t('toast')} />} />
          <Route path="portfolio" element={<Joke title={t('toast')} />} />
          <Route path="*" element={<Joke title={t('toast')} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
