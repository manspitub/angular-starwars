import { Component, Inject, Input, OnInit } from '@angular/core';
import { Planeta, PlanetaResponse } from 'src/app/interfaces/planets.interface';
import { PlanetService } from 'src/app/service/planet.service';



@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planetList : Planeta[] = []
  @Input() planet!: PlanetaResponse;
  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.getPlanetList();
  }

  getPlanetList(){
    this.planetService.getPlanetList().subscribe(resultado => {
      this.planetList = resultado.results;
      console.log(resultado)
    })
  }


  }


