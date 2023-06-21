import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '@component/form/form.service';
import { _debug } from '@repositoryDomain/debug';
import { InterfaceService } from '@view/interface/interface.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

export class DocumentComponent {

  formGroup!: UntypedFormGroup;

  constructor(
    public i: InterfaceService,
    private route: ActivatedRoute,
    private form: FormService

  ) {
    this.route.queryParams.subscribe(param=> {
 
      if(param['subMenu']) {
        let paramIsNull = param['subMenu'] ? param['subMenu'] : 'null'
        this.i.data.subMenuIsTrue = paramIsNull == 'null' ? false : true
        this.i.data.subMenuName = paramIsNull
        this.i.data.subMenuOrName = paramIsNull == 'null' ? this.i.data.documentName :  this.i.data.subMenuName
   
      /*   console.log('Query Parms')
        console.log(this.i.data.subMenuIsTrue +' / ' + paramIsNull) */
      }
      
    })
   this.router()
  }

  router() {

    return this.route.data.subscribe(({ response }) => { 
      
      const document = this.i.data.documentName
      const data = this.i.data.subMenuIsTrue ? this.i.data.subMenuName : this.i.data.local.document[document]
    
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

        this.i.data.form[`${document}`] =
          this.form.createForm(
            this.i.data.local.getRecursive(document).permission,
            this.i.data.local.getRecursive(document).model,
            data
          )
          if (_debug.pg.document) {
            console.log('EDITAR')
            console.log(this.i.data.form[`${document}`])
          }
      }
      this.i.load.document = true
      this.i.load.colection = true
      this.i.actionsEmitter.emit('documentOpen')
    })
  }
}
