import { makeAutoObservable } from 'mobx';

export default class ModalStore {
  errorModalMessage: string;

  showErrorModal: boolean;

  order: string[];

  constructor() {
    this.errorModalMessage = '';
    this.order = [];
    this.showErrorModal = false;
    makeAutoObservable(this);
  }

  setErrorModalMessage(message: string) {
    this.errorModalMessage = message;
    this.setShowErrorModal(true);
  }

  setShowErrorModal(boolean: boolean) {
    this.showErrorModal = boolean;
  }

  setOrder(arr: string[]) {
    this.order = arr;
  }
}
