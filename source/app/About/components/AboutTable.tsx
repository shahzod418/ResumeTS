import React from 'react';
import { Table } from 'react-bootstrap';

const AboutTable = ({ info }) => {
  const { nationality, age, birthday } = info;

  return (
    <Table responsive>
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

export default AboutTable;
