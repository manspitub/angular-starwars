import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  id!: string
  person!: People


  constructor(private activateRoute: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametros => {
      this.id = parametros['idPeople'];
      this.peopleService.getPeopleByid(this.id).subscribe(personas => {
        this.person = personas;
      })
    })
  }

}
