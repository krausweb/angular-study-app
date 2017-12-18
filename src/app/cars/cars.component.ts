import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {
  constructor(private carsService: CarsService) { }
  title = 'Cars Component';
  cars: Cars[];
  getCars(): void {
    this.carsService.getCars()
        .subscribe(cars => this.cars = cars);
  }
  /**
   * @todo do not used
   * Add new Car
   * @param name
   * @param about
   */
  addCar(name: string, about: string): void {
    name = name.trim();
    about = about.trim();
    if (!name) { return; }
    this.carsService.addCar({ name, about } as Cars)
      .subscribe(car => {
        this.cars.push(car);
      });
  }
  /**
   * @todo do not used
   * Delete Car
   * @param car
   */
  deleteCar(car: Cars): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carsService.deleteCar(car).subscribe();
  }
  ngOnInit(): void {
    this.getCars();
  }
}
