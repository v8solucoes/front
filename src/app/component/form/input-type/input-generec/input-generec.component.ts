import { Component, Input } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Imodel } from '@shared-library/interface';

@Component({
  selector: 'app-input-generec',
  templateUrl: './input-generec.component.html',
  styleUrls: ['./input-generec.component.scss'],
})
export class InputGenerecComponent {
  @Input() form?: FormGroup;
  @Input() model?: Imodel;
/*   error$: Observable<ValidatorResponse>; */
  matcher = new MyErrorStateMatcher();
  loading = false;
  control: FormControl = new FormControl()

  appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
  required = this.model?.validate?.required as Imodel['validate']['required'];
  text = this.model?.text?.en
  
  constructor() {}
 
  ngOnInit(): void {
    this.appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
    this.required = this.model?.validate.required as Imodel['validate']['required'];
    this.text = this.model?.text?.en
    this.control = this.form?.get([this.model?.id as string]) as FormControl;
    this.loading = true
  }  
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
  
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}