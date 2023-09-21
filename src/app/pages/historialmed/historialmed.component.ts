import { Component } from '@angular/core';
import { HistorialmedService } from 'src/app/services/historial/historialmed.service';

@Component({
  selector: 'app-historialmed',
  templateUrl: './historialmed.component.html',
  styleUrls: ['./historialmed.component.scss']
})
export class HistorialmedComponent {
  history: any[] = [];

  constructor(private historialmedService: HistorialmedService) { }

  ngOnInit() {
    this.historialmedService.getHistory().subscribe(data => {
      this.history = data;
    });
  }
}
