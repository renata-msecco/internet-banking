import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-confirma-transf',
  templateUrl: './confirma-transf.component.html',
  styleUrls: ['./confirma-transf.component.css']
})
export class ConfirmaTransfComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleBtnFotter = 'Home';
  submit = 'submit';
  TextConfirma = 'aqui você confirma o nome da pessoa que deseja transferir:';
  styleConfirma = 'styleConfirma';
  confirma = 'O nome esta correto ?';
  nomeDestinatario = 'nomeDestinatario';
  styleConf = 'styleConf';
  titleBtnProx = 'Próximo';
  nameBtnProx = 'nameBtnProx';
  titleBtnAnt = 'Anterior';


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

  NoTransf(){
    console.log('osdsdsdii');
  }

  YesTransf(){
    console.log('osdsdsdii');
  }

}
