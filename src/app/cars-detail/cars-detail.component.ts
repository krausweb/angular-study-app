import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cars } from '../cars/cars';
import { CarsService } from '../cars/cars.service';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.sass']
})
export class CarsDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carsService: CarsService
  ) { }
  title = 'Racing Detail Component';
  @Input() car: Cars;
  goBack(): void {
    this.location.back();
  }
  /**
   * @todo do not used
   * Save Car
   */
  saveCar(): void {
    this.carsService.updateCar(this.car)
      .subscribe(() => this.goBack());
  }
  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carsService.getCar(id)
      .subscribe(car => this.car = car);
  }
  ngOnInit(): void {
    this.getCar();
  }
}
