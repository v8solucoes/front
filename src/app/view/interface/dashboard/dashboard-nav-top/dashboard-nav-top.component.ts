
import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-dashboard-nav-top',
  templateUrl: './dashboard-nav-top.component.html',
  styleUrls: ['./dashboard-nav-top.component.scss']
})
export class DashboardNavTopComponent implements OnInit {

  constructor(
    public i: InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
