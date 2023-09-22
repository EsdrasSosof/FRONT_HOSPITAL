import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicosService } from 'src/app/services/medicos/medicos.service';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.scss']
})
export class PersonalEditComponent {
  formData = {
    personal_id:0,
    member_number: '',
    identification: '',
    name: '',
    lastame:'',
    dof:'',
    address:'',
    phone:'',
    email:'',
    specialization_id:0
  }

  especs: any []=[];

  constructor(private medicosService: MedicosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicoId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicoId, 10);
      // Asigna el ID numérico al formData
      this.formData.personal_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadMedicoData(idNumerico);
    });
    // Obtiene la lista de especializaciones cuando se carga el componente
    // this.medicosService.getEspec().subscribe((espec) => {
    //   this.especs = espec;
    // });
    this.medicosService.getEspec().subscribe((espec) => {
      this.especs = espec;
      
      // Verifica si el ID de cada especialización es numérico y conviértelo si no lo es
      this.especs.forEach((especializacion) => {
        especializacion.id = isNaN(Number(especializacion.id)) ? 0 : Number(especializacion.id);
      });
    });
  }

  loadMedicoData(id: number): void {
    //se cargar la información del médico en el formulario
    this.medicosService.getMedicoById(id).subscribe(
      (data) => {
        this.formData.member_number = data.member_number;
        this.formData.identification = data.identification;
        this.formData.name = data.name;
        this.formData.lastame = data.lastame;
        // Formatea la fecha como "DD-MM-YYYY"
        // const fechaCompleta = new Date(data.dof);
        // const year = fechaCompleta.getFullYear();
        // const month = String(fechaCompleta.getMonth() + 1).padStart(2, '0');// +1 porque los meses en JavaScript van de 0 a 11
        // const day = String(fechaCompleta.getDate()).padStart(2, '0');
        // this.formData.dof = `${year}-${month}-${day}`;
        this.formData.dof = data.dof;

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
    this.medicosService.updateMedico(this.formData.personal_id, this.formData).subscribe(
      (response) => {
        console.log('Médico actualizado exitosamente:', response);
        this.resetForm();
        alert('El médico se actualizó exitosamente');
        this.router.navigate(['/medicos']);
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

  resetForm() {
    this.formData = {
      personal_id:0,
      member_number: '',
      identification: '',
      name: '',
      lastame:'',
      dof:'',
      address:'',
      phone:'',
      email:'',
      specialization_id:0
    };
  }
  
}
