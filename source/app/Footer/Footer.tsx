import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import ThemeContext from '../../context/ThemeContext';

const Footer = ({ author }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      fluid
      className={classNames('ps-3', 'pt-1', 'pb-1')}
      style={{ backgroundColor: theme.footer }}
    >
      <Row className="align-items-center">
        <Col className="text-white text-center">
          <span>{`\u00A9 ${new Date().getFullYear()} `}</span>
          <a
            href={author.link}
            target="_blank"
            className="text-white text-decoration-none"
            rel="noreferrer"
          >
            {author.name}
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
