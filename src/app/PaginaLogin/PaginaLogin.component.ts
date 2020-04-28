import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  //model = new User();
  //routes: any;

  constructor(
    private http: HttpClient,
    private router: Router,

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

    // tslint:disable-next-line: forin
    for (const key in cliente) {
      console.log(cliente[key]);
    }
    try{
      if (Object.keys(cliente).length > 1){
        this.router.navigate(['home']);
        console.log('tem cliente', cliente);
      }
      else{
        console.log('Não tem cliente', cliente);
      }
    }catch {
      console.log('Erro no sistema');
    }

    });



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
}


