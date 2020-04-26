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
text = 'text';
password = 'password';
placeholderCpf = 'Digite o seu CPF...';
placeholderSenha = 'Digite sua senha...';
classInput = 'input';
submit = 'submit';
namebutton = 'Entrar';
classButton = 'button';
classFooter = 'buttonFooter';
nameFooter = 'Sair';
logo = ['../../assets/image/logo.png'];

  model = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
