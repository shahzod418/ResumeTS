import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IAbout from '../../interfaces/IAbout';

const excludeKeys = ['firstParagraph', 'secondParagraph', 'thirdParagraph'];

const InfoTable: FC<{ info: IAbout }> = ({ info }) => {
  const theme = useSelector(selectTheme);

  return (
    <Table responsive>
      <tbody className={theme.class.text}>
        {Object.keys(info).map((key) => {
          if (!excludeKeys.includes(key)) {
            return (
              <tr key={key}>
                <td>{info[key].title}</td>
                <td>{info[key].text}</td>
              </tr>
            );
          }

          return null;
        })}
      </tbody>
    </Table>
  );
};

export default InfoTable;