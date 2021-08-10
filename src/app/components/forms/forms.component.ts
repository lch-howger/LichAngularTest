import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public store: string = ""

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    this.store = this.storage.get()
  }

  public content: string = ""

  public arr: string[] = ["aaa", "bbb"]

  submit() {
    let number = this.arr.indexOf(this.content);
    if (number == -1) {
      this.arr.push(this.content);
      this.content = ""
    }

    this.storage.set(this.content)
  }

  delete(key: number) {
    this.arr.splice(key, 1)
  }
}
