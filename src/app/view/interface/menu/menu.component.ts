import { Component, OnInit } from '@angular/core';
import { Animates } from '@shared-angular/animations';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[Animates]
})
export class MenuComponent implements OnInit {

  constructor(public i:InterfaceService) { }

  ngOnInit(): void {
  }

}
