import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  constructor(public storage:StorageService) {
  }

  ngOnInit(): void {
  }

  public content: string = ""
  public arr: string[] = ["aaa", "bbb"]

  submit() {
    let number = this.arr.indexOf(this.content);
    if (number == -1) {
      this.arr.push(this.content);
      this.content = ""
    }
  }

  delete(key: number) {
    this.arr.splice(key, 1)
  }
}
