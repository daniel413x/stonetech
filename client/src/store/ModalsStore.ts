import { makeAutoObservable } from 'mobx';

export default class ModalStore {
  errorModalMessage: string;

  showErrorModal: boolean;

  constructor() {
    this.errorModalMessage = '';
    this.showErrorModal = false;
    makeAutoObservable(this);
  }

  setErrorModalMessage(message: string) {
    this.errorModalMessage = message;
    this.setShow(true);
  }

  setShow(boolean: boolean) {
    this.showErrorModal = boolean;
  }
}
