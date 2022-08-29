import { Component, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Ilanguage, Imodel, InameValidatorLocal, Irequest, Ivalidator } from '@domain/interface';

@Component({
  selector: 'app-input-generec',
  templateUrl: './input-generec.component.html',
  styleUrls: ['./input-generec.component.scss'],
})
export class InputGenerecComponent {
  @Input() form?: FormGroup;
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;
  @Input() request?: Irequest;


/*   error$: Observable<IresponseValidatorUnit>; */
  loading = false;
  matcher = new MyErrorStateMatcher();
  control: FormControl = new FormControl()

  appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
  required = this.model?.validate?.required as Imodel['validate']['required'];
  text = this.model?.text[this.language as Ilanguage]
  
  validatorName = this.model?.validate?.mask as InameValidatorLocal 
  constructor() { }
  
  ngOnInit(): void {

    this.appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
    this.required = this.model?.validate.required as Imodel['validate']['required'];
    this.text = this.model?.text[this.language as Ilanguage]
    this.control = this.form?.get([this.model?.id as string]) as FormControl;
    this.loading = true
    this.validatorName = this.model?.validate?.mask as InameValidatorLocal

    /* console.log('INPUT GENERIC')
    console.log(this.createRequest!) */


  }
  get createRequest(): Irequest {
   
    const req = {...this.request!}

    const validator: Ivalidator = {
      id: this.model!.id,
      name: this.validatorName,
      label: this.text!.label,
      value: null,
      language: this.language!,
      typeExecute: 'front',
      error: null
    }

    req.validator = validator
   /*  console.log(req.validator?.name) */
/*     console.log(req.validator) */
/*     console.log(validator) */
    return req
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
  
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}