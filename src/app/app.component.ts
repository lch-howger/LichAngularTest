import {Component, ViewChild} from '@angular/core';

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
}
