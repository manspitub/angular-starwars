import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {

@Input() people!: People;

i:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

}
