import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Ilanguage, Imodel, Ipermission, Irequest } from '@domain/interface';

@Component({
  selector: 'app-form-value',
  templateUrl: './form-value.component.html',
  styleUrls: ['./form-value.component.scss']
})
export class FormValueComponent implements OnInit {
  @Input() form?: UntypedFormGroup;
  @Input() permission?: Ipermission[];
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;
  @Input() request?: Irequest

  constructor() { }

  ngOnInit(): void {
 /*    console.log('FORM VALUE')
    console.log(this.form?.value) */
   /*  console.log('value')
    console.log(this.request) */
  
  }

}
