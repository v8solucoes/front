import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-colection-nav-footer',
  templateUrl: './colection-nav-footer.component.html',
  styleUrls: ['./colection-nav-footer.component.scss']
})
export class ColectionNavFooterComponent implements OnInit {

  constructor(
    public i:InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
