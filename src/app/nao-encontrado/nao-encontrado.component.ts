import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.css']
})
export class NaoEncontradoComponent implements OnInit {

  page404 = ['../../assets/image/404-error.jpg'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
