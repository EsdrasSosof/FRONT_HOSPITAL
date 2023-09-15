import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../services/medicos/medicos.service';
import { SwitchService } from 'src/app/services/switch/switch.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  medicos: any[] = [];
  modalSwitch = false;

  constructor(private medicosService: MedicosService, private modalSS:SwitchService) { }

  ngOnInit() {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
    this.modalSS.$modal.subscribe((valor)=> {this.modalSwitch = valor});
  }
  openModal(){
    this.modalSwitch = true;
  }
}
