import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  clicou(){
    console.log('clicou');
    console.log(this.titleButtonFotter);
  }

  // clientes.http.get('https://retro-bank-api.azurewebsites.net').subscribe((clientes: User[]) => {
  //     console.log(clientes);
  //   });

}
