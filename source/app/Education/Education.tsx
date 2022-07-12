import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import classNames from 'classnames';
import Higher from './components/Higher/Higher';
import Additional from './components/Additional/Additional';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IEducation from '../../interfaces/IEducation';

interface EducationProps {
  title: string;
  info: IEducation;
}

const Education: FC<EducationProps> = ({ title, info }) => {
  const theme = useSelector(selectTheme);
  const { higher, additional } = info;

  return (
    <Container className={classNames('p-4', 'p-md-5', theme.class.text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Higher higher={higher} />
      </Row>
      <Row>
        <Additional additional={additional} />
      </Row>
    </Container>
  );
};

export default Education;
