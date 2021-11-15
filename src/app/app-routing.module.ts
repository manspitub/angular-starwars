import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './component/people-details/people-details.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PlanetListComponent } from './component/planet-list/planet-list.component';
import { PlanetService } from './service/planet.service';

const routes: Routes = [
  {path: 'planet-list', component: PlanetListComponent},
  {path: '', component: PlanetListComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'people/:idPeople', component: PeopleDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/planet-list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
