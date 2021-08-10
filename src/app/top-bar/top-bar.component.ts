import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  title: string = "Tour of Heroes"
  tabArr: string[] = ["Dashboard", "Heroes"]
  page: string = ""

  selectTab(i: number) {
    let tab = this.tabArr[i]
    this.page = tab
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() count: number = 0

  @Output()
  public addCountEmitter: EventEmitter<any> = new EventEmitter();

  addCount() {
    this.addCountEmitter.emit({count: this.count + 1})
  }
}
