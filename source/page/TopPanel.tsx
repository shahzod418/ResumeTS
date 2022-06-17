import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Language from '../components/Popups/Language';
import languages from '../assets/languages/languages';
import NavOffCanvas from '../components/NavOffCanvas';

const TopPanel = () => (
  <Navbar
    bg="black"
    variant="dark"
    className={window.screen.width <= 575 ? 'position-sticky sticky-top' : 'position-static'}
  >
    <Container className="position-static">
      <Navbar.Brand>Frontend Developer CV</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Language languages={languages} />
        <NavOffCanvas />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopPanel;
