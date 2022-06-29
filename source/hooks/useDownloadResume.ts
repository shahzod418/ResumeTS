import { useState, useCallback } from 'react';
import Download from '../app/Svelte/Resume/Resume.svelte';
import useDispatch from '../store/hooks/useDispatch';
import { showToast } from '../store/modules/toast/actions';

const useDownloadResume = () => {
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const dispatch = useDispatch();

  const downloadResume = () => {
    try {
      new Download({ target: document.querySelector('#download-resume') });
      setIsDownload((currentStatus) => !currentStatus);
    } catch (error) {
      dispatch(showToast());
      setIsDownload((currentStatus) => !currentStatus);
    }
  };

  const handleDownload = useCallback(async () => {
    await setIsDownload((currentStatus) => !currentStatus);
    await downloadResume();
  }, []);

  return { isDownload, handleDownload };
};

export default useDownloadResume;
