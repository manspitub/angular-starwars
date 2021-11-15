import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../interfaces/people.interface';
import { Planeta, PlanetaResponse } from '../interfaces/planets.interface';

const API_BASE_URL = "https://swapi.dev/api/planets"

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }


getPlanetList(): Observable<PlanetaResponse> {
  return this.http.get<PlanetaResponse>(`${API_BASE_URL}`)
}

getPlanetUrl(url:string): Observable<Planeta>{
  return this.http.get<Planeta>(`${url}`)
}

getPeople(url:string): Observable<People>{
  return this.http.get<People>(`${url}`)
}

getPlanetPage(page:string): Observable<PlanetaResponse>{
  return this.http.get<PlanetaResponse>(`${API_BASE_URL}/page=${page}`)
}

  /*getPlanet(): Planeta{

    let planeta = this.http.get<Planeta>

    return this.http.get<Planeta>(`${API_BASE_URL}/planeta.url`)
  }*/


}
