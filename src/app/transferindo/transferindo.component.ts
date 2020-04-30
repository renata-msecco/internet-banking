import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-transferindo',
  templateUrl: './transferindo.component.html',
  styleUrls: ['./transferindo.component.css']
})
export class TransferindoComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleBtnFotter = 'Home';
  submit = 'submit';
  nomeDestinatario = 'nomeDestinatario';
  textMain = 'Você está transferindo:';
  textMsg = 'Para:';
  textValor = 'R$ 100,00';
  textMainTransf = 'textMainTransf';
  titleBtnAnt = 'Cancelar';
  nameBtnProx = 'nameBtnProx';
  titleBtnProx = 'Confirmar';

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
    this.router.navigate(['trasferenciaValor']);
  }

  YesTransf(){
    this.router.navigate(['trasferSucesso']);
  }
}
