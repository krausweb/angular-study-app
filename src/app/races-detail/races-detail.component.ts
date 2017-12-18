import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Races } from '../races/races';
import { RacesService } from '../races/races.service';


@Component({
  selector: 'app-races-detail',
  templateUrl: './races-detail.component.html',
  styleUrls: ['./races-detail.component.sass']
})
export class RacesDetailComponent implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private racesService: RacesService
  ) { }
  title = 'Racing Detail Component';
  @Input() race: Races;
  goBack(): void {
    this.location.back();
  }
  getRace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.racesService.getRace(id)
        .subscribe(race => this.race = race);
  }
  ngOnInit(): void {
    this.getRace();
  }
}
