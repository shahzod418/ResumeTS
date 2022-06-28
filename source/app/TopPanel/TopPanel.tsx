import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import Language from './components/Language';
import languages from '../../../_data/languages';
import NavOffCanvas from './components/NavOffCanvas/NavOffCanvas';
import useDevice from '../../hooks/useDevice';
import Theme from './components/Theme';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';

function TopPanel({ pages }) {
  const theme = useSelector(selectTheme);
  const { isMobile } = useDevice();

  return (
    <Navbar
      variant="dark"
      className={classNames({
        'position-sticky': isMobile,
        'sticky-top': isMobile,
        'position-static': !isMobile,
      })}
      style={{ background: theme.navbar }}
    >
      <Container className="position-static">
        <div className="w-25">
          <Navbar.Brand>Frontend Developer</Navbar.Brand>
        </div>
        <Navbar.Collapse className="justify-content-end">
          <Theme />
          <Language languages={languages} />
          {isMobile && <NavOffCanvas pages={pages} />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopPanel;
