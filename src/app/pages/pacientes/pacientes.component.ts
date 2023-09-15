import { Component } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  pacientes: any[] = [];
  correlativo: number = 0;

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }
  getCorrelativo(): number {
    return this.correlativo++;
  }
}
