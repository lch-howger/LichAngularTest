import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GamesComponent} from './components/games/games.component';
import {FormsModule} from "@angular/forms";
import {FormsComponent} from './components/forms/forms.component';

import {StorageService} from "./services/storage.service";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { ContentHeroesListComponent } from './content-heroes-list/content-heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    FormsComponent,
    HeroesComponent,
    HeroDetailComponent,
    TopBarComponent,
    ContentDashboardComponent,
    ContentHeroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
