import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../heroes/student";

@Component({
  selector: 'app-content-heroes-list',
  templateUrl: './content-heroes-list.component.html',
  styleUrls: ['./content-heroes-list.component.scss']
})
export class ContentHeroesListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() stuList:Student[] = []
}
