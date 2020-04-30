import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia-sucesso',
  templateUrl: './transferencia-sucesso.component.html',
  styleUrls: ['./transferencia-sucesso.component.css']
})
export class TransferenciaSucessoComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleBtnFotter = 'Home';
  submit = 'submit';
  textMsg = 'Transferencia realizada com sucesso!';
  classNome = 'textMsg';
  textComprovante = 'Comprovante';
  textEm = 'Transferido em:';
  transfData = '16/06/2020 ás 16:00';
  textDe = 'De:';
  textAgencia = 'Agencia:';
  textConta = 'Conta:';
  textValor = null;
  textPara = 'Para:';
  textAgDestinatario = 'Agencia:';
  textContaDestinatario = 'Conta:';
  textCpfDest = 'CPF:';
  titleBtnProx = 'Salvar';
  nameBtnProx = 'nameBtnProx';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
    this.user.Destinatario = window.localStorage.getItem('destinatario_nome');
    this.user.IdDestinatario = Number(window.localStorage.getItem('destinatario_id'));
    this.user.destinatarioAgencia = window.localStorage.getItem('destinatario_agencia');
    this.user.destinatarioConta = window.localStorage.getItem('destinatario_conta');
    this.user.Valor = window.localStorage.getItem('cliente_valor');
    this.textValor = Number(this.user.Valor).toFixed(2);
  }

  Home() {
    this.router.navigate(['home']);
  }

  // Salvar(){
  //   console.log('salvo');
  // }
}
