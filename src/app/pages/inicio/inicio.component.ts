import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mensaje :string = 'Mensaje Inicio';

  constructor(
    private dataService: DataServiceService,
  ){}

  ngOnInit(): void {
    console.log('Hola desde el inicio!!');
    this.loadNombre();
  }
  
  loadNombre(){
    this.dataService.nombre$.subscribe( texto => {
      this.mensaje = texto;
    });
  }

}
