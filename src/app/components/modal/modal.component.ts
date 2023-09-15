import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwitchService } from 'src/app/services/switch/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  constructor (private modalSS: SwitchService) {}

  @Input() title?: string = 'Reporte';
  // @Output() close: EventEmitter<boolean> = new EventEmitter();
  ngOnInit(): void {
    
  }
  closeModal(){   
    this.modalSS.$modal.emit(false)
  }
}
