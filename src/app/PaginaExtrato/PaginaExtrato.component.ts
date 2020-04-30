import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-pagina-extrato',
  templateUrl: './PaginaExtrato.component.html',
  styleUrls: ['./PaginaExtrato.component.css']
})
export class PaginaExtratoComponent implements OnInit {

  user: User = null;
  classFooter = 'buttonFooter';
  nameButtonFooter = 'nameButtonFooter';
  nameBtnFooter = 'nameBtnFooter';
  titleButtonFotter = 'Sair';
  titleBtnFotter = 'Home';
  submit = 'submit';
  Extrato = 'Extrato';
  classNome = 'textExtrato';
  transfData = '16/06/2020';
  textData = 'Data:';
  textValor = 'R$';
  valor = '100,00';
  descricao = 'Valor transferido bla bla bla';

  constructor(
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

}
