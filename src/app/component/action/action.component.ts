import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IresponseValidatorCompose, ImodelRecursive } from '@domain/interface';
import { InterfaceService } from '@view/interface/interface.service';

import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { _debug } from '@repositoryDomain/debug';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})

export class ActionComponent implements OnInit {

  @Input() action!: 'create' | 'update' | 'user-sig-in'
  @Input() width: number = 100
  @Input() redirect!: string

  text = this.i.data.local.text.action[this.i.data.language]

  document: UntypedFormGroup
  model: ImodelRecursive
  load = false
  erros!: any;
  processing = false;
  sucess = false;

  constructor(
    public i: InterfaceService,
    private _snackBar: MatSnackBar
  ) {
    this.document = this.i.data.form[i.docOrDocSub]
    this.erros = this.i.data.form[i.docOrDocSub].errors
    this.model = i.data.local.model[i.docOrDocSub]._group
    this.action = this.action
  }

  ngOnInit(): void {

    setTimeout(() => {

      this.load = true

    }, 0)

  }

  async crud() {

    const text = this.text
    this.processing = true

    try {

      if (this.action != 'user-sig-in') {


        this.i.backand.httpCrudGeneric(this.action).subscribe(async (response: any | null) => {

   /*        console.log(response.response == null) */

          if (response.response === null) {
            const mensagem = `${text[this.action]} ${text.sucess} ${this.redirect != null ? text.redirect : ''}`
            this._snackBar.open(mensagem, 'X');
          
            setTimeout(() => {
  
              this.sucess = true
/*               console.log('this.redirect') */
    /*           console.log(this.redirect) */
              if (this.redirect != undefined) {
    
                this.i.auth.router.navigate([this.redirect])
              }  
            }, 200);



          } else {
            
            const mensagem = `${text[this.action]} ${text.error}`
            
            this._snackBar.open(mensagem, 'X');
           /*  throw new this.erros */
            }

       /*    console.log(response) */

        })
      }

      if (this.action == 'user-sig-in') {

        const email = this.i.data.form[this.i.data.requestLast.document].get(['sign-in', 'email'])?.value
        const password = this.i.data.form[this.i.data.requestLast.document]?.get(['sign-in', 'password'])?.value
        const language = this.i.data.language
        await this.i.auth.loginIn(email, password, language)
        return 
      }

    } catch (error) {
      this.processing = false
      this.sucess = false
      const mensagem = `${text[this.action]} ${JSON.stringify(error)}`

      this._snackBar.open(mensagem, 'X');
/*       this.i.auth.router.navigate([]) */
      console.log(error)
    }

  }

  validar() {

    const error = this.verificaValidacao()

    if (_debug.action) {
      console.log(error)
    }
    this.i.modal.modalErrorForm({ language: this.i.data.language, width: '500', error, model: this.model })
  }

  verificaValidacao(form = this.document.get(this.i.data.requestLast.document) as UntypedFormGroup) {

    const errors: string[] = [];

    Object.keys(form.controls).forEach((campo: string) => {

      const controle = form.get(campo);

      if (controle!.invalid) {
        errors.push(campo);
      }

      if (controle instanceof UntypedFormGroup) {
        this.verificaValidacao(controle)
      }
    });

    return errors
  }
}
