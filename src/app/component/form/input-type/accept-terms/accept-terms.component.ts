import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ilanguage, Imodel } from '@domain/interface';

@Component({
  selector: 'app-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrls: ['./accept-terms.component.scss']
})
export class AcceptTermsComponent implements OnInit {

  @Input() form?: FormGroup;
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;

  loading = false;
  control: FormControl = new FormControl()
/*   accept: boolean | null */

  constructor() { }

  ngOnInit(): void {
    this.control = this.form?.get([this.model?.id as string]) as FormControl;
  }

  approved() {
   const value = this.control.value ? true : false
    this.control.setValue(!value)
  }

}
