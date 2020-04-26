import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  agencia = '123';
  conta = '12345-6';
  logo = ['../../assets/image/logo.png'];

  constructor() { }

  ngOnInit(): void {
    console.log('Component app-header inciado...');
  }

}
