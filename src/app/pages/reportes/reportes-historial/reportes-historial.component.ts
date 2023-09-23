import { Component } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-reportes-historial',
  templateUrl: './reportes-historial.component.html',
  styleUrls: ['./reportes-historial.component.scss']
})
export class ReportesHistorialComponent {

  history: any[] = [];

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.reportesService.getHistory().subscribe(data => {
      this.history = data;
    });
  }

  goBack(): void {
    window.history.back();
  }
}
