import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Races } from './races';
import { RACES } from './races.mocks';


@Injectable()
export class RacesService {
  constructor() { }
  getRaces(): Races[] {
    return RACES;
  }
  getRace(id: number): Observable<Races> {
    return of(RACES.find(races => races.id === id));
  }
}
