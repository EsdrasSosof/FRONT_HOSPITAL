import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-reportes-consultas',
  templateUrl: './reportes-consultas.component.html',
  styleUrls: ['./reportes-consultas.component.scss']
})
export class ReportesConsultasComponent {

  consultas: any[] = [];

  constructor(private reportesService: ReportesService, private router: Router) { }

  ngOnInit() {
    this.reportesService.getConsultation().subscribe(data => {
      this.consultas = data;
    });
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  
  goBack(): void {
    window.history.back();
  }
}
