import { Component } from '@angular/core';
import { ModalgenService } from '../../../app/services/modal/modalgen.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {

  formData = {
    fechaInicial: '',
    fechaFinal: ''
  }

  modalService: ModalgenService; // Declara una propiedad para el servicio

  constructor(modalService: ModalgenService, private router: Router) {
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

  continuar() {
    let navigationExtras: NavigationExtras = {
      state: {
        fechaInicial: this.formData.fechaInicial,
        fechaFinal: this.formData.fechaFinal
      }
    };
    this.router.navigate(['reportes/reportes-historial'],navigationExtras);
  }


}
