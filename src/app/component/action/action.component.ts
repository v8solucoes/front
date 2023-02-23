import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { IresponseValidatorCompose, ImodelRecursive } from '@domain/interface';
import { InterfaceService } from '@view/interface/interface.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { _debug } from '@repositoryDomain/debug';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})

export class ActionComponent implements OnInit {

  @Input() action!: 'create' | 'update' | 'user-sig-in'
  @Input() width: number = 100
  @Input() redirect: string = null as any

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
    this.document = this.i.data.form[this.i.data.requestLast.document]
    this.erros = this.i.data.form[this.i.data.requestLast.document].errors
    this.model = i.data.local.model[this.i.data.requestLast.document]._group
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

        this.i.backand.httpCrudGeneric(this.action).subscribe(async (response: IresponseValidatorCompose | null) => {


          setTimeout(() => {

            if (this.redirect != null) {

              this.i.auth.router.navigate([this.redirect])

            }

            this.sucess = true

          }, 2500);


          const mensagem = `${text[this.action]} ${text.sucess} ${this.redirect != null ? text.redirect : ''}`

          this._snackBar.open(mensagem, 'X');

          console.log(response)

        })
      }

      if (this.action == 'user-sig-in') {

        const email = this.i.data.form[this.i.data.requestLast.document].get(['sign-in', 'email'])?.value
        const password = this.i.data.form[this.i.data.requestLast.document]?.get(['sign-in', 'password'])?.value
        const language = this.i.data.language
        this.i.auth.loginIn(email, password, language).then(loged => {
          
          if (loged) {
          this.i.auth.router.navigate([`${language}/app/dashboard`])
          }
          return
        }).finally()
       
        return 
      }

    } catch (error) {
      this.processing = false
      this.sucess = false
      const mensagem = `${text[this.action]} ${JSON.stringify(error)}`

      this._snackBar.open(mensagem, 'X');

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
