import {Injectable} from '@angular/core';
import {Student} from "../heroes/student";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public value: string = ""

  get() {
    return this.value
  }

  set(v: string) {
    this.value = v
  }

  stuList: Student[] = [
    {name:"a",age:10}
  ]

  setStudent(stuList: Student[]) {
    this.stuList = stuList
  }

  getStudent() {
    return this.stuList
  }
}
