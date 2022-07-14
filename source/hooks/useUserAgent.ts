import { useRef } from 'react';

const useUserAgent = () => {
  const userAgent = useRef(navigator.userAgent).current;
  const regexpSafari = /^((?!chrome|android|crios|fxios).)*safari/i;
  const regexpMobileSafari = /Mobile.*Safari/;

  const isIosSafari = regexpSafari.test(userAgent) && regexpMobileSafari.test(userAgent);

  return { isIosSafari };
};

export default useUserAgent;
