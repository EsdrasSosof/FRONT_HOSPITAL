import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalgenService {

  // constructor() { }

  private modalVisible = false;

  showModal() {
    this.modalVisible = true;
    console.log("llega", this.modalVisible);
  }

  hideModal() {
    this.modalVisible = false;
  }

  isModalVisible() {
    console.log("llega", this.modalVisible);
    return this.modalVisible;
  }
}
