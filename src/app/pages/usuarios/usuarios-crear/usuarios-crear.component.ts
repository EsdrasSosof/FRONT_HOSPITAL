import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios-crear',
  templateUrl: './usuarios-crear.component.html',
  styleUrls: ['./usuarios-crear.component.scss']
})
export class UsuariosCrearComponent implements OnInit {

  formData = {
    username:'',
    password:'',
    role_id: '',
  }
  roles: any []=[];

  constructor(private usuariosService: UsuariosService,   private router: Router){}
  
  @Input() title?: string = 'CREAR USUARIO';

  onSubmit(event: Event) {
    event.preventDefault();

    // Convierte los valores del formulario a cadenas (strings)
    this.formData.username = this.formData.username.toString();
    this.formData.password = this.formData.password.toString();

    // Llama al servicio para crear un nuevo médico
    this.usuariosService.createUser(this.formData).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.resetForm();
      // Muestra un mensaje de éxito
        alert('El usuario se creó exitosamente');
      // Redirige a otra página
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
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
      username:'',
      password:'',
      role_id:'',
    };
  }

  ngOnInit(): void {
    // Obtiene la lista de roles cuando se carga el componente
    this.usuariosService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }
}
