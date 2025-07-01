import { Component } from '@angular/core';

@Component({
  selector: 'app-ejem2',
  templateUrl: './ejem2.component.html',
  styleUrls: ['./ejem2.component.css']
})
export class Ejem2Component {
  texto:string = '';

  actualizarTexto(event: Event):void{
    const elementoInput = event.target as HTMLInputElement;
    this.texto = elementoInput.value;
  }
}
