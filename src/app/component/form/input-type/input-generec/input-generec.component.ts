import { Component, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { InameValidatorLocal, Irequest, Ivalidator, ImodelRecursiveConfig, ImodelConfig } from '@domain/interface';

@Component({
  selector: 'app-input-generec',
  templateUrl: './input-generec.component.html',
  styleUrls: ['./input-generec.component.scss'],
})
export class InputGenerecComponent {

  @Input() form!: UntypedFormGroup;
  @Input() model!: ImodelRecursiveConfig;
  @Input() request!: Irequest;

  loading = false;
  matcher = new MyErrorStateMatcher();
  control: UntypedFormControl = new UntypedFormControl()
  hide: boolean= true

  appearance!: ImodelConfig['design']['css']['materialDesign']['appearance'];
  required!: ImodelConfig['validate']['required'];
  text!: ImodelConfig['text'][Irequest['language']]
  validatorName!: InameValidatorLocal

  constructor() { 
  }
  
  ngOnInit(): void {
 
    this.appearance = this.model.design.css.materialDesign.appearance
    this.required = this.model.validate.required
    this.text = this.model.text[this.request.language]
    this.control = this.form.get([this.model.id as string]) as UntypedFormControl;
    this.validatorName = this.model.validate.mask
    this.loading = true

  }
  get createRequest(): Irequest {
   
    const req = {...this.request!}

    const validator: Ivalidator = {
      id: this.model.id,
      name: this.validatorName,
      label: this.text.label,
      value: null,
      language: this.request.language,
      typeExecute: 'front',
      error: null
    }

    req.validator = validator

    return req
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
 
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
 
    const isSubmitted = form && form.submitted;
  
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}