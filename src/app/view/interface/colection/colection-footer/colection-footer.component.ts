import { InterfaceService } from '@view/interface/interface.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colection-footer',
  templateUrl: './colection-footer.component.html',
  styleUrls: ['./colection-footer.component.scss']
})
export class ColectionFooterComponent implements OnInit {

  constructor(
    public i:InterfaceService
  ) { }

  ngOnInit(): void {
  }

}
