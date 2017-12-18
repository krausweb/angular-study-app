import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacesComponent } from './races/races.component';
import { RacesDetailComponent } from './races-detail/races-detail.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'races',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RacesComponent
  },
  {
    path: 'races',
    component: RacesComponent
  },
  {
    path: 'races-detail/:id',
    component: RacesDetailComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'cars-detail/:id',
    component: CarsDetailComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
