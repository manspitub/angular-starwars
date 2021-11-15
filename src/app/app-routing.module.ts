import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './component/planet-list/planet-list.component';
import { PlanetService } from './service/planet.service';

const routes: Routes = [
  {path: 'planet-list', component: PlanetListComponent},
  {path: '', component: PlanetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
