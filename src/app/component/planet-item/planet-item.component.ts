import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Planeta } from 'src/app/interfaces/planets.interface';
import { PlanetDetailsComponent } from '../planet-details/planet-details.component';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {

  @Input() planet!: Planeta;
  i:number = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPlanetDetails(){
    this.dialog.open(PlanetDetailsComponent, {
      height: '800px',
      width: '300px',
      data: {planetaUrl: this.planet.url}

    })
  }

}
