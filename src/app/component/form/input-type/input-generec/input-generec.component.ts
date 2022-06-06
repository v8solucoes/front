import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Imodel } from '@shared-library/interface';

@Component({
  selector: 'app-input-generec',
  templateUrl: './input-generec.component.html',
  styleUrls: ['./input-generec.component.scss'],
})
export class InputGenerecComponent implements OnInit, OnChanges {
  @Input() form?: FormGroup;
  @Input() model?: Imodel;

  appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
  required = this.model?.validate.required as Imodel['validate']['required'];
  text = this.model?.text?.en

  constructor() {

  

  }

  ngOnInit(): void {
    this.appearance = this.model?.design.css.materialDesign.appearance as Imodel['design']['css']['materialDesign']['appearance'];
    this.required = this.model?.validate.required as Imodel['validate']['required'];
    this.text = this.model?.text?.en
  }

  ngOnChanges(changes: SimpleChanges): void {
  console.log(this.control.value)
  }

  get control(): FormControl {
    return this.form?.get([this.model?.id as string]) as FormControl;
  }
}
