import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EspecializacionesService } from 'src/app/services/specializaciones/especializaciones.service';

@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.scss']
})
export class EspecializacionesComponent {
  especializaciones: any[] = [];

  constructor(private especializacionesService: EspecializacionesService, private router: Router) { }

  ngOnInit() {
    this.especializacionesService.getEspec().subscribe(data => {
      this.especializaciones = data;
    });
  }

  onEditEspec(specialization_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/especializaciones/espec-edit', specialization_id]);
  }
}
