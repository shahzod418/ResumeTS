import { useState, useCallback } from 'react';

const useClipboard = () => {
  const [isCopy, setCopy] = useState(false);

  const handleClipboard = useCallback(
    (text) => async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopy(true);
      } catch (error) {
        setCopy(false);
        throw error;
      }
    },
    [],
  );

  return { isCopy, handleClipboard };
};

export default useClipboard;
