import { MouseEventHandler, useEffect, useState, useCallback } from 'react';

const useCard = (logo: string) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [skillLogo, setSkillLogo] = useState<any>();

  const handleClick: MouseEventHandler = useCallback(() => {
    setIsFlipped((prevState) => !prevState);
  }, []);

  const handleMouseEnter: MouseEventHandler = useCallback(() => {
    setIsFlipped(true);
  }, []);

  const handleMouseLeave: MouseEventHandler = useCallback(() => {
    setIsFlipped(false);
  }, []);

  useEffect(() => {
    import(`../../assets/images/logos/${logo}`).then(setSkillLogo);
  }, []);

  useEffect(() => {
    let timeoutID: number;
    const random = Math.floor(Math.random() * 10);

    if (random % 2 === 0) {
      setIsFlipped(true);
      timeoutID = window.setTimeout(() => setIsFlipped(false), 1000);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return { isFlipped, skillLogo, handleClick, handleMouseLeave, handleMouseEnter };
};

export default useCard;
