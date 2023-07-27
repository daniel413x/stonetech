import React from 'react';
import Modal, { ModalProps } from '../../Modal';
import { ReactComponent as Envelope } from '../../../../assets/icons/envelope.svg';
import ModalHeader from '../../ModalHeader';
import ModalBody from '../../ModalBody';

function ContactSuccessModal({
  onClose,
  open,
  id,
}: ModalProps) {
  return (
    <Modal
      id={id}
      onClose={onClose}
      open={open}
      className="contact-success-modal"
    >
      <ModalHeader onClose={onClose}>Success</ModalHeader>
      <ModalBody>
        <Envelope />
        <span>Your message was sent.</span>
      </ModalBody>
    </Modal>
  );
}

export default ContactSuccessModal;
