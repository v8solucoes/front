import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-menu-nav-top',
  templateUrl: './menu-nav-top.component.html',
  styleUrls: ['./menu-nav-top.component.scss']
})
export class MenuNavTopComponent implements OnInit {

  constructor(
    public i: InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
