import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles-crear',
  templateUrl: './roles-crear.component.html',
  styleUrls: ['./roles-crear.component.scss']
})
export class RolesCrearComponent {

  formData = {
    name:''
  }
  constructor(private rolesService: RolesService,   private router: Router){}
  
  @Input() title?: string = 'CREAR ROL';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.name = this.formData.name.toString();

    // Llama al servicio para crear un nuevo médico
    this.rolesService.createRoles(this.formData).subscribe(
      (response) => {
        console.log('Rol creado exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('El rol se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/roles']);
      },
      (error) => {
        console.error('Error al crear el rol:', error);
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
