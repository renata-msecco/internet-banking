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

  model = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
