import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from 'src/app/interfaces/people.interface';
import { Planeta } from 'src/app/interfaces/planets.interface';
import { PlanetService } from 'src/app/service/planet.service';

export interface PlanetaDetailData {
  planetaUrl: string
  personUrl: string
}

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planeta!: Planeta;
  person!: People;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: PlanetaDetailData,
    private planetaService: PlanetService
  ) { }

  ngOnInit(): void {
    console.log(this.data.planetaUrl);
    this.planetaService.getPlanetUrl(this.data.planetaUrl).subscribe(resultado => {
      this.planeta = resultado;

    })
  }

}
