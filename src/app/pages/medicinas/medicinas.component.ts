import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinasService } from 'src/app/services/medicinas/medicinas.service';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.scss']
})
export class MedicinasComponent {
  medicinas: any[] = [];

  constructor(private medicinasService: MedicinasService, private router: Router) { }

  ngOnInit() {
    this.medicinasService.getMedicines().subscribe(data => {
      this.medicinas = data;
    });
  }

  onEditEspec(medicine_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de personal_id
    this.router.navigate(['/medicinas/medicinas-edit', medicine_id]);
  }
}
