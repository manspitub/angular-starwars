import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './component/planet-list/planet-list.component';
import { PlanetItemComponent } from './component/planet-item/planet-item.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDetailsComponent } from './component/planet-details/planet-details.component';
import { PlanetSelectedComponent } from './components/planet-selected/planet-selected.component';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PeopleItemComponent } from './component/people-item/people-item.component';
import { PeopleDetailsComponent } from './component/people-details/people-details.component';
import { MatCard } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetItemComponent,
    PlanetDetailsComponent,
    PeopleListComponent,
    PeopleItemComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
