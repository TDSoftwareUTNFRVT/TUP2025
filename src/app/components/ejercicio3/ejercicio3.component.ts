import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  tarea: string = '';
  tareas: string [] =[]
  
  agregarTarea(nuevaTarea:string):void{
    this.tarea = nuevaTarea;
    this.tareas.push(nuevaTarea);
    console.log(this.tareas);
  }

  
}
