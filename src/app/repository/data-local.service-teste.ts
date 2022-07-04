import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Idata} from '@shared-library/interface';

@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

  data: { [keyof: string]: Idata & { form?: null | FormGroup } } = {

    ['account-adm']: {
      language: 'en',
      permission: [{
        id: 'account-adm',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
        _group: [
          {
            id: 'name',
            view: {
              form: true,
              title: true,
              subTitle: true,
            },
          },
          {
            id: 'email',
            view: {
              form: true,
              title: true,
              subTitle: true,
            },
          },
        ],
      }],
      model: {
        id: 'account-adm',
        typeData: 'object',
        typeInput: 'group',
        text: {
          en: {
            label: 'New Account',
            valueTest: 'Valor Teste',
            placeholder: 'Faça su conta',
            clearInput: 'Clear',
          },
        },
        validate: {
          sync: [],
          async: [],
          updateOn: 'change',
          disabled: false,
          valueMin: 8,
          valueMax: 35,
          required: false,
          front: 'string',
          back: 'string',
          test: 'namePersonal',
        },
        design: {
          css: {
            materialDesign: {
              appearance: 'fill',
            },
            form: {
              container: 'f-total',
            },
          },
        },
        _group: {
          name: {
            id: 'name',
            typeData: 'value',
            typeInput: 'input',
            text: {
              en: {
                label: 'Personal Name',
                valueTest: 'Test Name',
                placeholder: 'Fill in you name',
                clearInput: 'Clear',
              },
            },
            validate: {
              sync: [],
              async: ['namePersonal'],
              updateOn: 'change',
              disabled: false,
              valueMin: 8,
              valueMax: 35,
              required: true,
              front: 'string',
              back: 'string',
              test: 'namePersonal',
            },
            design: {
              tools: {
                accont: true,
                clear: true,
              },
              css: {
                materialDesign: {
                  appearance: 'fill',
                },
                form: {
                  container: 'f-total',
                },
              },
            },
          },
          email: {
            id: 'email',
            typeData: 'value',
            typeInput: 'input',
            text: {
              en: {
                label: 'E-mail',
                valueTest: 'Test Email',
                placeholder: 'Fill in you email',
                clearInput: 'Clear',
              },
            },
            validate: {
              sync: [],
              async: ['namePersonal'],
              updateOn: 'change',
              disabled: false,
              valueMin: 8,
              valueMax: 35,
              required: true,
              front: 'string',
              back: 'string',
              test: 'namePersonal',
            },
            design: {
              tools: {
                accont: true,
                clear: true,
              },
              css: {
                materialDesign: {
                  appearance: 'fill',
                },
                form: {
                  container: 'f-total',
                },
              },
            },
          },
        },
      }
    }
  }

  constructor( ) {}
}