import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {
  mensaje: string = '';
  ocultar: boolean = false;
  txtBtnOcultar: string = 'Ocultar Mensaje..';
  
  mostrarMensaje():void{
    this.mensaje = '¡Hola!!!';
  }
  
  resetMensaje():void{
    this.mensaje='';
  }
  
  ocultarMensaje():void{
    if(this.ocultar == false){
      this.ocultar = true;
      this.txtBtnOcultar = "Ver Mensaje.."
    }else{
      this.ocultar = false;
      this.txtBtnOcultar = 'Ocultar Mensaje..'
    }
  }
  
}
