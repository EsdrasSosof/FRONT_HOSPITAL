import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-dit',
  templateUrl: './usuarios-dit.component.html',
  styleUrls: ['./usuarios-dit.component.scss']
})
export class UsuariosDitComponent {

  formData = {
    user_id: 0,
    username:'',
    password:'',
    role_id: '',
  }
  roles: any []=[];

  @Input() title?: string = 'ACTUALIZAR USUARIO';

  constructor(private usuariosService: UsuariosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Obtén el ID del médico de la ruta actual
    this.route.params.subscribe((params) => {
      const medicoId = params['id'];
      // Convierte el ID de cadena a número
      // const idNumerico = parseInt(medicoId, 10);
      const idNumerico = parseInt(medicoId, 10);
      // Asigna el ID numérico al formData
      this.formData.user_id = idNumerico;
      // se envía la información para usar en loadMedicoData
      this.loadEspecData(idNumerico);
    });
    // Obtiene la lista de roles cuando se carga el componente
    this.usuariosService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  loadEspecData(id: number): void {
    //se cargar la información del médico en el formulario
    this.usuariosService.getUserById(id).subscribe(
      (data) => {
        this.formData.username = data.username;
        this.formData.password = data.password;
      },
      (error) => {
        console.error('Error al cargar la información del médico', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Llama al servicio para actualizar la información del médico
    this.usuariosService.updateUser(this.formData.user_id, this.formData).subscribe(
      (response) => {
        console.log('Usuario actualizado exitosamente:', response);
        this.resetForm();
        alert('El usuario se actualizó exitosamente');
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        console.error('Error al actualizar el usuario:', error);
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
      user_id:0,
      username:'',
      password:'',
      role_id:'',
    };
  }
}
