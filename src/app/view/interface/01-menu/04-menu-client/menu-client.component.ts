import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.scss']
})
export class MenuClientComponent implements OnInit {

  text = this.i.data.local.text.level[this.i.data.language]
  language = this.i.data.language
  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {
  }

}
