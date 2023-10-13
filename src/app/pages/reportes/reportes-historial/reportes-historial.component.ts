import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { Router } from '@angular/router';
import { ModalgenService } from '../../../../app/services/modal/modalgen.service';

@Component({
  selector: 'app-reportes-historial',
  templateUrl: './reportes-historial.component.html',
  template:'<p>{{fechaInicial}} - {{fechaFinal}}</p>',
  styleUrls: ['./reportes-historial.component.scss']
})
export class ReportesHistorialComponent implements OnInit {

  formData = {
    fechaInicial: '',
    fechaFinal: ''
  }

  fechaInicial: String;
  fechaFinal: String;

  history: any[] = [];

  modalService: ModalgenService; // Declara una propiedad para el servicio

  constructor( modalService: ModalgenService, private reportesService: ReportesService, private router: Router) { 
    this.modalService = modalService;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      fechaInicial: string,
      fechaFinal: string
    };

    this.fechaInicial = state.fechaInicial;
    this.fechaFinal = state.fechaFinal;
}

  ngOnInit() {
    this.reportesService.ObtenerInfo({fechaInicial: this.fechaInicial, fechaFinal: this.fechaFinal}).subscribe(
      (response) => {
          this.history = response;
      },
      (error) => {
        console.error('No se encuentran reportes:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear el médico. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  goBack(): void {
    window.history.back();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.fechaInicial = this.formData.fechaInicial.toString();
    this.formData.fechaFinal = this.formData.fechaFinal.toString();

    // Llama al servicio para crear un nuevo médico
    this.reportesService.ObtenerInfo(this.formData).subscribe(
      (response) => {
        this.resetForm();
        this.router.navigate(['/reportes/reportes-historial']);
      },
      (error) => {
        console.error('No se encuentran reportes:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear el médico. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      fechaInicial: '',
      fechaFinal: ''
    };
  }
}
