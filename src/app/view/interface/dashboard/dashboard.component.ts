import { InterfaceService } from '@view/interface/interface.service';
import { Component, OnInit } from '@angular/core';
import { Animates } from '@shared-angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations:[Animates]
})
export class DashboardComponent implements OnInit {

  constructor(public i: InterfaceService) { 
    i.load.colection = true;
  }

  ngOnInit(): void {
  }

}
