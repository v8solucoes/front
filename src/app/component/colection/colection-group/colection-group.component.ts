import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ImodelRecursive, ImodelRecursiveConfig, IpermissionRecursive, IpermissionRecursiveConfig, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-colection-group',
  templateUrl: './colection-group.component.html',
  styleUrls: ['./colection-group.component.scss']
})
export class ColectionGroupComponent implements OnInit {

  @Input() permission!: IpermissionRecursive[];
  @Input() model!: ImodelRecursive;
  @Input() request!: Irequest
  @Input() colection?: any;

  constructor(
    public i: InterfaceService
  ) {

    
    
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
 /*  getFormObject(id: string): UntypedFormGroup {
    return this.form.get(id) as UntypedFormGroup
  } */
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
