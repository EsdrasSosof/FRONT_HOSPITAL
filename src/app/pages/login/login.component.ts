import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(
    private readonly auth: AuthService,
    private readonly event: EventService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  public login(f: NgForm): void {
    if (f.valid) {
      const params = f.value;

      this.validate(params.username, params.password);
      
      return;
    } else {
      console.error('invalid');
    }
  }

// // funciona el logueo pero no hace redirección
//   private async validate(username: string, password: string): Promise<void> {
//     try {
//       await this.spinner.show()
//       const userExist = await this.auth.getUserInfo(username, password);

//       if (userExist) {
//         //-- sin eso se traba y no loguea
//         this.event.publish('session:auth', { auth: '/api/auth/login' });
//         this.router.navigate(['home']);
//       } else {
//         alert('Usuario no existe');
//       }
//       await this.spinner.hide()
//       return;
//     } catch (error) {
//       throw error;
//     }
//   }

private async validate(username: string, password: string): Promise<void> {
  try {
    await this.spinner.show();

    const userExist = await this.auth.getUserInfo(username, password);

    if (userExist) {
      this.event.publish('session:auth', { auth: '/api/auth/login' });
      this.router.navigate(['home']);
    } else {
      alert('Usuario no existe');
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);
  } finally {
    await this.spinner.hide();
  }
}

}
//--- prueba con token en response ---
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { HttpClient } from '@angular/common/http'; // Importa HttpClient
// import { AuthService } from 'src/app/services/auth/auth.service';
// import { EventService } from 'src/app/services/event/event.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   apiEndpoint = 'http://localhost:3000/api/auth/login';

//   constructor(
//     private readonly auth: AuthService,
//     private readonly event: EventService,
//     private router: Router,
//     private spinner: NgxSpinnerService,
//     private http: HttpClient // Agrega HttpClient aquí
//   ) { }

//   public login(f: NgForm): void {
//     if (f.valid) {
//       const params = f.value;

//       // Llama a la función para realizar la solicitud HTTP a la API
//       this.validate(params.username, params.password);
      
//       return;
//     } else {
//       console.error('invalid');
//     }
//   }

//   private validate(username: string, password: string): void {
//     this.spinner.show();

//     const formData = { username, password };

//     // Realiza la solicitud HTTP POST a la API
//     this.http.post(this.apiEndpoint, formData).subscribe(
//       (response: any) => {
//         // Maneja la respuesta de la API aquí
//         this.spinner.hide();

//         if (response && response.token) {
//           // Si hay un token en la respuesta, puedes redirigir al usuario a la página de inicio
//           // También puedes almacenar el token en localStorage o en una cookie para su posterior uso
//           // Ejemplo de almacenamiento en localStorage: localStorage.setItem('token', response.token);
//           this.router.navigate(['home']);
//         } else {
//           alert('Usuario no existe');
//         }
//       },
//       (error) => {
//         // Maneja errores de la solicitud aquí
//         this.spinner.hide();
//         console.error('Error al conectar con la API:', error);
//       }
//     );
//   }
// }
