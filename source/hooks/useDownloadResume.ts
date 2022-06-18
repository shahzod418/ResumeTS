import { useState, useCallback } from 'react';
import Download from '../app/Svelte/Resume/Resume.svelte';

const useDownloadResume = () => {
  const [isDownload, setIsDownload] = useState(false);

  const downloadResume = useCallback(() => {
    new Download({ target: document.querySelector('#download-resume') });
    setIsDownload((currentStatus) => !currentStatus);
  }, []);

  const handleDownload = useCallback(async () => {
    await setIsDownload((currentStatus) => !currentStatus);
    await downloadResume();
  }, []);

  return { isDownload, handleDownload };
};

export default useDownloadResume;
