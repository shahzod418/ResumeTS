import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import TopPanel from './TopPanel/TopPanel';
import Routing from './Routing/Routing';

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
