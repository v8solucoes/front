import { UntypedFormGroup } from '@angular/forms';
import { IresponseValidatorCompose, ImodelRecursive } from '@domain/interface';
import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '@view/app-v8/interface.service';
import { _debug } from '../../../../../../../domain/src/domain/repository/debug';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  text = {
    en: {
      sucess: 'Sucess!',
      update: 'Update',
      processing: 'Processing...'
    }
  }

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
  }

  ngOnInit(): void {

    setTimeout(() => {

      this.load = true

    }, 0);

  }
  async update() {

    this.processing = true

    try {

      this.i.backand.httpCrudGeneric('update').subscribe(async (response: IresponseValidatorCompose | null) => {
    
        setTimeout(() => {
          
          this.sucess = true
          
        }, 2000);
     
        this._snackBar.open(this.text[this.i.data.language].sucess, this.text[this.i.data.language].update);
  
        console.log(response)
      })

    } catch (error) {
      this.processing = false
      this.sucess = false
      this._snackBar.open(JSON.stringify(error) as any, this.text[this.i.data.language].update);
      console.log(error)
    }

  }

  validar() {
    
    const error = this.verificaValidacao()

    if (_debug.action) {
      console.log(error)
    }
    this.i.modal.modalErrorForm({language: this.i.data.language, width:'500', error, model: this.model})
  }

  verificaValidacao(form = this.document.get(this.i.data.requestLast.document) as UntypedFormGroup) {

    const errors:string[] = [];

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
