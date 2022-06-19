import React from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import TopPanel from './TopPanel/TopPanel';
import Routing from './Routing/Routing';
import author from '../../_data/author';
import contacts from '../../_data/contacts';
import bar from '../../assets/images/F0A55220-F7D4-4964-8645-479CA10C3CD8_1_105_c.png';
import elevator from '../../assets/images/3926DCAF-C0E0-44D9-85CC-7AB187A1D431_1_105_c.png';
import pages from '../../_data/pages';

const App = () => {
  return (
    <>
      <TopPanel pages={pages} />
      <Header contacts={contacts} photos={[bar, elevator]} />
      <Navigation pages={pages} />
      <div className="flex-grow-1">
        <Routing pages={pages} />
      </div>
      <Footer author={author} />
    </>
  );
};

export default App;
