import { Component, OnInit } from '@angular/core';

export class User {
  public cpf: string;
  public password: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  model = new User();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form.value)
  }
}
