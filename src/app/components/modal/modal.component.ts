import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent{
  constructor(public activeModal: NgbModal, config: NgbModalConfig){
    config.backdrop = 'static';
		config.keyboard = false;

  }

  @Input() title?: string = 'CREAR ESPECIALIZACIÓN';
  @Output() close: EventEmitter<boolean> = new EventEmitter();
}
