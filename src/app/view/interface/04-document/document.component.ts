import { Component, OnDestroy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '@component/form/form.service';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

export class DocumentComponent implements OnDestroy {

  load = false
  inscription!: Subscription
  formGroup!: UntypedFormGroup;

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    private form: FormService

  ) {

    this.inscription = this.route.data.subscribe(({ response }) => {    
      this.i.load.document = false
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
       /*  console.log('document') */
        this.i.actionsEmitter.emit('document')
        this.i.load.colectionHeader = true;
        this.i.load.document = true

      }, 500);

    })
  }

  ngOnDestroy(): void { 
/*     console.log('destroy Document') */
    this.i.load.document = false;
    this.inscription.unsubscribe()
  }
}
