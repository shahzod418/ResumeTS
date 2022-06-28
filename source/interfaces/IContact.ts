import { ReactElement } from 'react';

export default interface IContact {
  type: string;
  link: string;
  popup: string;
  lazy: ReactElement;
}
