import React from 'react';
import ReactModal from 'react-modal';
import { Children } from '../../types/types';

export interface ModalProps {
  onClose: () => void;
  open: boolean;
  className?: string;
  children?: Children;
}

function Modal({
  open,
  onClose,
  className,
  children,
}: ModalProps) {
  return (
    <ReactModal
      style={{
        overlay: {
          ...ReactModal.defaultStyles.overlay,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      isOpen={open}
      onRequestClose={onClose}
      aria={{
        labelledby: 'header id goes here <h2 id="modal-title">This is my modal</h2>',
        describedby: 'modal-description <p id="modal-description">This modal has important information about my application.</p>',
      }}
      className={`modal ${className}`}
    >
      {children}
    </ReactModal>
  );
}

Modal.defaultProps = {
  className: '',
  children: undefined,
};

export default Modal;
