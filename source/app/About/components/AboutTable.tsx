import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import ThemeContext from '../../../context/ThemeContext';

const AboutTable = ({ info }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Table responsive>
      <tbody className={theme.class.text}>
        {Object.keys(info).map((key) => {
          if (key !== 'description') {
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

export default AboutTable;
