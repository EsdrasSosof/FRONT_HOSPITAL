// import { Component } from '@angular/core';
// import { AuthService } from './services/auth/auth.service';
// import { EventService } from './services/event/event.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
// 	public session!: boolean;

// 	constructor(
// 		private auth: AuthService,
// 		private event: EventService
// 	) {
// 		this.event.subscribe('session:auth', (args) => {
// 			this.session = args.auth === 'logout' ? false : true;
// 		});
// 	}

// 	ngOnInit() {
// 		this.session = this.auth.isAuthenticated();
// 	}
// }

import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { EventService } from './services/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public session: boolean = false;
//   public session!: boolean;

  constructor(
    private auth: AuthService,
    private event: EventService
  ) {
	// this.event.subscribe('session:auth', (args) => {
	// 	this.session = args.auth === 'logout' ? false : true;
	// });	
    this.event.subscribe('session:auth', (args) => {
      if (args.auth === 'login') {
        this.session = true; // Establecer session como true al autenticarse
      } else if (args.auth === 'logout') {
        this.session = false; // Establecer session como false al cerrar sesión
      }
    });
  }

  ngOnInit() {
    // Verificar si ya hay una sesión al cargar la aplicación
    this.session = this.auth.isAuthenticated();
  }

  async login() {
    // Llamar al método de autenticación y establecer session como true si es exitoso
    const username = 'tu_usuario'; // Reemplaza con el nombre de usuario y contraseña adecuados
    const password = 'tu_contraseña';

    const success = await this.auth.getUserInfo(username, password);

    if (success) {
      this.session = true;
    }
  }

  logout() {
    // Llamar al método de cierre de sesión y establecer session como false
    this.auth.removeSession();
    this.session = false;
  }
}
