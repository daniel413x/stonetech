import React, { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite';
import { Children } from '../../types/types';
import Context from '../../context/context';

export interface ModalProps {
  onClose: () => void;
  open: boolean;
  className?: string;
  children?: Children;
  id: string;
}

function Modal({
  open,
  onClose,
  className,
  children,
  id,
}: ModalProps) {
  const { modal } = useContext(Context);
  const [isFirstId, setIsFirstId] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  useEffect(() => {
    if (open) {
      modal.setOrder([...modal.order, id]);
    } else {
      modal.setOrder(modal.order.filter((modalId) => modalId !== id));
    }
  }, [open]);
  useEffect(() => {
    setIsFirstId(modal.order[0] === id);
    setMute(modal.order[modal.order.length - 1] !== id);
  }, [modal.order]);
  return (
    <ReactModal
      id={id}
      style={{
        overlay: {
          ...ReactModal.defaultStyles.overlay,
          backgroundColor: isFirstId ? 'rgba(0, 0, 0, 0.5)' : '',
        },
      }}
      isOpen={open}
      onRequestClose={onClose}
      aria={{
        labelledby: 'header id goes here <h2 id="modal-title">This is my modal</h2>',
        describedby: 'modal-description <p id="modal-description">This modal has important information about my application.</p>',
      }}
      className={`modal ${className} ${mute ? 'mute' : ''}`}
    >
      {children}
    </ReactModal>
  );
}

Modal.defaultProps = {
  className: '',
  children: undefined,
};

export default observer(Modal);
