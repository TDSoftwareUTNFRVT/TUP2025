import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { IRickAndMorty } from '../../interfaces/rickandmorty';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent {
  
  datos: IRickAndMorty | undefined;

  constructor(
    private rickandmortyService: RickandmortyService
  ) {
    this.loadData();
  }
  
  
  loadData(){
    this.rickandmortyService.getData().subscribe({
      next: (data: IRickAndMorty) => {
        this.datos = data;
        console.log('Data fetched successfully:', this.datos);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
  
}


