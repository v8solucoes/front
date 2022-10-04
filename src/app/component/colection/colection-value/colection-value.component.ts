import { Component, Input, OnInit } from '@angular/core';
import { Ilanguage, Imodel, Ipermission } from '@domain/interface';

@Component({
  selector: 'app-colection-value',
  templateUrl: './colection-value.component.html',
  styleUrls: ['./colection-value.component.scss']
})
export class ColectionValueComponent implements OnInit {
  @Input() permission?: Ipermission[];
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;
  @Input() colection?: any;
  constructor() { }

  ngOnInit(): void {

    console.log('VALUE')
    console.log(this.colection)
  }

}
