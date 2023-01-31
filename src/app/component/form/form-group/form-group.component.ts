import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ImodelRecursive, Irequest, IpermissionRecursive, ImodelRecursiveConfig, IpermissionRecursiveConfig  } from '@domain/interface';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})

export class FormGroupComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() permission!: IpermissionRecursive[];
  @Input() model!: ImodelRecursive;
  @Input() request!: Irequest

  constructor(
    public i: InterfaceService
  ) {
  }

  ngOnInit(): void {
  /*   console.log('Form Group')
    console.log(this.permission)
    console.log(this.model)
    console.log(this.form.controls) */
  }
  getFormObject(id: string): UntypedFormGroup {
    return this.form.get(id) as UntypedFormGroup
  }
  getPermissionObject(permission: IpermissionRecursive): IpermissionRecursive[] {
    return permission._group as unknown as IpermissionRecursive[]
  }
  getModelObject(id: string): ImodelRecursive {
    return this.model[id]._group as unknown as ImodelRecursive
  }
  getPermissionValue(permission: IpermissionRecursive): IpermissionRecursiveConfig {
    return permission as unknown as IpermissionRecursiveConfig
  }
  getModelValue(id: string): ImodelRecursiveConfig {
    return this.model[id] as unknown as ImodelRecursiveConfig
  }

}
