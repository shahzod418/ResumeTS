import React, { Suspense, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const DownloadResume = ({ text }) => {
  const [isDownload, setIsDownload] = useState(false);

  const handleDownload = () => {
    setIsDownload(true);
  };

  return (
    <button
      type="button"
      className="col-lg-6 col-xl-4 btn btn-outline-dark my-3"
      onClick={handleDownload}
      style={{ pointerEvents: isDownload ? 'none' : 'auto' }}
    >
      <span className="d-inline-block rounded-3">
        {text}
        {isDownload && (
          <Suspense fallback={<Spinner animation="border" size="sm" />}>
            <div id="download-resume"></div>
          </Suspense>
        )}
      </span>
    </button>
  );
};

export default DownloadResume;
