import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MotivosService } from 'src/app/services/motivos/motivos.service';

@Component({
  selector: 'app-motivos-crear',
  templateUrl: './motivos-crear.component.html',
  styleUrls: ['./motivos-crear.component.scss']
})
export class MotivosCrearComponent {

  formData = {
    name:''
  }
  constructor(private motivosService: MotivosService,   private router: Router){}
  
  @Input() title?: string = 'CREAR MOTIVO DE CONSULTA';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.name = this.formData.name.toString();

    // Llama al servicio para crear un nuevo médico
    this.motivosService.createMotive(this.formData).subscribe(
      (response) => {
        console.log('Motivo de consulta creado exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('El motivo de consulta se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/motivos']);
      },
      (error) => {
        console.error('Error al crear el motivo de consulta:', error);
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
      name:''
    };
  }
}
