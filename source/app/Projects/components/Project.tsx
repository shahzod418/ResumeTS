import React, { Suspense } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Link from './Link';
import getLinks from '../../../api/getLinks';
import getGif from '../../../api/getGif';

const Project = ({ project }) => {
  const { id, title, shortDescription, stack, description } = project;

  const links = getLinks(id);
  const gif = getGif(id);

  return (
    <Container className="p-3">
      <Row className="mb-3">
        <Col lg={5}>
          <h3 className="mb-3">{title}</h3>
          <p>{shortDescription}</p>
          <div className="d-flex flex-wrap">
            {links?.map(({ id, name, link }) => (
              <Link key={id} name={name} link={link} />
            ))}
          </div>
          <p className="mt-3">
            <i>{stack}</i>
          </p>
        </Col>
        <Col lg={7}>
          <div className="position-relative" style={{ width: 'auto', height: 'auto' }}>
            <Suspense
              fallback={
                <Spinner animation="border" variant="dark" className="position-absolute start-50" />
              }
            >
              {gif}
            </Suspense>
          </div>
        </Col>
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Row>
    </Container>
  );
};

export default Project;
