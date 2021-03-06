import React, { FC } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Col, Spinner } from 'react-bootstrap';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import useCard from '../../hooks/useCard';

interface SkillCardProps {
  title: string;
  logo: string;
  text: string;
}

const SkillCard: FC<SkillCardProps> = ({ title, logo, text }) => {
  const { spinner } = useSelector(selectTheme);
  const { isFlipped, skillLogo, handleClick, handleMouseLeave, handleMouseEnter } = useCard(logo);

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
          onMouseEnter={handleMouseEnter}
          className="border-0 d-flex"
        >
          {skillLogo ? (
            <>
              <Card.Img
                src={skillLogo?.default}
                className="m-auto"
                style={{ height: 120, width: 120 }}
              />
              <Card.Body className="p-0 m-0 pt-3">
                <Card.Title className="text-center">{title}</Card.Title>
              </Card.Body>
            </>
          ) : (
            <Spinner animation="border" className="m-auto" variant={spinner} />
          )}
        </Card>
        <Card
          style={{ ...style, backgroundColor: 'transparent' }}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          className="border-0"
        >
          <Card.Body className="p-0">
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </Col>
  );
};

export default SkillCard;
