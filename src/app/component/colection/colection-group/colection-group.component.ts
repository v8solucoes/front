import { Component, Input, OnInit } from '@angular/core';
import { ImodelRecursive, ImodelRecursiveConfig, IpermissionRecursive, IpermissionRecursiveConfig, Irequest } from '@domain/interface';
import { InterfaceService } from '@view/interface/interface.service';

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

  colors:string[] = this.createColors

  constructor(
    public i: InterfaceService
  ) {
    this.i.data.requestLast.language
  }

  ngOnInit(): void { }

 get createColors() {
    const colors = []
    for (var i = 0; i < 100; i++) {

      colors.push(this.colorDynamic)
    }
    return colors
  }
 get colorDynamic() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

   return `rgb(${r}, ${g}, ${b} ,0.87)`
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
