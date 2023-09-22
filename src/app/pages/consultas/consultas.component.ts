import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent {

  consultas: any[] = [];

  constructor(private consultasService: ConsultasService, private router: Router) { }

  ngOnInit() {
    this.consultasService.getConsultation().subscribe(data => {
      this.consultas = data;
    });
  }

  onEditConsultation(consultation_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/consultas/consultas-edit', consultation_id]);
  }
}
