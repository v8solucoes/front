import { Credencial } from './../05-compartilhado/app.interface'

export type NovaConta = 
Pick<Credencial['usuario'],'tipoAcesso'> &
 Pick<Credencial['requisicao'],'idItem'> &
 Pick<Credencial['requisicao'],'dominio'>