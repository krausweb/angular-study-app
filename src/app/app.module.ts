import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { CarsComponent } from './cars/cars.component';
import { RacesService } from './races/races.service';
import { CarsService } from './cars/cars.service';
import { AppRoutingModule } from './/app-routing.module';
import { RacesDetailComponent } from './races-detail/races-detail.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';

@NgModule({
  declarations: [ AppComponent, RacesComponent, CarsComponent, RacesDetailComponent, CarsDetailComponent ],
  imports: [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  providers: [ RacesService, CarsService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
