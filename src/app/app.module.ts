import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GamesComponent} from './components/games/games.component';
import {FormsModule} from "@angular/forms";
import {FormsComponent} from './components/forms/forms.component';

import {StorageService} from "./services/storage.service";
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    FormsComponent,
    HeroesComponent
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
