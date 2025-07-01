import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
 
  @Input() mensaje:string ='';

  @Output() mensajeHijo: EventEmitter<string> = new EventEmitter<string>();

  enviarMensajeHijo() {
    this.mensajeHijo.emit('Hola desde el hijo');
  }

}
