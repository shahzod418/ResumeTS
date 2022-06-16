import { Container, Row } from 'react-bootstrap';

const Education = ({ title, data }) => {
  const { higher, additional } = data;

  return (
    <Container>
      <Row>
        <h2 className="d-none">{title}</h2>
      </Row>
      <Row>

      </Row>
    </Container>
  );
};

export default Education;
