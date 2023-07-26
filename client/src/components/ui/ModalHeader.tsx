import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from './Button';
import { Children } from '../../types/types';

interface ModalHeaderProps {
  onClose: () => void;
  text?: string;
  children?: Children;
}

function ModalHeader({
  text,
  onClose,
  children,
}: ModalHeaderProps) {
  return (
    <div className="modal-header">
      <h4>
        {text || children}
      </h4>
      <Button onClick={onClose}><CloseIcon /></Button>
    </div>
  );
}

ModalHeader.defaultProps = {
  text: '',
  children: undefined,
};

export default ModalHeader;
