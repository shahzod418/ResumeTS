export default interface IEducation {
  higher: {
    title: string;
    universities: {
      university: string;
      faculty: string;
      specialisation: string;
      date: string;
    }[];
  };
  additional: {
    title: string;
    schools: {
      school: string;
      courses: {
        name: string;
        date: string;
        link: string;
      }[];
    }[];
  };
}
