import {Component, OnInit} from '@angular/core';
import {Hero, HEROES} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES

  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
