import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import Context from '../../context/context';

function ErrorModal() {
  const {
    modal,
  } = useContext(Context);
  return (
    <Modal
      open={modal.showErrorModal}
      onClose={() => modal.setShowErrorModal(false)}
      className="error-modal"
      id="error-modal"
    >
      <ModalHeader onClose={() => modal.setShowErrorModal(false)}>
        An error occurred
      </ModalHeader>
      <ModalBody>
        <span className="line-one">
          Error message:
        </span>
        <br />
        <span className="line-two">
          {modal.errorModalMessage || 'Network Error'}
        </span>
      </ModalBody>
    </Modal>
  );
}

export default observer(ErrorModal);
