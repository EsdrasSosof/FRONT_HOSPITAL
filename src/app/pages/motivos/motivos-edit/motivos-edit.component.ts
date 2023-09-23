import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotivosService } from 'src/app/services/motivos/motivos.service';

@Component({
  selector: 'app-motivos-edit',
  templateUrl: './motivos-edit.component.html',
  styleUrls: ['./motivos-edit.component.scss']
})
export class MotivosEditComponent {

  formData = {
    motive_id:0,
    name:''
  }

  @Input() title?: string = 'ACTUALIZAR MOTIVO DE CONSULTA';

  constructor(private motivosService: MotivosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const motiveId = params['id'];
      // Convierte el ID de cadena a número
      const idNumerico = parseInt(motiveId, 10);
      // Asigna el ID numérico al formData
      this.formData.motive_id = idNumerico;
      // se envía la información para usar en loadMotiveData
      this.loadMotiveData(idNumerico);
    });
  }

  loadMotiveData(id: number): void {
    //se cargar la información del médico en el formulario
    this.motivosService.getMotiveById(id).subscribe(
      (data) => {
        this.formData.name = data.name;
      },
      (error) => {
        console.error('Error al cargar la información de motivo', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.motivosService.updateMotive(this.formData.motive_id, this.formData).subscribe(
      (response) => {
        console.log('Motivo actualizado exitosamente:', response);
        this.resetForm();
        alert('El Motivo de consulta se actualizó exitosamente');
        this.router.navigate(['/motivos']);
      },
      (error) => {
        console.error('Error al actualizar el motivo:', error);
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
      motive_id: 0,
      name:''
    };
  }
}
