import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/specializaciones/especializaciones.service';

@Component({
  selector: 'app-espec-edit',
  templateUrl: './espec-edit.component.html',
  styleUrls: ['./espec-edit.component.scss']
})
export class EspecEditComponent {
  formData = {
    specialization_id:0,
    name:'',
    description: ''
  }

  @Input() title?: string = 'ACTUALIZAR ESPECIALIZACIÓN';

  constructor(private especializacionesService: EspecializacionesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const especiaId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(especiaId, 10);
      // Asigna el ID numérico al formData
      this.formData.specialization_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadEspecData(idNumerico);
    });
  }

  loadEspecData(id: number): void {
    //se cargar la información del médico en el formulario
    this.especializacionesService.getSpecById(id).subscribe(
      (data) => {
        this.formData.name = data.name;
        this.formData.description = data.description;
      },
      (error) => {
        console.error('Error al cargar la información de la especialización', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.especializacionesService.updateEspec(this.formData.specialization_id, this.formData).subscribe(
      (response) => {
        console.log('Especialización actualizado exitosamente:', response);
        this.resetForm();
        alert('la especialización se actualizó exitosamente');
        this.router.navigate(['/especializaciones']);
      },
      (error) => {
        console.error('Error al actualizar la especialización:', error);
        // Maneja el error de actualización aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al actualizar el médico. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      specialization_id: 0,
      name:'',
      description: ''
    };
  }
}
