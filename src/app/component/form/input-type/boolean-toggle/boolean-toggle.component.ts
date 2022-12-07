import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Ilanguage, ImodelRecursiveConfig } from '@domain/interface';

@Component({
  selector: 'app-boolean-toggle',
  templateUrl: './boolean-toggle.component.html',
  styleUrls: ['./boolean-toggle.component.scss']
})
export class BooleanToggleComponent implements OnInit {

  @Input() form?: UntypedFormGroup;
  @Input() model?: ImodelRecursiveConfig;
  @Input() language?: Ilanguage;
  control: UntypedFormControl = new UntypedFormControl()

  constructor() { }

  ngOnInit(): void {
    this.control = this.form?.get([this.model?.id as string]) as UntypedFormControl;
  }

}
