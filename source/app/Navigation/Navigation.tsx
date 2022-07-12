import React, { FC } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import useDevice from '../../hooks/useDevice';

const Navigation: FC<{ pages: string[] }> = ({ pages }) => {
  const { t } = useTranslation();
  const { isMobile } = useDevice();

  if (isMobile) {
    return null;
  }

  return (
    <Container fluid className="border-bottom border-primary">
      <Container>
        <Row>
          <Col sm={10} className="mx-auto py-3">
            <Nav justify variant="pills" className="d-none d-sm-flex ">
              {pages.map((page) => (
                <Nav.Item key={page}>
                  <LinkContainer to={page}>
                    <Nav.Link eventKey={`/${page}`}>{t(`${page}.title`)}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Navigation;
