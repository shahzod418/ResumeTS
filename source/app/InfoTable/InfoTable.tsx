import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import IAbout from '../../interfaces/IAbout';

interface ExcludeKeys {
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
}

const excludeKeys: (keyof ExcludeKeys)[] = ['firstParagraph', 'secondParagraph', 'thirdParagraph'];

type TFormattedInfo = Omit<IAbout, keyof ExcludeKeys>;

const InfoTable: FC<{ info: IAbout }> = ({ info }) => {
  const {
    class: { text },
  } = useSelector(selectTheme);

  const formattedInfo: TFormattedInfo = excludeKeys.reduce((acc, key) => {
    if (excludeKeys.includes(key)) {
      delete acc[key];

      return acc;
    }

    return acc;
  }, info);

  return (
    <Table>
      <tbody className={text}>
        {(Object.keys(formattedInfo) as (keyof typeof formattedInfo)[]).map((key) => (
          <tr key={key}>
            <td>{info[key]?.title}</td>
            <td>{info[key]?.text}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoTable;
