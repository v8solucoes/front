import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ilanguage, Imodel, ImodelUndefinedProperty, Ipermission, Irequest } from '@domain/interface';

export interface FormConstructor{
  permission: Ipermission[] | null, model: Imodel | null, data?: any 
}

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
  
export class FormGroupComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() permission?: Ipermission[];
  @Input() model?: ImodelUndefinedProperty;
  @Input() language?: Ilanguage;
  @Input() request?: Irequest
  
  constructor() { 
    
  }
  
  ngOnInit(): void { 
    console.log('group')
    console.log(this.request)
    
  }
  getFormObject(id: string): FormGroup {
    return this.form?.get(id) as FormGroup
  }

  getFormValue():FormGroup {
    return this.form as FormGroup
  }
  
}
