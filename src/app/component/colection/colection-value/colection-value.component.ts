import { Component, Input, OnInit } from '@angular/core';
import { Ilanguage, Imodel2, Ipermission2 } from '@domain/interface';

@Component({
  selector: 'app-colection-value',
  templateUrl: './colection-value.component.html',
  styleUrls: ['./colection-value.component.scss']
})
export class ColectionValueComponent implements OnInit {
  @Input() permission?: Ipermission2[];
  @Input() model?: Imodel2;
  @Input() language?: Ilanguage;
  @Input() colection?: any;
  constructor() { }

  ngOnInit(): void {

   /*  console.log('VALUE')
    console.log(this.colection) */
  }

}
