import { Injectable } from '@angular/core';
import { Idata, ImodelUndefinedProperty, Ipermission, Irequest } from '@shared-library/interface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  errorResolve: any = null
  request: Irequest | null = null

  public data: Idata = {
   ['account-adm']: {
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
              sync: [{'type':'validator','validator':'namePersonal'}],
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
              sync: [{'type':'validator','validator':'emailValidate'}],
              async: [{'type':'back','validator':'emailAccountExistAsync'}],
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
              sync: [{'type':'validator','validator':'telephone'}],
              async: [],
              updateOn: 'change',
              disabled: false,
              valueMin: 10,
              valueMax: 11,
              required: true,
              front: 'string',
              back: 'string',
              test: 'telephone',
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
              front: 'string',
              back: 'string',
              test: 'telephone',
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
     document: {
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
     },
     colection: [{
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
     }],
      request: this.request,
     form: null
    }
  }
  

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
            sync: [{'type':'validator','validator':'namePersonal'}],
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
            sync: [{'type':'validator','validator':'emailValidate'}],
            async: [{'type':'back','validator':'emailAccountExistAsync'}],
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
            sync: [{'type':'validator','validator':'telephone'}],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            front: 'string',
            back: 'string',
            test: 'telephone',
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
            front: 'string',
            back: 'string',
            test: 'telephone',
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
    },
  }
  colection:{[keyof:string]: any[]} = {
    [`account-adm`]: [{
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
    }],
  }

  constructor() { }
}