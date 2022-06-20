import React, { Suspense, lazy, useContext } from "react";
import { Button, Spinner } from 'react-bootstrap';
import ThemeContext from "../../../../../context/ThemeContext";

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/github'));

const Links = ({ links }) => {
  const {theme} = useContext(ThemeContext);

  if (!links) {
    return null;
  }

  return (
    <div className="d-flex flex-wrap">
      {links.map(({ id, name, link }) => (
        <Button key={id} variant={theme.button} className="project-link me-3 mb-0 mb-lg-0">
          <Suspense fallback={<Spinner animation="border" size="sm" variant={theme.spinner} />}>
            <a href={link} target="_blank" className="d-flex align-items-center" rel="noreferrer">
              {name === 'Github' ? <Icon /> : name}
            </a>
          </Suspense>
        </Button>
      ))}
    </div>
  );
};

export default Links;
