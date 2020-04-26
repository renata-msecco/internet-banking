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
  buttonSair = 'Sair';
  buttonHome = 'Home';
  constructor() { }

  ngOnInit(): void {
  }

}
