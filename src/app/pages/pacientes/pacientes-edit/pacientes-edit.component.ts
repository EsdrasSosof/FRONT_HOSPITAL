import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-pacientes-edit',
  templateUrl: './pacientes-edit.component.html',
  styleUrls: ['./pacientes-edit.component.scss']
})
export class PacientesEditComponent {
  formData = {
    patient_id: 0,
    identification: '',
    first_name: '',
    second_name:'',
    lastame:'',
    second_lastame:'',
    dof:'',
    address:'',
    phone:'',
    email:''
  }

  constructor(private pacientesService: PacientesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicoId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicoId, 10);
      // Asigna el ID numérico al formData
      this.formData.patient_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadPacienteData(idNumerico);
    });
  }

  loadPacienteData(id: number): void {
    //se cargar la información del médico en el formulario
    this.pacientesService.getPacienteById(id).subscribe(
      (data) => {
        this.formData.identification = data.identification;
        this.formData.first_name = data.first_name;
        this.formData.second_name = data.second_name;
        this.formData.lastame = data.lastame;
        this.formData.second_lastame = data.second_lastame;
        // Formatea la fecha como "DD-MM-YYYY"
        const fechaCompleta = new Date(data.dof);
        const year = fechaCompleta.getFullYear();
        const month = String(fechaCompleta.getMonth() + 1).padStart(2, '0');// +1 porque los meses en JavaScript van de 0 a 11
        const day = String(fechaCompleta.getDate()).padStart(2, '0');
        this.formData.dof = `${year}-${month}-${day}`;

        this.formData.address = data.address;
        this.formData.phone = data.phone;
        this.formData.email = data.email;
      },
      (error) => {
        console.error('Error al cargar la información del médico', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.pacientesService.updatePaciente(this.formData.patient_id, this.formData).subscribe(
      (response) => {
        console.log('Médico actualizado exitosamente:', response);
        this.resetForm();
        alert('El médico se actualizó exitosamente');
        this.router.navigate(['/pacientes']);
      },
      (error) => {
        console.error('Error al actualizar el médico:', error);
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

  resetForm(){
    this.formData = {
      patient_id: 0,
      identification: '',
      first_name: '',
      second_name:'',
      lastame:'',
      second_lastame:'',
      dof:'',
      address:'',
      phone:'',
      email:''
    }
  }
}
