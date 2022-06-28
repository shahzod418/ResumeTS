const getDates = () => {
  const myBirthday = ((): Date => new Date('2000-09-17'))();

  const currentAge = ((): number =>
    Math.floor((Date.now() - myBirthday.getTime()) / (24 * 3600 * 365.25 * 1000)))();

  return { myBirthday, currentAge };
};

export default getDates;
