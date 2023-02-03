import { Component, OnInit } from '@angular/core';
import { Animates } from '@shared-angular/animations';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-colection',
  templateUrl: './colection.component.html',
  styleUrls: ['./colection.component.scss'],
  animations:[Animates]
})
export class ColectionComponent implements OnInit {
load = true
  constructor(public i: InterfaceService) {
    i.dashboard = false
   }

  ngOnInit(): void {
  }

}
