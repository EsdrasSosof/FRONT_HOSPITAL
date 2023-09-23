import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent {

  formData = {
    role_id: 0,
    name:''
  }

  @Input() title?: string = 'ACTUALIZAR ROL';

  constructor(private rolesService: RolesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicoId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicoId, 10);
      // Asigna el ID numérico al formData
      this.formData.role_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadEspecData(idNumerico);
    });
  }

  loadEspecData(id: number): void {
    //se cargar la información del médico en el formulario
    this.rolesService.getRolById(id).subscribe(
      (data) => {
        this.formData.name = data.name;
      },
      (error) => {
        console.error('Error al cargar la información del rol', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.rolesService.updateRoles(this.formData.role_id, this.formData).subscribe(
      (response) => {
        console.log('Rol actualizado exitosamente:', response);
        this.resetForm();
        alert('El rol se actualizó exitosamente');
        this.router.navigate(['/roles']);
      },
      (error) => {
        console.error('Error al actualizar el rol:', error);
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
      role_id: 0,
      name:''
    };
  }
}
