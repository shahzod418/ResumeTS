import React, { FC } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import Language from '../Language/Language';
import languages from '../../../_data/languages';
import NavOffCanvas from '../NavOffCanvas/NavOffCanvas';
import useDevice from '../../hooks/useDevice';
import Theme from '../Theme/Theme';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';

const TopPanel: FC<{ pages: string[] }> = ({ pages }) => {
  const { navbar } = useSelector(selectTheme);
  const { isMobile } = useDevice();

  return (
    <Navbar
      variant="dark"
      className={classNames({
        'position-sticky': isMobile,
        'sticky-top': isMobile,
        'position-static': !isMobile,
      })}
      style={{ background: navbar }}
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
};

export default TopPanel;
