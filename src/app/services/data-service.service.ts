import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  nombre$ = new EventEmitter<string>();

  constructor() { }
}
