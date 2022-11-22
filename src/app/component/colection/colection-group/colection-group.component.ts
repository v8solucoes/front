import { Component, Input, OnInit } from '@angular/core';
import { Ilanguage, ImodelUndefinedProperty, Ipermission } from '@domain/interface';

@Component({
  selector: 'app-colection-group',
  templateUrl: './colection-group.component.html',
  styleUrls: ['./colection-group.component.scss']
})
export class ColectionGroupComponent implements OnInit {

  @Input() permission?: Ipermission[];
  @Input() model?: ImodelUndefinedProperty;
  @Input() language?: Ilanguage;
  @Input() colection?: any;

  constructor() { 
/*     console.log(this.permission)
    console.log(this.model)
    console.log(this.language)
    console.log(this.colection) */
  }

  ngOnInit(): void {

   /*  console.log(this.permission)
    console.log(this.model)
    console.log(this.language)
    console.log(this.colection) */
  }

}
