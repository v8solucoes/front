import { InterfaceService } from '@view/app-v8/interface.service';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Irequest, ImodelRecursiveConfig, IpermissionRecursiveConfig } from '@domain/interface';

@Component({
  selector: 'app-form-value',
  templateUrl: './form-value.component.html',
  styleUrls: ['./form-value.component.scss']
})
export class FormValueComponent implements OnInit {
  @Input() form!: UntypedFormGroup;
  @Input() permission!: IpermissionRecursiveConfig;
  @Input() model!: ImodelRecursiveConfig;
  @Input() request!: Irequest

  inputType = this.i.data.local.variable.inputType

  constructor( public i: InterfaceService) { }

  ngOnInit(): void {
/*     console.log('Form Value')
    console.log(this.permission)
    console.log(this.model)
    console.log(this.form.controls) */
  
  }

}
