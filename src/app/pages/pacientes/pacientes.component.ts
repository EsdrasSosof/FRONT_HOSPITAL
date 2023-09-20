import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  pacientes: any[] = [];

  constructor(private pacientesService: PacientesService, private router: Router) { }

  ngOnInit() {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }
  onEditMedico(patient_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/pacientes/pacientes-edit/', patient_id]);
  }
}
