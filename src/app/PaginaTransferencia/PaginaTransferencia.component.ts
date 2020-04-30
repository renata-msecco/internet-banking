import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  destinatarioAgencia = '';
  destinatarioConta = '';
  idDestinatario = '';
  nomeDestinatario = '';
  destinatarioCPF: '';


  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
  }

  Home() {
    this.router.navigate(['home']);
  }

  getAgencia($event) {
    this.destinatarioAgencia = $event.target.value;
    return this.destinatarioAgencia;
  }

  getConta($event) {
    this.destinatarioConta = $event.target.value;
    return this.destinatarioConta;
  }

  ProxTransf() {
    this.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {

      clientes.forEach(element => {
        if (element.Conta === this.destinatarioConta) {
          this.idDestinatario = element.Id.toString();
          this.nomeDestinatario = element.Nome;
          window.localStorage.setItem('destinatario_id', this.idDestinatario.toString());
          window.localStorage.setItem('destinatario_nome', this.nomeDestinatario);
          window.localStorage.setItem('destinatario_conta', this.destinatarioConta);
          window.localStorage.setItem('destinatario_agencia', this.destinatarioAgencia);
          this.router.navigate(['confirmatransferencia']);
          return;
        }
         else {
          console.log('Não deu');
        }
      });
    });
  }
}

