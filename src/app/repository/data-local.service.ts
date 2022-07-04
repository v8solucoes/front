import { Injectable } from '@angular/core';
import { ImodelUndefinedProperty, Ipermission, Irequest } from '@shared-library/interface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  errorResolve: any = null
  request: Irequest | null = null

  permission: Ipermission[] = [{
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
  }]
  model: ImodelUndefinedProperty = {
    [`account-adm`]: {
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
        test: 'emailValidate',
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
            sync: ['namePersonal'],
            async: [],
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
          typeInput: 'email',
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
            async: ['emailValidate'],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            front: 'string',
            back: 'string',
            test: 'emailValidate',
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
    },
  }
  document:any = {
    [`account-adm`]: {
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
    },
  }
  colection:{[keyof:string]: any[]} = {
    [`account-adm`]: [{
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
    }],
  }

  /* data: { [keyof: string]: Idata & { form?: null | FormGroup } & { request: IrequestDomain } } = {

    ['account-adm']: {

      request: {
        page: null,
        language: null,
        environment: null
        , moduleId: null
        , itemId: null
        , action: null
        , function: null
        , domain: null
        , date: null
      },
     
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
     
      dataDocument: null
    }
  } */
  constructor() { }
}