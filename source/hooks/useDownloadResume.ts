import { useState, useCallback } from 'react';
import useDispatch from '../store/hooks/useDispatch';
import { showToast } from '../store/modules/toast/actions';
import getPdf from '../api/pdf/getPdf';

const useDownloadResume = () => {
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDownload = useCallback(async () => {
    await setIsDownload(true);

    try {
      const pdfUri = await getPdf();
      const pdfLink = document.createElement('a');
      pdfLink.setAttribute('href', pdfUri);
      pdfLink.setAttribute('download', 'Davlatov CV');
      pdfLink.click();
      pdfLink.remove();
    } catch (error) {
      dispatch(showToast());
    }

    await setIsDownload(false);
  }, []);

  return { isDownload, handleDownload };
};

export default useDownloadResume;
