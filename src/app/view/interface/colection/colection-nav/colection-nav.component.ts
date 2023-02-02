import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-colection-nav',
  templateUrl: './colection-nav.component.html',
  styleUrls: ['./colection-nav.component.scss']
})
export class ColectionNavComponent implements OnInit {

  constructor(public i: InterfaceService) { }

  ngOnInit(): void {
  }

}
