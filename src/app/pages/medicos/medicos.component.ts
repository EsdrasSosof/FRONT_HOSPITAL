import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos/medicos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  medicos: any[] = [];

  constructor(private medicosService: MedicosService, private router: Router) { }

  ngOnInit(): void {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  onEditMedico(personal_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/medicos/personal-edit', personal_id]);
  }

}
