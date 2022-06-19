import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Links from './components/Links';
import getLinks from '../../../../api/getLinks';
import Gif from './components/Gif';

const Project = ({ project }) => {
  const { title, shortDescription, stack, description } = project;

  const links = getLinks(project.id);

  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col lg={5}>
          <h3 className="mb-3">{title}</h3>
          <p>{shortDescription}</p>
          <Links links={links} />
          <p className="mt-3">
            <i>{stack}</i>
          </p>
        </Col>
        <Gif id={project.id} />
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Row>
    </Container>
  );
};

export default Project;
