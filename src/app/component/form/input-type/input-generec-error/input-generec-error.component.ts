import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generec-error',
  templateUrl: './input-generec-error.component.html',
  styleUrls: ['./input-generec-error.component.scss']
})
export class InputGenerecErrorComponent implements OnInit {

  @Input() erros?: any;

 /*  errorList: ResponseCompose; */

  constructor() {
/*     console.log(this.erros) */
 /*    this.errorList = this.erros.error */
   }

  ngOnInit(): void {
 /*    console.log('imputError') */
  }

}
