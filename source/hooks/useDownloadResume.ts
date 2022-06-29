import { useState, useCallback, useEffect } from 'react';
import Download from '../app/Svelte/Resume/Resume.svelte';
import useDispatch from '../store/hooks/useDispatch';
import { showToast } from '../store/modules/toast/actions';

const useDownloadResume = () => {
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDownload) {
      downloadResume().then(() => {
        setIsDownload(false);
      });
    }
  }, [isDownload]);

  const downloadResume = async () => {
    await new Download({
      target: document.querySelector('#download-resume'),
      props: { dispatch, showToast },
    });
  };

  const handleDownload = useCallback(() => {
    setIsDownload(true);
  }, []);

  return { isDownload, handleDownload };
};

export default useDownloadResume;
