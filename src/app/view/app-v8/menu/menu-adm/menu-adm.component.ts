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
/*   list: any[] = [] */

  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {
    this.load = true
/*     this.list.push({ id: 'felix' }) */

    if (_debug.pg.menu) {
      console.log('Menu')
      console.log(this.i.data.local.permission)
    }
   
  }

}
