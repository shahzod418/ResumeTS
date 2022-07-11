import { MouseEventHandler, useEffect, useState, useCallback } from 'react';

const useCard = (logo: string) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [skillLogo, setSkillLogo] = useState<any>();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIsFlipped((prevState) => !prevState);
  }, []);

  useEffect(() => {
    import(`../../assets/images/logos/${logo}`).then(setSkillLogo);
  }, []);

  useEffect(() => {
    let timeoutID: number;
    const random = Math.floor(Math.random() * 10);

    if (random === 3 || random === 5 || random === 7 || random === 9) {
      setIsFlipped(true);
      timeoutID = window.setTimeout(() => setIsFlipped(false), 1000);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return { isFlipped, skillLogo, handleClick };
};

export default useCard;
