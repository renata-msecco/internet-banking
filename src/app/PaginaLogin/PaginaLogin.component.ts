import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './PaginaLogin.component.html',
  styleUrls: ['./PaginaLogin.component.css']
})

export class PaginaLoginComponent implements OnInit {

  logo = ['../../assets/image/logo.png'];

  text = 'text';
  password = 'password';
  placeholderCpf = 'Digite o seu CPF...';
  placeholderSenha = 'Digite sua senha...';
  classInput = 'input';
  submit = 'submit';
  titleButton = 'Entrar';
  classButton = 'button';
  classFooter = 'buttonFooter';
  nameFooter = 'Sair';
  nameInputCPF = 'nameInputCPF';
  nameInputSenha = 'nameInputSenha';
  nameButton = 'nameButton';
  valorCPF = '';
  valorSenha = '';
  idUsuario = '';

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  // onSubmit(form) {
  //   console.log(form.value);
  // }

  getCPF($event) {
    this.valorCPF = $event.target.value;
    return this.valorCPF;
  }

  getSenha($event) {
    this.valorSenha = $event.target.value;
    return this.valorSenha;
  }

  autenticacaoDoUsuario() {
    this.http.post('https://retro-bank-api.azurewebsites.net/clientes/login', {
      cpf: this.valorCPF,
      senha: this.valorSenha,
    }).subscribe((cliente: User) => {

      try {
        if (Object.keys(cliente).length > 1) {
          window.localStorage.setItem('cliente_id', cliente.Id.toString());
          window.localStorage.setItem('cliente_nome', cliente.Nome);
          window.localStorage.setItem('cliente_agencia', cliente.Agencia);
          window.localStorage.setItem('cliente_conta', cliente.Conta);
          this.router.navigate(['home']);
        }
        else {
          console.log('Não existe cliente');
          window.localStorage.setItem('cliente_id', cliente.Id.toString());
        }
      }
      catch {
        console.log('Erro no sistema, tente novamente mais tarde...');
      }
    });
  }
    usuarioLogado(): boolean {
      return Number(window.localStorage.getItem('cliente_id')) ? true : false;
    }
    // this.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
    //   const teste = {
    //      cliente: clientes

    //   };
    //   window.localStorage.setItem('user', JSON.stringify(teste));
    //   console.log(teste.cliente);
    // });

    // this.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
    //   console.log(clientes);
    // });
}


