import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { merge } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  public getListOfPlanets() {
    //console.log('getListOfPlanets()');
    let p1 = this.httpSvc.get('https://swapi.co/api/planets');
    let p2 = this.httpSvc.get('https://swapi.co/api/planets/?page=2');
    let p3 = this.httpSvc.get('https://swapi.co/api/planets/?page=3');

    return forkJoin(p1, p2, p3);

    //return p1.pipe(merge(p2));
    //return p1.combineLatest(p2);
  }
}
