import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

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
  textMsg = 'Está é sua conta corrente';
  textSaldo = 'Seu Saldo é: R$450,00';
  btnTransfer = 'btnTransfer';
  titleBtnTransfer = 'Transferência';
  nameBtnTransfer = 'nameBtnTransfer';
  btnExtra = 'btnExtra';
  nameBtnExtra = 'nameBtnExtra';
  titleBtnExtra = 'Extrato';


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    this.user.Agencia = window.localStorage.getItem('cliente_agencia');
    this.user.Conta = window.localStorage.getItem('cliente_conta');
    /*
    this.http.get(`https://retro-bank-api.azurewebsites.net\clientes\${this.user.Id}`).subscribe((cliente: User) => {
      this.user = cliente;
    });
    */
  }
  clicou(){
    console.log(this.user.Agencia);
    console.log(this.user.Conta);
  }
showTransfer()
{
  this.router.navigate(['transferencia']);
}
showExtra()
{
  this.router.navigate(['extrato']);
}
  // clientes.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
  //     console.log(clientes);
  //   });

}
