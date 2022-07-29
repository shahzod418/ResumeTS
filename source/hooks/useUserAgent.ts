import { useRef } from 'react';

const useUserAgent = () => {
  const userAgent = useRef(navigator.userAgent).current;
  const regexp = /^((?!chrome|android|crios|fxios).)*mobile.*safari/i;

  const isIosSafari = regexp.test(userAgent);

  return { isIosSafari };
};

export default useUserAgent;
