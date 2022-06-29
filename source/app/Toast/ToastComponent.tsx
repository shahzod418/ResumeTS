import { Toast, ToastContainer } from 'react-bootstrap';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import useSelector from '../../store/hooks/useSelector';
import selectToast from '../../store/modules/toast/selectors';
import useDispatch from '../../store/hooks/useDispatch';
import { closeToast } from '../../store/modules/toast/actions';

const ToastComponent: FC = () => {
  const { t } = useTranslation();
  const show = useSelector(selectToast);
  const dispatch = useDispatch();

  return (
    <ToastContainer style={{ position: 'fixed', bottom: 10, right: 10 }}>
      <Toast onClose={() => dispatch(closeToast())} show={show} delay={2000} autohide bg="danger">
        <Toast.Body className="text-white fs-6">{t('toast')}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastComponent;
