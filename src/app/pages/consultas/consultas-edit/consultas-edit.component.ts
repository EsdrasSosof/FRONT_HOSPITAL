import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas/consultas.service';

@Component({
  selector: 'app-consultas-edit',
  templateUrl: './consultas-edit.component.html',
  styleUrls: ['./consultas-edit.component.scss']
})
export class ConsultasEditComponent {

  formData = {
    consultation_id:0,
    date_consultation: '',
    motive_id: 0,
    patient_id: 0
  }
  motives: any []=[];
  patients: any []=[];

  constructor(private consultasService: ConsultasService, private router: Router, private route: ActivatedRoute){}

  @Input() title?: string = 'ACTUALIZAR UNA CONSULTA';

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicoId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicoId, 10);
      // Asigna el ID numérico al formData
      this.formData.consultation_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadConsultationData(idNumerico);
    });
    // Obtiene la lista de motivos cuando se carga el componente
    this.consultasService.getMotive().subscribe((motive) => {
      this.motives = motive;
      
      // Verifica si el ID de cada motivo es numérico y conviértelo si no lo es
      this.motives.forEach((motivo) => {
        motivo.id = isNaN(Number(motivo.id)) ? 0 : Number(motivo.id);
      });
    });
    // Obtiene la lista de pacientes cuando se carga el componente
    this.consultasService.getPatients().subscribe((patient) => {
      this.patients = patient;
      
      // Verifica si el ID de cada paciente es numérico y conviértelo si no lo es
      this.patients.forEach((paciente) => {
        paciente.id = isNaN(Number(paciente.id)) ? 0 : Number(paciente.id);
      });
    });
  }

  loadConsultationData(id: number): void {
    //se cargar la información de la consulta en el formulario
    this.consultasService.getConsultationById(id).subscribe(
      (data) => {
        // Formatea la fecha como "DD-MM-YYYY"
        const fechaCompleta = new Date(data.date_consultation);
        const year = fechaCompleta.getFullYear();
        const month = String(fechaCompleta.getMonth() + 1).padStart(2, '0');// +1 porque los meses en JavaScript van de 0 a 11
        const day = String(fechaCompleta.getDate()).padStart(2, '0');
        this.formData.date_consultation = `${year}-${month}-${day}`;
      },
      (error) => {
        console.error('Error al cargar la información de la consulta', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.consultasService.updateConsultation(this.formData.consultation_id, this.formData).subscribe(
      (response) => {
        console.log('Consulta actualizada exitosamente:', response);
        this.resetForm();
        alert('La consulta se actualizó exitosamente');
        this.router.navigate(['/consultas']);
      },
      (error) => {
        console.error('Error al actualizar la consulta:', error);
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
    this.  formData = {
      consultation_id:0,
      date_consultation: '',
      motive_id: 0,
      patient_id: 0
    };
  }
}
