import { useState, useCallback } from 'react';
import useDispatch from '../store/hooks/useDispatch';
import { showToast } from '../store/modules/toast/actions';
import getPdf from '../api/pdf/getPdf';

const useDownloadResume = () => {
  const [isDownload, setIsDownload] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDownload = useCallback(
    (action: string) => async () => {
      await setIsDownload(true);

      try {
        const pdf = await getPdf();
        const blobStore = new Blob([pdf], { type: 'application/pdf' });
        const url = URL.createObjectURL(blobStore);

        const pdfLink = document.createElement('a');
        pdfLink.setAttribute('href', url);

        switch (action) {
          case 'download':
            pdfLink.setAttribute('download', 'Davlatov CV');
            break;
          default:
            pdfLink.setAttribute('target', '_blank');
        }

        pdfLink.click();
        pdfLink.remove();
      } catch (error) {
        dispatch(showToast());
      }

      await setIsDownload(false);
    },
    [],
  );

  return { isDownload, handleDownload };
};

export default useDownloadResume;
