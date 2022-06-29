import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CourseLinkProps {
  link: string | null;
  name: string;
}

const CourseLink: FC<CourseLinkProps> = ({ link, name }) => {
  if (!link) {
    return (
      <Link to="/404" className="text-decoration-none">
        {name}
      </Link>
    );
  }

  return (
    <a href={link} target="_blank" className="text-decoration-none" rel="noreferrer">
      {name}
    </a>
  );
};

export default CourseLink;
