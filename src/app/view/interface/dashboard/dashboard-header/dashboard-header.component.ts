import { InterfaceService } from '@view/interface/interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(
    public i: InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
