import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ilanguage, Imodel, Ipermission } from '@shared-library/interface';

@Component({
  selector: 'app-form-value',
  templateUrl: './form-value.component.html',
  styleUrls: ['./form-value.component.scss']
})
export class FormValueComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() permission?: Ipermission[];
  @Input() model?: Imodel;
  @Input() language?: Ilanguage;

  constructor() { }

  ngOnInit(): void {
  
  }

}
