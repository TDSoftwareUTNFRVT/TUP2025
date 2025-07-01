import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeParaHijo: string = '';
  msn:string='';

  enviarMensaje() {
    this.mensajeParaHijo = this.msn;
    this.msn = '';
  }

  reciboMensajeHijo(mensaje: string) {
    alert(`Mensaje recibido del hijo: ${mensaje}`);
  }
}
