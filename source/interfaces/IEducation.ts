export interface IUniversities {
  university: string;
  faculty: string;
  specialisation: string;
  date: string;
}

export interface IHigher {
  title: string;
  universities: IUniversities[];
}

export interface ICourse {
  id: string;
  name: string;
  date: string;
}

export interface ISchools {
  school: string;
  courses: ICourse[];
}

export interface IAdditional {
  title: string;
  schools: ISchools[];
}

export default interface IEducation {
  higher: IHigher;
  additional: IAdditional;
}
