import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.usuariosService.getMedicines().subscribe(data => {
      this.usuarios = data;
      console.log(data);
    });
  }

  onEditUser(user_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/usuarios/usuarios-edit', user_id]);
  }
}
