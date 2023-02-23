import { Component, OnInit } from '@angular/core';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-menu-partner',
  templateUrl: './menu-partner.component.html',
  styleUrls: ['./menu-partner.component.scss']
})
export class MenuPartnerComponent implements OnInit {
  text = this.i.data.local.text.level[this.i.data.language]
  language = this.i.data.language
  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {

    this.i.data.language

    if (_debug.pg.menu) {
      console.log('Menu Partner')
      console.log(this.i.data.local.permission)
    }

  }
}
