import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.scss']
})
export class MenuAdmComponent implements OnInit {

  load = false
/*   data!: Ipermission[]
  inscription!: Subscription */

  constructor(
    public i: InterfaceService,
  ) { }

  ngOnInit(): void {
    this.load = true
    
 /*    this.inscription = this.route.data.subscribe((o) => {
      console.log('Route')
      console.log(o)
      this.data = o['request']['permission']
      console.log(this.data)
      this.load = true
    }) */
  }

}
