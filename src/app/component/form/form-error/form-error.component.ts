import { ImodelRecursive } from './../../../../../../domain/src/shared/interface';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Irequest } from '@domain/interface';
import { InterfaceService } from '@view/app-v8/interface.service';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  document: Irequest['document']
  form!: UntypedFormGroup;
  errors: any[] = []
  model:ImodelRecursive

  constructor(public i: InterfaceService) {
    
    this.document = this.i.data.requestLast.document
    this.model = i.data.local.model[this.document]._group
    
    this.i.data.form[this.document].statusChanges.subscribe(o => {

      if (this.i.data.form[this.document].valid) {

        console.log('Aprovated')
        console.log(this.i.data.form[this.document].valid)

      } else {

        this.errors = this.verificaValidacao(this.i.data.form[this.document].get(this.document) as UntypedFormGroup)

        console.log('Reprovated')
        console.log(this.errors)
        
       }
    })   
  }

  ngOnInit(): void {

   /*  if (this.i.data.form[this.document].getError(this.document) == null) {
      console.log('NULL')
    } else {
      console.log('ERROR')
      
     } */
  }

  verificaValidacao(formulario: UntypedFormGroup) {

    const lista:any[] = [];

    Object.keys(formulario.controls).forEach((campo: string) => {
      const controle = formulario.get(campo);

      if (controle!.invalid) {
        lista.push(campo);
      }

      if (controle instanceof UntypedFormGroup) {
        lista.push(this.verificaValidacao(controle));
      }
    });

    return lista;
  }

}
