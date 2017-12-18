import { Component, OnInit, Input } from '@angular/core';
import { Races } from './races';
import { RacesService } from './races.service';


@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.sass']
})
export class RacesComponent implements OnInit {
  constructor(private racesService: RacesService) { }
  title = 'Racing Component';
  @Input() races: Races[];
  getRaces(): void {
    this.races = this.racesService.getRaces();
  }
  onUpQuantity(race: Races): void {
    if (race.quantity < race.inStock) {
      race.quantity++;
    }
  }
  onDownQuantity(race: Races): void {
    if (race.quantity !== 0) {
      race.quantity--;
    }
  }
  enterRace(e, race: Races): void {
    if ((e.code === 'Enter' || e.code === undefined) && (race.quantity <= race.inStock)) {
      race.inStock -= race.quantity;
      race.quantityBought += race.quantity;
      race.quantity = 0;
      this.totalCost();
    }
  }
  totalCost(): number {
    let sum = 0;
    if (Array.isArray(this.races)) {
      for (const race of this.races) {
        if (race.isRacing || race.quantityBought) {
          if (race.quantityBought) {
            sum += race.entryFee * race.quantityBought;
          } else {
            sum += race.entryFee * race.inStock;
          }
        }
      }
    }
    return sum;
  }
  ngOnInit(): void {
    this.getRaces();
  }
}
