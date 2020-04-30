import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  textMain = 'Você está transferindo: R$';
  textMsg = 'Para:';
  textMainTransf = 'textMainTransf';
  titleBtnAnt = 'Cancelar';
  nameBtnProx = 'nameBtnProx';
  titleBtnProx = 'Confirmar';
  textValor = null;

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
    this.user.Valor = window.localStorage.getItem('cliente_valor');
    this.textValor = Number(this.user.Valor).toFixed(2);
    }

  Home() {
    this.router.navigate(['home']);
  }

  NoTransf(){
    this.router.navigate(['trasferenciaValor']);
  }

  YesTransf(){
    this.http.post('https://retro-bank-api.azurewebsites.net/transferencia', {
      id: this.user.Id,
      idD: this.user.IdDestinatario,
      valor: Number(this.textValor),
    }).subscribe((transf: User) => {
      try{
        console.log(transf);
      }catch {
        console.log('Falha no servidor');
      }
    });

    this.router.navigate(['trasferSucesso']);
  }
  // autenticacaoDoUsuario() {
  //   this.http.post('https://retro-bank-api.azurewebsites.net/clientes/login', {
  //     cpf: this.valorCPF,
  //     senha: this.valorSenha,
  //   }).subscribe((cliente: User) => {

  //     try {
  //       if (Object.keys(cliente).length > 1) {
  //         window.localStorage.setItem('cliente_id', cliente.Id.toString());
  //         window.localStorage.setItem('cliente_nome', cliente.Nome);
  //         window.localStorage.setItem('cliente_agencia', cliente.Agencia);
  //         window.localStorage.setItem('cliente_conta', cliente.Conta);
  //         this.router.navigate(['home']);
  //       }
  //       else {
  //         console.log('Não existe cliente');
  //         window.localStorage.setItem('cliente_id', cliente.Id.toString());
  //       }
  //     }
  //     catch {
  //       console.log('Erro no sistema, tente novamente mais tarde...');
  //     }
  //   });
  // }
}
