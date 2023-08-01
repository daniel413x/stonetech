import React from 'react';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalBody from '../ModalBody';

interface EditorSuccessModalProps {
  onClose: () => void;
  updatedTitle?: string;
  open: boolean;
}

function EditorSuccessModal({
  open,
  onClose,
  updatedTitle,
}: EditorSuccessModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="editor-success-modal"
      id="editor-success-modal"
    >
      <ModalHeader onClose={onClose}>
        Success
      </ModalHeader>
      <ModalBody>
        <span className="line-one">{updatedTitle}</span>
        <span className="line-two">
          was saved successfully.
        </span>
      </ModalBody>
    </Modal>
  );
}

EditorSuccessModal.defaultProps = {
  updatedTitle: undefined,
};

export default EditorSuccessModal;
