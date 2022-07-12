import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Links from '../Links/Links';
import Gif from '../Gif/Gif';
import { IProject } from '../../interfaces/IProjects';
import projectsLinks from '../../../_data/projectsLinks';

const Project: FC<{ project: IProject }> = ({ project }) => {
  const { id, title, shortDescription, stack, description } = project;

  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col lg={5}>
          <h3 className="mb-3">{title}</h3>
          <p>{shortDescription}</p>
          <Links links={projectsLinks[id]} />
          <p className="mt-3">
            <i>{stack}</i>
          </p>
        </Col>
        <Gif id={project.id} />
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </Row>
    </Container>
  );
};

export default Project;
