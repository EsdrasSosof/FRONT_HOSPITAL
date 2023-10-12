import { Component, Input } from '@angular/core';
import { ModalgenService } from '../../../app/services/modal/modalgen.service';


@Component({
  selector: 'app-modalgen',
  templateUrl: './modalgen.component.html',
  styleUrls: ['./modalgen.component.scss']
})
export class ModalgenComponent {

  @Input() title?: string = 'FECHAS';

  constructor(private modalService: ModalgenService) {}

  closeX() {
    this.modalService.hideModal();
  }

}
