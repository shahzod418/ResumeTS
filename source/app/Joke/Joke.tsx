import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import gif from '../../../assets/gifs/rick-astley-never-gonna-give-you-up.gif';

function Joke({ title }) {
  return (
    <Container className="d-flex flex-column align-items-center pt-5">
      <Row>
        <h2>{title}</h2>
      </Row>
      <Row>
        <Image src={gif} />
      </Row>
    </Container>
  );
}

export default Joke;
