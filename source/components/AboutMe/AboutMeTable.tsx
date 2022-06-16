import React from 'react';
import { Table } from 'react-bootstrap';

const AboutMeTable = ({ data }) => {
  const { nationality, age, birthday } = data;

  return (
    <Table responsive variant="transparent">
      <tbody>
        <tr>
          <td>{nationality.title}</td>
          <td>{nationality.text}</td>
        </tr>
        <tr>
          <td>{age.title}</td>
          <td>{age.text}</td>
        </tr>
        <tr>
          <td>{birthday.title}</td>
          <td>{birthday.text}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AboutMeTable;
