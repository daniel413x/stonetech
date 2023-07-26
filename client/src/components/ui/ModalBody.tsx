import React from 'react';
import { Children } from '../../types/types';

interface ModalBodyProps {
  children?: Children;
}

function ModalBody({
  children,
}: ModalBodyProps) {
  return (
    <div className="modal-body">
      {children}
    </div>
  );
}

ModalBody.defaultProps = {
  children: undefined,
};

export default ModalBody;
