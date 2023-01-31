import { Component, OnInit } from '@angular/core';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {

  load = false
  text = this.i.data.local.text.level[this.i.data.language]
  language = this.i.data.language

  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {
    this.load = true
    this.i.data.language

    if (_debug.pg.menu) {
      console.log('Menu')
      console.log(this.i.data.local.permission)
    }

  }

}
