import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Language from './components/Buttons/Language/Language';
import languages from './assets/languages/languages';
import AboutMe from './components/AboutMe/AboutMe';
import { useTranslation } from 'react-i18next';
import Education from './components/Education/Education';
import Joke from "./components/Joke/Joke";

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <Language languages={languages} />
      <Header />
      <Navigation />
      <div className="pb-5 mb-5">
        <Routes>
          <Route
            path="/"
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
            <Joke />
              // <Education
              //   title={t('education.title')}
              //   data={t('education.description', { returnObjects: true })}
              // />
            }
           />
          <Route path="skills" element={<Joke />}/>
          <Route path="portfolio" element={<Joke />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
