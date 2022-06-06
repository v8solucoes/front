import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Imodel, ImodelUndefinedProperty, Ipermission } from '@shared-library/interface';

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
 
  constructor() {  }

  ngOnInit(): void { 
 
  }
  getFormObject(id: string): FormGroup {
    return this.form?.get(id) as FormGroup
  }
  getFormValue():FormGroup {
    
    return this.form as FormGroup
  }
  
}
