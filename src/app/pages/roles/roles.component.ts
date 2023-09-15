import { Component } from '@angular/core';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  roles: any[] = [];

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.rolesService.getMedicines().subscribe(data => {
      this.roles = data;
    });
  }
}
