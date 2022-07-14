import React, { FC } from 'react';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';
import useSelector from '../../store/hooks/useSelector';
import selectTheme from '../../store/modules/theme/selectors';
import useDownloadResume from '../../hooks/useDownloadResume';

const DownloadResumeOnSafariIos: FC = () => {
  const {
    spinner,
    class: { btn },
  } = useSelector(selectTheme);
  const { isDownload, handleDownload } = useDownloadResume();

  return (
    <button
      type="button"
      className={classNames('col-8', 'btn', 'my-3', btn)}
      onClick={handleDownload('download')}
      style={{ pointerEvents: isDownload ? 'none' : 'auto' }}
    >
      <span className="d-inline-block rounded-3">
        {isDownload ? <Spinner animation="border" size="sm" variant={spinner} /> : 'PDF'}
      </span>
    </button>
  );
};

export default DownloadResumeOnSafariIos;
