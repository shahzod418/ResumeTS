import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import LazyGif from '../../hoсs/LazyGif';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';

const Joke: FC<{ title: string }> = ({ title }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);

  return (
    <Container className="d-flex flex-column align-items-center p-5">
      <Row>
        <h2 className={text}>{title}</h2>
      </Row>
      <Row>
        <LazyGif name="rick-astley-never-gonna-give-you-up" />
      </Row>
    </Container>
  );
};

export default Joke;
