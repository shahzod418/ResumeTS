import React, { useContext } from 'react';
import classNames from 'classnames';
import useDownloadResume from '../../../hooks/useDownloadResume';
import ThemeContext from '../../../context/ThemeContext';

const DownloadResume = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  const { isDownload, handleDownload } = useDownloadResume();

  return (
    <button
      type="button"
      className={classNames('col-lg-6', 'col-xl-4', 'btn', 'my-3', theme.class.btn)}
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
