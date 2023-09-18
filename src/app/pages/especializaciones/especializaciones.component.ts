import { Component } from '@angular/core';
import { EspecializacionesService } from 'src/app/services/specializaciones/especializaciones.service';

@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.scss']
})
export class EspecializacionesComponent {
  especializaciones: any[] = [];

  constructor(private especializacionesService: EspecializacionesService) { }

  ngOnInit() {
    this.especializacionesService.getEspec().subscribe(data => {
      this.especializaciones = data;
    });
  }

}
