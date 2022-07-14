import { useRef } from 'react';

const useUserAgent = () => {
  const { current } = useRef(navigator.userAgent);
  const regexp = /Mobile.*Safari/;

  const isIosSafari = regexp.test(current);

  return { isIosSafari };
};

export default useUserAgent;
