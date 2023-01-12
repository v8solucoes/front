import { UntypedFormGroup } from '@angular/forms';
import { IresponseValidatorCompose } from '@domain/interface';
import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  document: UntypedFormGroup
  load = false
  erros!: any;

  constructor(
    public i: InterfaceService,
  ) {
    this.document = this.i.data.form[this.i.data.requestLast.document]
    this.erros = this.i.data.form[this.i.data.requestLast.document].errors

  }

  ngOnInit(): void {

    setTimeout(() => {

      console.log('ERROS')
      console.log(this.i.data.form[this.i.data.requestLast.document])

      this.load = true

    }, 0);

  }
  async update() {

    console.log('Action')

    try {

      this.i.backand.httpCrudGeneric('update').subscribe(async (response: IresponseValidatorCompose | null) => {

        console.log(response)
      })

    } catch (error) {
      console.log(error)
    }

  }
}
