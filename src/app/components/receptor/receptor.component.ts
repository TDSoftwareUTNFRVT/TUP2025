import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit, OnDestroy{

  nombre: string = "";
  suscripcionNombre!: Subscription;

  constructor(
    private dataService: DataServiceService
  ){}

  ngOnInit(){
    this.recibirNombre();
  }

  recibirNombre(){
    this.suscripcionNombre = this.dataService.nombre$.subscribe( nombre => {
      this.nombre = nombre;
    });
  }

  ngOnDestroy(){
    this.suscripcionNombre.unsubscribe();
  }
}
