import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './PaginaHome.component.html',
  styleUrls: ['./PaginaHome.component.css']
})
export class PaginaHomeComponent implements OnInit {
  text = 'text';
  classInput = 'input';
  submit = 'submit';
  classFooter = 'buttonFooter';
  titleButtonFotter = 'Sair';
  buttonHome = 'Home';
  nameButtonFooter = 'nameButtonFooter';
  user: User = null;
  textMain = 'Olá,';
  textSaldo = 'Seu saldo em conta corrente é: ';
  btnTransfer = 'btnTransfer';
  titleBtnTransfer = 'Transferência';
  nameBtnTransfer = 'nameBtnTransfer';
  btnExtra = 'btnExtra';
  nameBtnExtra = 'nameBtnExtra';
  titleBtnExtra = 'Extrato';
  classNome = 'textNome';
  textAux = 'textAux';
  valorSaldo = 'valorSaldo';
  saldoInConta = null;
  cifrao = 'R$';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getUser();
    localStorage.removeItem('destinatario_nome');
    localStorage.removeItem('destinatario_id');
    localStorage.removeItem('cliente_valor');
    localStorage.removeItem('destinatario_agencia');
    localStorage.removeItem('destinatario_conta');
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
  }

  getUser() {
    const userId = window.localStorage.getItem('cliente_id');
    this.http.get(`https://retro-bank-api.azurewebsites.net/clientes/${userId}`).subscribe((cliente: User) => {
       this.user = cliente;
       this.saldoInConta = cliente.SaldoI.toFixed(2).toString();
    });
  }
  showTransfer() {
    this.router.navigate(['transferencia']);
  }
  showExtra() {
    this.router.navigate(['extrato']);
  }

  sair(){
    console.log('sair');
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
  // clientes.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
  //     console.log(clientes);
  //   });