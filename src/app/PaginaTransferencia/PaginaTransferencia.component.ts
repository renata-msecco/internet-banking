import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-pagina-transferencia',
  templateUrl: './PaginaTransferencia.component.html',
  styleUrls: ['./PaginaTransferencia.component.css']
})
export class PaginaTransferenciaComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameButtonFooter = 'nameButtonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleButtonFotter = 'Sair';
  titleBtnFotter = 'Home';
  submit = 'submit';
  textOla = 'Olá,';
  textMsg = 'Faça uma transferência';
  classNome = 'textName';
  textAux = 'textAux';
  classFooterTransf = 'footerTransf';
  textAgencia = 'textAgencia';
  placeholderAgencia = 'Digite a agência';
  classInput = 'input';
  nameInputAgencia = 'nameInputAgencia';
  nameInputConta = 'nameInputConta';
  placeholderConta = 'Digite a conta';
  textConta = 'textConta';
  titleBtnProx = 'Próximo';
  classButton = 'classButton';
  nameBtnProx = 'nameBtnProx';
  textDaAgencia = 'Digite a agência:';
  textDaConta = 'Digite o número da conta:';
  styleText = 'styleText';

  constructor() { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
  }

  Home() {
    console.log('osdsdsdii');
  }

  ProxTransf(){
    console.log('sdii');
  }

}
