import {Component, ViewChild} from '@angular/core';
import {Student} from "./heroes/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LichAngularTest';

  count: number = 5

  changeCount($event: any) {
    this.count = $event.count
  }

  stuList:Student[]=[]

  addStudent($event: Student) {
    this.stuList.push($event)
  }
}
