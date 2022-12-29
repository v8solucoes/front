import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '@component/form/form.service';
import { Subscription } from 'rxjs';
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

  ) {}

  ngOnInit(): void {

/*     console.log('Document') */
    
    this.inscription = this.route.data.subscribe((document) => {
      this.load = false
      const permissions = this.i.data.local.getRecursive(this.i.data.requestLast.document).permission
      const model = this.i.data.local.getRecursive(this.i.data.requestLast.document).model
      const data = document['response']
  
      this.i.viewDocument = true
      this.formGroup = this.form.createForm(permissions, model, data)
      this.i.data.form[`${this.i.data.requestLast.document}`] = this.form.createForm(permissions, model, data)

     /*  console.log(this.i.data.form[this.i.data.requestLast.document].get([this.i.data.requestLast.document, 'email'])?.value) */

      this.i.actionsEmitter.emit('documentCloset')

      this.load = true

      setTimeout(() => {

        this.i.actionsEmitter.emit('documentOpen')

      }, 500);
      
    })

  }


}
