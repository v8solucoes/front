import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  constructor(
   public i: InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
