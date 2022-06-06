/* export {
  dados,
  Idados,
  modelo,
  Imodelo,
  permissao,
  Ipermissao
} from '../../../../library-shared/src/construtor/04-dist/dadosApp/dadosApp.dados'; */

import { Imodel, Ipermission } from "@shared-library/interface";

const data: any = {
  ['account-adm'] : {
    name: 'Emeson Felix'
  }
}
const permission: Ipermission[] | null = [
  {
    id: 'account-adm',
    type: 'object',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'name',
        type: 'value',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
        _group: null
      },
    ],
  },
];
const model: Imodel | null = {
  id: 'account-adm',
  type: 'object',
  design: { css: 'teste', icon: 'home' },
  validate: {
    back: '',
    front: '',
    teste: '',
  },
  _group: {
    id: 'name',
    type: 'value',
    design: { css: 'teste', icon: 'home' },
    validate: {
      back: '',
      front: '',
      teste: '',
    },
    _group: null
  }
}