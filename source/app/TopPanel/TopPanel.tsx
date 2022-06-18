import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Language from './components/Language';
import languages from '../../../_data/languages';
import NavOffCanvas from './components/NavOffCanvas/NavOffCanvas';
import useDevice from '../../hooks/useDevice';

const TopPanel = ({ pages }) => {
  const { isMobile } = useDevice();

  return (
    <Navbar
      bg="black"
      variant="dark"
      className={isMobile ? 'position-sticky sticky-top' : 'position-static'}
    >
      <Container className="position-static">
        <Navbar.Brand>Frontend Developer CV</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Language languages={languages} />
          {isMobile && <NavOffCanvas pages={pages} />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopPanel;
