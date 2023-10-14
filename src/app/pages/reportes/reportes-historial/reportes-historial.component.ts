import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalgenService } from '../../../../app/services/modal/modalgen.service';
import { HttpResponse } from '@angular/common/http';

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

  formData2 = {
    record_id: 0
  }

  fechaInicial: String;
  fechaFinal: String;

  history: any[] = [];

  modalService: ModalgenService; // Declara una propiedad para el servicio

  constructor( modalService: ModalgenService, private reportesService: ReportesService, private router: Router,
    private route: ActivatedRoute) {

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

  onSubmit(event: Event): void {
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

  onEditMedico(record_id: number): void {
    // this.formData2.record_id = record_id;
    this.formData2.record_id = +record_id;
    // console.log('dato en oneditmedico',record_id);
    // console.log(typeof record_id);
    this.loadPdf();
  }

  loadPdf(): void {
    if (this.formData2.record_id) {
      this.reportesService.ObtenerDocumento(this.formData2.record_id).subscribe(
        (response: HttpResponse<Blob>) => {
          const blob = response.body;
  
          if (blob) {
            // Crear una nueva URL para el blob
            const url = window.URL.createObjectURL(blob);
  
            // Crear un elemento <a> para descargar el PDF
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank'; 
            // a.download = 'reporte.pdf'; // Nombre del archivo PDF para descarga
            a.style.display = 'none';
  
            // Agregar el elemento <a> al documento y simular un clic
            document.body.appendChild(a);
            a.click();
  
            // Liberar el objeto URL y remover el elemento <a>
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          } else {
            console.error('El PDF está vacío o no se ha encontrado.');
          }
        },
        (error) => {
          console.error('Error al cargar el PDF', error);
        }
      );
    }
  }
  
}
