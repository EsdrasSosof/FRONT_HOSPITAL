import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/specializaciones/especializaciones.service';

@Component({
  selector: 'app-espec-create',
  templateUrl: './espec-create.component.html',
  styleUrls: ['./espec-create.component.scss']
})
export class EspecCreateComponent {
  formData = {
    name:'',
    description: ''
  }
  constructor(private especializacionesService: EspecializacionesService,   private router: Router){}
  
  @Input() title?: string = 'CREAR ESPECIALIZACIÓN';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.name = this.formData.name.toString();
    this.formData.description = this.formData.description.toString();

    // Llama al servicio para crear un nuevo médico
    this.especializacionesService.createEspec(this.formData).subscribe(
      (response) => {
        console.log('Especialización creada exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('La especialización se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/especializaciones']);
      },
      (error) => {
        console.error('Error al crear la especialización:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear la especialización. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      name:'',
      description: ''
    };
  }
}
