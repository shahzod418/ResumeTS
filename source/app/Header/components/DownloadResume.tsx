import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Spinner } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import useDownloadResume from '../../../hooks/useDownloadResume';
import useSelector from '../../../store/hooks/useSelector';
import selectTheme from '../../../store/modules/theme/selectors';

const DownloadResume: FC = () => {
  const theme = useSelector(selectTheme);
  const { isDownload, handleDownload } = useDownloadResume();

  return (
    <ButtonGroup className="col-8 col-md-6">
      <button
        type="button"
        className={classNames('col-8', 'btn', 'my-3', theme.class.btn)}
        onClick={handleDownload('newPage')}
      >
        <span className="d-inline-block rounded-3">PDF</span>
      </button>
      <button
        type="button"
        className={classNames('col-1', 'btn', 'my-3', theme.class.btn)}
        onClick={handleDownload('download')}
        style={{ pointerEvents: isDownload ? 'none' : 'auto' }}
      >
        <span className="d-inline-block rounded-3">
          {isDownload ? (
            <Spinner animation="border" size="sm" variant={theme.spinner} />
          ) : (
            <Download />
          )}
        </span>
      </button>
    </ButtonGroup>
  );
};

export default DownloadResume;
