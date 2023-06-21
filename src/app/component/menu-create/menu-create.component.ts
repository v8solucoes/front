import { Component, Input } from '@angular/core';
import { Idoc } from '@domain/interface';
import { NameProperty } from '@domain/typscript';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss']
})
export class MenuCreateComponent {
  
  @Input() title?:string;
  @Input() margin:boolean = false
  @Input() document?: {
    id: NameProperty<Idoc>
    documentSub?: NameProperty<Idoc>
    name?:string
    iconLeft?: string
    iconRight?: string
    count?: boolean | number
  }[]

  load = false
  text = this.i.data.local.text.level[this.i.data.language]
  falseActive = [false, false, false, false, false, false,false,false,false]

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
  falseLinkActive(index:number) {

   /*  console.log(index) */
  
    this.falseActive[0] = 0 == index ? true : false;
    this.falseActive[1] = 1 == index ? true : false;
    this.falseActive[2] = 2 == index ? true : false;
    this.falseActive[3] = 3 == index ? true : false;
    this.falseActive[4] = 4 == index ? true : false;
    this.falseActive[5] = 5 == index ? true : false;
    this.falseActive[6] = 6 == index ? true : false;
    this.falseActive[7] = 7 == index ? true : false;
    this.falseActive[8] = 8 == index ? true : false;

  }

}
