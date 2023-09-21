import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  roles: any[] = [];

  constructor(private rolesService: RolesService, private router: Router) { }

  ngOnInit() {
    this.rolesService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  onEditRol(role_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/roles/roles-edit', role_id]);
  }
}
