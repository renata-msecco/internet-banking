import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.user = new User();
    this.user.Id = Number(window.localStorage.getItem('cliente_id'));
    this.user.Nome = window.localStorage.getItem('cliente_nome');
    /*
    this.http.get(`https://retro-bank-api.azurewebsites.net\clientes\${this.user.Id}`).subscribe((cliente: User) => {
      this.user = cliente;
    });
    */
  }
  clicou(){
    console.log('clicou');
    console.log(this.titleButtonFotter);

    console.log(User);
  }

  // clientes.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
  //     console.log(clientes);
  //   });

}
