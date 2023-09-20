import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-pacientes-crear',
  templateUrl: './pacientes-crear.component.html',
  styleUrls: ['./pacientes-crear.component.scss']
})
export class PacientesCrearComponent {
  formData = {
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

  constructor(private pacientesService: PacientesService,   private router: Router){}

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.identification = this.formData.identification.toString();
    this.formData.first_name = this.formData.first_name.toString();
    this.formData.second_name = this.formData.second_name.toString();
    this.formData.lastame = this.formData.lastame.toString();
    this.formData.second_lastame = this.formData.second_lastame.toString();
    this.formData.dof = this.formData.dof.toString();
    this.formData.address = this.formData.address.toString();
    this.formData.phone = this.formData.phone.toString();
    this.formData.email = this.formData.email.toString();

    // Llama al servicio para crear un nuevo médico
    this.pacientesService.createPacientes(this.formData).subscribe(
      (response) => {
        console.log('Paciente creado exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('El paciente se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/pacientes']);
      },
      (error) => {
        console.error('Error al crear al paciente:', error);
        // Maneja el error de creación aquí
        if (error && error.error && error.error.message && Array.isArray(error.error.message)) {
          const errorMessages = error.error.message;
          errorMessages.forEach((errorMessage: any) => {
            alert(`Error: ${errorMessage}`);
          });
        } else {
          // Si no se pueden manejar errores específicos, muestra un mensaje de error genérico
          alert('Ha ocurrido un error al crear al paciente. Por favor, inténtelo de nuevo.');
        }
      }
    );
  }

  resetForm() {
    this.formData = {
      identification: '',
      first_name: '',
      second_name:'',
      lastame:'',
      second_lastame:'',
      dof:'',
      address:'',
      phone:'',
      email:''
    };
  }
}
