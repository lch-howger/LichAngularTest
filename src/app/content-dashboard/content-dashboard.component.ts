import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-content-dashboard',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.scss']
})
export class ContentDashboardComponent implements OnInit {

  @Input() count: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }
}
