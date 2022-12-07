import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {

  load = false
  list: any[] = []

  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {
    this.load = true
    this.list.push({ id: 'felix' })
    console.log(this.i.data.local.permission)
  }

}
