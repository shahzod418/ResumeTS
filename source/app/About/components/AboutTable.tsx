import React from 'react';
import { Table } from 'react-bootstrap';

const AboutTable = ({ info }) => (
  <Table responsive>
    <tbody>
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

export default AboutTable;
