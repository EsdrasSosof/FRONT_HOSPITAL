import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos/medicos.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  medicos: any[] = [];

  constructor(private medicosService: MedicosService) { }

  ngOnInit() {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }
}
