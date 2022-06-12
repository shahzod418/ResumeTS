import { ReactElement } from 'react';

export default interface Project {
  type: string;
  projects: {
    id: string;
    title: string;
    shortDescription: string;
    stack: string;
    description: ReactElement;
  }[];
}
