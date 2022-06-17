import React from 'react';
import useDownloadResume from '../../hooks/useDownloadResume';

const DownloadResume = ({ text }) => {
  const { isDownload, handleDownload } = useDownloadResume();

  return (
    <button
      type="button"
      className="col-lg-6 col-xl-4 btn btn-outline-dark my-3"
      onClick={handleDownload}
      style={{ pointerEvents: isDownload ? 'none' : 'auto' }}
    >
      <span className="d-inline-block rounded-3">
        {text}
        {isDownload && <div id="download-resume" />}
      </span>
    </button>
  );
};

export default DownloadResume;
