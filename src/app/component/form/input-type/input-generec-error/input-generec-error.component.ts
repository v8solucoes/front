import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generec-error',
  templateUrl: './input-generec-error.component.html',
  styleUrls: ['./input-generec-error.component.scss']
})
export class InputGenerecErrorComponent implements OnInit {

  @Input() erros?: any;

  constructor() { }

  ngOnInit(): void {
 /*    console.log(this.erros) */
  }

}
