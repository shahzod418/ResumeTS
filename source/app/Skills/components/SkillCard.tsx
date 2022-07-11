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
    height: 220,
    width: 220,
  };

  return (
    <Col>
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
              style={{ height: 120, width: 120 }}
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
          <Card.Body className="p-0 d-flex align-items-center">
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </Col>
  );
};

export default SkillCard;
