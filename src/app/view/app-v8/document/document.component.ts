import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '@component/form/form.service';
import { Subscription } from 'rxjs';
import { _debug } from '../../../../../../domain/src/domain/repository/debug';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

export class DocumentComponent implements OnInit {

  load = false
  inscription!: Subscription
  formGroup!: UntypedFormGroup;

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    private form: FormService

  ) {

    this.inscription = this.route.data.subscribe(({ response }) => {
      this.i.actionsEmitter.emit('documentCloset')
      this.load = false

      if (response == null) {

        if (_debug.pg.document) {
          console.log('NEW')
          console.log(response)
        }

      } else {

        if (_debug.pg.document) {
          console.log('EDITAR')
          console.log(response)
        }

        this.i.data.form[`${this.i.data.requestLast.document}`] =
          this.form.createForm(
            this.i.data.local.getRecursive(this.i.data.requestLast.document).permission,
            this.i.data.local.getRecursive(this.i.data.requestLast.document).model,
            response
          )
      }

      setTimeout(() => {

        this.load = true
        this.i.actionsEmitter.emit('documentOpen')

      }, 500);

    })
  }

  ngOnInit(): void { }
}
