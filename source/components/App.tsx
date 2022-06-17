import React from 'react';
import Header from '../page/Header';
import Navigation from '../page/Navigation';
import Footer from '../page/Footer';
import TopPanel from '../page/TopPanel';
import Routing from './Routing';

const App = () => (
  <>
    <TopPanel />
    <Header />
    <Navigation />
    <div className="flex-grow-1">
      <Routing />
    </div>
    <Footer />
  </>
);

export default App;
