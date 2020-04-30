import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-transferencia-valor',
  templateUrl: './transferencia-valor.component.html',
  styleUrls: ['./transferencia-valor.component.css']
})
export class TransferenciaValorComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleBtnFotter = 'Home';
  textMsg = 'Digite o valor da transferencia para';
  classNome = 'textMsg';
  nomeDestinatario = 'nomeDestinatario';
  submit = 'submit';
  textValor = 'textValor';
  placeholderValor = 'R$ 00,00';
  classInput = 'input';
  nameInputValor = 'nameInputValor';
  titleBtnAnt = 'Anterior';
  nameBtnProx = 'nameBtnProx';
  titleBtnProx = 'Próximo';

  constructor(

    private router: Router,

  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
    this.user.Destinatario = window.localStorage.getItem('destinatario_nome');
    this.user.IdDestinatario = Number(window.localStorage.getItem('destinatario_id'));
  }

  Home() {
    this.router.navigate(['home']);
  }

  NoTransf(){
    this.router.navigate(['confirmatransferencia']);
  }

  YesTransf(){
    this.router.navigate(['ffffffff']);
  }
}
