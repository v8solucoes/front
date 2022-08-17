import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ilanguage, Imodel, Ipermission, Irequest } from '@shared-library/interface';

@Component({
  selector: 'app-form-value',
  templateUrl: './form-value.component.html',
  styleUrls: ['./form-value.component.scss']
})
export class FormValueComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() permission?: Ipermission[];
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;
  @Input() request?: Irequest

  constructor() { }

  ngOnInit(): void {
/*     console.log('value')
    console.log(this.request) */
  
  }

}
