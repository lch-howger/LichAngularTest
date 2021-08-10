import {Component, ViewChild} from '@angular/core';
import {Student} from "./heroes/student";
import {StorageService} from "./services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stuList: Student[] = []

  constructor(public storageService: StorageService) {
  }

  ngOnInit() {
    this.stuList=this.storageService.getStudent()
  }

  title = 'LichAngularTest';

  count: number = 5

  changeCount($event: any) {
    this.count = $event.count
  }

  addStudent($event: Student) {
    this.stuList.push($event)
    this.storageService.setStudent(this.stuList)
  }
}
