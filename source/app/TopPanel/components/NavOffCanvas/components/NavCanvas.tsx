import { ListGroup, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React, { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import useSelector from '../../../../../store/hooks/useSelector';
import selectTheme from '../../../../../store/modules/theme/selectors';

interface NavCanvasProps {
  pages: string[];
  handleClose: MouseEventHandler;
}

const NavCanvas: FC<NavCanvasProps> = ({ pages, handleClose }) => {
  const theme = useSelector(selectTheme);
  const { t } = useTranslation();

  return (
    <Nav>
      <ListGroup variant="flush" onClick={handleClose}>
        {pages.map((page) => (
          <ListGroup.Item key={page} className={classNames('bg-transparent', theme.class.border)}>
            <Nav.Item>
              <LinkContainer to={page}>
                <Nav.Link eventKey={`/${page}`}>{t(`${page}.title`)}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Nav>
  );
};

export default NavCanvas;
