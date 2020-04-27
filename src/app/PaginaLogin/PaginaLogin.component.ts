import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class User {
  public cpf: string;
  public password: string;
}

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

  model = new User();
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(form.value);
  }

  getCPF($event) {
    this.valorCPF = $event.target.value;
    return this.valorCPF;
  }

  getSenha($event) {
    this.valorSenha = $event.target.value;
    return this.valorSenha;
  }

  autenticacaoDoUsuario() {
    console.log('clicou', 'CPF', this.valorCPF, 'SENHA', this.valorSenha);
    
    this.http.post('https://retro-bank-api.azurewebsites.net/clientes/login', {
      cpf: this.valorCPF,
      senha: this.valorSenha,
    }).subscribe((cliente: User) => {
      console.log(cliente);
    });
    

    /*this.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
      console.log(clientes);
    });*/
  }
}


