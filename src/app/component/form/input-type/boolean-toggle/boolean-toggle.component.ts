import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ilanguage, Imodel } from '@domain/interface';

@Component({
  selector: 'app-boolean-toggle',
  templateUrl: './boolean-toggle.component.html',
  styleUrls: ['./boolean-toggle.component.scss']
})
export class BooleanToggleComponent implements OnInit {

  @Input() form?: FormGroup;
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;
  control: FormControl = new FormControl()

  constructor() { }

  ngOnInit(): void {
    this.control = this.form?.get([this.model?.id as string]) as FormControl;
  }

}
