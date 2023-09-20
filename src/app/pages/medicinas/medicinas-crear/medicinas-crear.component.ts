import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinasService } from 'src/app/services/medicinas/medicinas.service';

@Component({
  selector: 'app-medicinas-crear',
  templateUrl: './medicinas-crear.component.html',
  styleUrls: ['./medicinas-crear.component.scss']
})
export class MedicinasCrearComponent {
  formData = {
    commercial_name: '',
    scientific_name: '',
    description:''
  }

  constructor(private medicinasService: MedicinasService,   private router: Router){}

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.commercial_name = this.formData.commercial_name.toString();
    this.formData.scientific_name = this.formData.scientific_name.toString();
    this.formData.description = this.formData.description.toString();

    // Llama al servicio para crear un nuevo médico
    this.medicinasService.createMedicines(this.formData).subscribe(
      (response) => {
        console.log('Medicina creada exitosamente:', response);
        this.resetForm();
        alert('La medicina se creó exitosamente');
        this.router.navigate(['/medicinas']);
      },
      (error) => {
        console.error('Error al crear la medicina:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear la medicina. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      commercial_name: '',
      scientific_name: '',
      description:''
    };
  }
}
