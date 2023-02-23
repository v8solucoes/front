import { Component, Input, OnInit } from '@angular/core';
import { Imodel2, IpermissionFormControl, Irequest } from '@domain/interface';

@Component({
  selector: 'app-colection-value',
  templateUrl: './colection-value.component.html',
  styleUrls: ['./colection-value.component.scss']
})
export class ColectionValueComponent implements OnInit {
  @Input() permission?: IpermissionFormControl[];
  @Input() model?: Imodel2;
  @Input() language?: Irequest['language'];
  @Input() colection?: any;
  constructor() { }

  ngOnInit(): void {

   /*  console.log('VALUE')
    console.log(this.colection) */
  }

}
