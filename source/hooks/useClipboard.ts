import { useState, useCallback } from 'react';
import useDispatch from '../store/hooks/useDispatch';
import { showToast } from '../store/modules/toast/actions';

const useClipboard = () => {
  const [isCopy, setCopy] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClipboard = useCallback(
    (text: string) => async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopy(true);
      } catch (error) {
        dispatch(showToast());
        setCopy(false);
      }
    },
    [],
  );

  return { isCopy, handleClipboard };
};

export default useClipboard;
