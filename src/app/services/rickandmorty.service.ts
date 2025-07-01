import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRickAndMorty } from '../interfaces/rickandmorty';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<IRickAndMorty> {
    return this.http.get<IRickAndMorty>('https://rickandmortyapi.com/api/');
  }

}
