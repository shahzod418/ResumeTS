import { useRef } from 'react';

const useUserAgent = () => {
  const userAgent = useRef(navigator.userAgent).current;
  const vendor = useRef(navigator.vendor).current;
  const regexp = /Mobile.*Safari/;

  const isIosSafari = regexp.test(userAgent) && vendor === 'Apple Computer, Inc.';

  return { isIosSafari };
};

export default useUserAgent;
