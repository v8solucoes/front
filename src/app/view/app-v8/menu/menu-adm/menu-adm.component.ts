import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {

  constructor( public i: InterfaceService) { }

  ngOnInit(): void {
  }

}
