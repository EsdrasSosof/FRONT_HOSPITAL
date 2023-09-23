import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicinasService } from 'src/app/services/medicinas/medicinas.service';

@Component({
  selector: 'app-medicinas-edit',
  templateUrl: './medicinas-edit.component.html',
  styleUrls: ['./medicinas-edit.component.scss']
})
export class MedicinasEditComponent {
  formData = {
    medicine_id:0,
    commercial_name: '',
    scientific_name: '',
    description:''
  }

  @Input() title?: string = 'ACTUALIZAR MEDICINA';

  constructor(private medicinasService: MedicinasService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicinaId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicinaId, 10);
      // Asigna el ID numérico al formData
      this.formData.medicine_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadEspecData(idNumerico);
    });
  }

  loadEspecData(id: number): void {
    //se cargar la información del médico en el formulario
    this.medicinasService.getMedicinaById(id).subscribe(
      (data) => {
        this.formData.commercial_name = data.commercial_name;
        this.formData.scientific_name = data.scientific_name;
        this.formData.description = data.description;
      },
      (error) => {
        console.error('Error al cargar la información de la medicina', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.medicinasService.updateMedicna(this.formData.medicine_id, this.formData).subscribe(
      (response) => {
        console.log('Medicina actualizado exitosamente:', response);
        this.resetForm();
        alert('La medicina se actualizó exitosamente');
        this.router.navigate(['/medicinas']);
      },
      (error) => {
        console.error('Error al actualizar la medicina:', error);
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
      medicine_id:0,
      commercial_name: '',
      scientific_name: '',
      description:''
    };
  }
}
