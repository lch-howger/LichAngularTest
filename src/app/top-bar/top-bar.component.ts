import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Student} from "../heroes/student";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  title: string = "Tour of Heroes"
  tabArr: string[] = ["Dashboard", "Heroes", "Hero-Detail"]
  nowPage: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() count: number = 0

  @Output()
  public addCountEmitter: EventEmitter<any> = new EventEmitter();
  @Output()
  public stuEmitter: EventEmitter<Student> = new EventEmitter();
  @Output()
  public topBarEmitter: EventEmitter<any> = new EventEmitter();

  addCount() {
    this.addCountEmitter.emit({count: this.count + 1})
  }

  stuName: string = '';
  stuAge: number = 0;

  addStudent() {
    let stu: Student = {
      name: this.stuName,
      age: this.stuAge
    }
    this.stuEmitter.emit(stu)
  }

  selectTab(i: number) {
    this.nowPage = this.tabArr[i]
    this.topBarEmitter.emit({
      index: i,
      nowPage: this.nowPage
    })
  }

}
