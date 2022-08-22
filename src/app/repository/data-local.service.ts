import { Injectable } from '@angular/core';
import { ImodelUndefinedProperty, Ipermission, Irequest } from '@domain/interface';

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
      {
        id: 'telephone',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'acceptTerms',
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
        mask: 'emailValidate',
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
            mask: 'namePersonal',
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
            sync: ['emailValidate'],
            async: ['emailAccountExistAsync'],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            mask: 'emailValidate',
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
        telephone: {
          id: 'telephone',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Telephone',
              valueTest: 'Test Telephone',
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: ['telephone'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'telephone',
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
        acceptTerms: {
          id: 'acceptTerms',
          typeData: 'value',
          typeInput: 'acceptTerms',
          text: {
            en: {
              label: 'Accept Terms',
              valueTest: false,
              placeholder: 'Accept Terms',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'telephone',
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
      name: 'Emerson Felix',
      email: 'contato@v8sitesV.com.br',
      telephone: '11981231970',
      acceptTerms: true
    },
  }
  colection:{[keyof:string]: any[]} = {
    [`account-adm`]: [{
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
    }],
  }

  constructor() { 
    
  }
}