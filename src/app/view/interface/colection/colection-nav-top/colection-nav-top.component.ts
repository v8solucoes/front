import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-colection-nav-top',
  templateUrl: './colection-nav-top.component.html',
  styleUrls: ['./colection-nav-top.component.scss']
})
export class ColectionNavTopComponent implements OnInit {

  constructor(public i: InterfaceService) { }

  ngOnInit(): void {
  }

}
