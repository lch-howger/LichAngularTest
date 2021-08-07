import {Component, OnInit} from '@angular/core';
import {User} from '../../models/models'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public arr: string[] = ["aaa", "bbb", "ccc", "ddd"]

  public title = "abc"

  constructor() {

  }

  ngOnInit(): void {

  }


}
