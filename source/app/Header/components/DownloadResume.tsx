import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Spinner } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import useDownloadResume from '../../../hooks/useDownloadResume';
import useSelector from '../../../store/hooks/useSelector';
import selectTheme from '../../../store/modules/theme/selectors';

const DownloadResume: FC<{ text: string }> = ({ text }) => {
  const theme = useSelector(selectTheme);
  const { isDownload, handleDownload } = useDownloadResume();

  return (
    <ButtonGroup className="col-10 col-sm-5 col-md-4 col-lg-6 col-xl-5">
      <button
        type="button"
        className={classNames('btn', 'my-3', theme.class.btn)}
        onClick={handleDownload}
        style={{ pointerEvents: isDownload ? 'none' : 'auto' }}
      >
        <span className="d-inline-block rounded-3">{text}</span>
      </button>
      <button
        type="button"
        className={classNames('col-1', 'btn', 'my-3', theme.class.btn)}
        style={{ pointerEvents: 'none' }}
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
