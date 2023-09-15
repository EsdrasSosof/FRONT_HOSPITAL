import { Component } from '@angular/core';
import { MedicinasService } from 'src/app/services/medicinas/medicinas.service';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.scss']
})
export class MedicinasComponent {
  medicinas: any[] = [];

  constructor(private medicinasService: MedicinasService) { }

  ngOnInit() {
    this.medicinasService.getMedicines().subscribe(data => {
      this.medicinas = data;
    });
  }
}
