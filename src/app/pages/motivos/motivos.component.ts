import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MotivosService } from 'src/app/services/motivos/motivos.service';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrls: ['./motivos.component.scss']
})
export class MotivosComponent {

  motivos: any[] = [];

  constructor(private motivosService: MotivosService, private router: Router) { }

  ngOnInit() {
    this.motivosService.getMotives().subscribe(data => {
      this.motivos = data;
    });
  }

  onEditEspec(motive_id: string): void {
    // Redirige al usuario a la página de edición junto con el valor de id
    this.router.navigate(['/motivos/motivos-edit', motive_id]);
  }
}
