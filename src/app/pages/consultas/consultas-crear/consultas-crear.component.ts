import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas/consultas.service';

@Component({
  selector: 'app-consultas-crear',
  templateUrl: './consultas-crear.component.html',
  styleUrls: ['./consultas-crear.component.scss']
})
export class ConsultasCrearComponent {

  formData = {
    date_consultation: '',
    motive_id: 0,
    patient_id: 0
  }
  motives: any []=[];
  patients: any []=[];

  constructor(private consultasService: ConsultasService,   private router: Router){}

  @Input() title?: string = 'CREAR UNA CONSULTA';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.date_consultation = this.formData.date_consultation.toString();
    // this.formData.motive_id = this.formData.motive_id.toString();
    // this.formData.patient_id = this.formData.patient_id.toString();

    // Llama al servicio para crear un nuevo médico
    this.consultasService.createConsultation(this.formData).subscribe(
      (response) => {
        console.log('Consulta creada exitosamente:', response);
        this.resetForm();
        alert('La consulta se creó exitosamente');
        this.router.navigate(['/diagnostico']);
      },
      (error) => {
        console.error('Error al crear la consulta:', error);
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
      date_consultation: '',
      motive_id: 0,
      patient_id: 0
    };
  }

  ngOnInit(): void {
    // Obtiene la lista de motivos cuando se carga el componente
    this.consultasService.getMotive().subscribe((motive) => {
      this.motives = motive;
    });
    // Obtiene la lista de pacientes cuando se carga el componente
    this.consultasService.getPatients().subscribe((patient) => {
      this.patients = patient;
    });
  }
}
