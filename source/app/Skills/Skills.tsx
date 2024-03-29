import React, { FC, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import classNames from 'classnames';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import SkillCard from '../SkillCard/SkillCard';
import ISkill, { ISkillsText, SkillsCategory } from '../../interfaces/ISkill';
import mappingFilter from '../../api/mappingFilter';

interface SkillsProps {
  title: string;
  skills: ISkill[];
  skillsTexts: ISkillsText;
}

type SelectCallback = (eventKey: string | null, e: React.SyntheticEvent<unknown>) => void;

const Skills: FC<SkillsProps> = ({ title, skills, skillsTexts }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);
  const [filter, setFilter] = useState<string>('All');

  const handleSelect = (category: SkillsCategory) => {
    setFilter(category);
  };

  const skillsList = skills.filter(mappingFilter[filter]);

  return (
    <Container className={classNames('p-4', 'p-md-5', text)}>
      <Row>
        <h2 className="d-block d-sm-none mb-3">{title}</h2>
      </Row>
      <Row>
        <Col sm={10} className="mx-auto">
          <Container>
            <Row className="mb-3 pb-3 border-bottom border-primary">
              <Tabs
                defaultActiveKey="All"
                variant="pills"
                onSelect={handleSelect as SelectCallback}
              >
                {Object.keys(mappingFilter).map((category) => (
                  <Tab key={category} eventKey={category} title={category} />
                ))}
              </Tabs>
            </Row>
            <Row className="row-cols-auto d-flex justify-content-center pt-5">
              {skillsList.map(({ id, logo }) => (
                <SkillCard key={id} title={id} logo={logo} text={skillsTexts[id]} />
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
