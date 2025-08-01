import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  nombre: string = '';

  constructor(
    private dataService: DataServiceService
  ){}

  cambioNombre(){
    console.log(this.nombre);
    this.dataService.nombre$.emit(this.nombre);
  }
}
