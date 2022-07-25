import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataLocalService } from '@repository/data-local.service';
import { Ilanguage, Imodel, ImodelUndefinedProperty, ImoduleId, Ipermission, Irequest } from '@shared-library/interface';
import { FormService } from '../form.service';

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
  @Input() model?: ImodelUndefinedProperty
  @Input() language?: Ilanguage;
  
  constructor() { 
    
  }
  
  ngOnInit(): void { 
    /*  this.formService.get(this.moduleId) */
    
  }
  getFormObject(id: string): FormGroup {
    return this.form?.get(id) as FormGroup
  }

  getFormValue():FormGroup {
    return this.form as FormGroup
  }
  
}
