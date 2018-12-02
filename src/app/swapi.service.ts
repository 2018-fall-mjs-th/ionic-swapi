import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  public getListOfPlanets() {
    console.log('getListOfPlanets()');
  }
}
