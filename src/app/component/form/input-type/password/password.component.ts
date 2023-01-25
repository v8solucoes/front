import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Ilanguage, ImodelConfig, ImodelRecursiveConfig } from '@domain/interface';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  @Input() form?: UntypedFormGroup;
  @Input() model?: ImodelRecursiveConfig;
  @Input() language?: Ilanguage;
  control: UntypedFormControl = new UntypedFormControl()
  loading = false;
  appearance = this.model?.design.css.materialDesign.appearance as ImodelConfig['design']['css']['materialDesign']['appearance'];
  required = this.model?.validate?.required as ImodelConfig['validate']['required'];
  text = this.model?.text[this.language as Ilanguage]
  constructor() { }

  ngOnInit(): void {

    this.appearance = this.model?.design.css.materialDesign.appearance as ImodelConfig['design']['css']['materialDesign']['appearance'];
    this.required = this.model?.validate.required as ImodelConfig['validate']['required'];
    this.text = this.model?.text[this.language as Ilanguage]
    this.loading = true
  }

}
