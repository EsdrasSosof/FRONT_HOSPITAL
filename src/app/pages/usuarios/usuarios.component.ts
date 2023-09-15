import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getMedicines().subscribe(data => {
      this.usuarios = data;
    });
  }
}
