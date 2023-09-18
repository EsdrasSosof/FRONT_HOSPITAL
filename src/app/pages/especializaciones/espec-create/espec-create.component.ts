import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-espec-create',
  templateUrl: './espec-create.component.html',
  styleUrls: ['./espec-create.component.scss']
})
export class EspecCreateComponent {
  
  @Input() title?: string = 'CREAR ESPECIALIZACIÓN';
}
