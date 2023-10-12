import { Component } from '@angular/core';
import { ModalgenService } from '../../../app/services/modal/modalgen.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {

  modalService: ModalgenService; // Declara una propiedad para el servicio

  constructor(modalService: ModalgenService) {
    this.modalService = modalService; // Asigna el servicio en el constructor
  }

  goBack(): void {
    window.history.back();
  }

  openModal() {
    this.modalService.showModal();
  }

  closeModal() {
    this.modalService.hideModal();
  }
}
