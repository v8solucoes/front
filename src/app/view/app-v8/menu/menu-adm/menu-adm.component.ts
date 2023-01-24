import { level } from './../../../../../../../domain/src/domain/repository/data-text-language';
import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';
import { _debug } from '../../../../../../../domain/src/domain/repository/debug';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {

  load = false
  text = this.i.data.local.text.level[this.i.data.language]

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
