import React, { Suspense, lazy, FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useSelector from '../../../../../store/hooks/useSelector';
import selectTheme from '../../../../../store/modules/theme/selectors';
import { IProjectLinks } from '../../../../../interfaces/IProjectsLinks';

const Icon = lazy(() => import('react-bootstrap-icons/dist/icons/github'));

const Links: FC<{ links: IProjectLinks[] | undefined }> = ({ links }) => {
  const theme = useSelector(selectTheme);

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
