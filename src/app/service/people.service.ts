import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';

const API_BASE_URL = 'https://swapi.dev/api/people/';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  getPeopleList(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${API_BASE_URL}`)
  }
}
