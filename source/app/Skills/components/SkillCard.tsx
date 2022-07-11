import React, { FC } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Col, Spinner } from 'react-bootstrap';
import useSelector from '../../../store/hooks/useSelector';
import selectTheme from '../../../store/modules/theme/selectors';
import useCard from '../../../hooks/useCard';

interface SkillCardProps {
  logo: string;
  text: string;
}

const SkillCard: FC<SkillCardProps> = ({ logo, text }) => {
  const theme = useSelector(selectTheme);
  const { isFlipped, skillLogo, handleClick } = useCard(logo);

  const style = {
    height: 230,
    width: 230,
  };

  return (
    <Col className="mb-5">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card
          style={{ ...style, backgroundColor: 'transparent' }}
          onClick={handleClick}
          className="border-0"
        >
          {skillLogo ? (
            <Card.Img
              src={skillLogo?.default}
              className="m-auto"
              style={{ height: 100, width: 100 }}
            />
          ) : (
            <Spinner animation="border" className="m-auto" variant={theme.spinner} />
          )}
        </Card>
        <Card
          style={{ ...style, backgroundColor: 'transparent' }}
          onClick={handleClick}
          className="border-0"
        >
          <Card.Body className="d-flex align-items-center">
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </Col>
  );
};

export default SkillCard;
