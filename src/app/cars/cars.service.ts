import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Cars } from './cars';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarsService {
  constructor( private http: HttpClient ) {}
  private carsUrl = './assets/cars.json';
  /**
   * Get Cars from the server
   */
  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.carsUrl)
      .pipe(
        tap(cars => this.log('fetched cars')),
        catchError(this.handleError('getCars', []))
      );
  }
  /**
   * GET Car by id. Will 404 if id not found
   */
  getCar(id: number): Observable<Cars> {
    //const url = `${this.carsUrl}/${id}`;
    id -= 1;
    return this.http.get<Cars>(this.carsUrl)
      .map(data => {
        return <Cars>data[id];
      })
      .pipe(
        tap(_ => this.log(`fetched car id=${id}`)),
        catchError(this.handleError<Cars>(`getCar id=${id}`))
      );
  }
  /**
   * @todo Additional method, do not used
   * PUT: update the Car on the server
   */
  updateCar(car: Cars): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions)
      .pipe(
        tap(_ => this.log(`updated car id=${car.id}`)),
        catchError(this.handleError<any>('updateCar'))
    );
  }
  /**
   * @todo Additional method, do not used
   * POST: add a new car to the server
   */
  addCar(car: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.carsUrl, car, httpOptions)
      .pipe(
        tap((cars: Cars) => this.log(`added car w/ id=${car.id}`)),
        catchError(this.handleError<Cars>('addCar'))
    );
  }
  /**
   * @todo Additional method, do not used
   * DELETE: delete the Car from the server
   */
  deleteCar (car: Cars | number): Observable<Cars> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;
    return this.http.delete<Cars>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted car id=${id}`)),
        catchError(this.handleError<Cars>('deleteCar'))
    );
  }
  /**
   * @todo Additional method, do not used
   * GET Cars whose name contains search term
   */
  searchCars(term: string): Observable<Cars[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Cars[]>(this.carsUrl)
      .map(data => {
        return <Cars[]>data[term];
      })
      .pipe(
        tap(_ => this.log(`found cars matching "${term}"`)),
        catchError(this.handleError<Cars[]>('searchCars', []))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /**
   * Log a HeroService message with the MessageService
   * @param message
   */
  public log(message: string) {
    console.log(`Cars: ${message}`);
  }
}
