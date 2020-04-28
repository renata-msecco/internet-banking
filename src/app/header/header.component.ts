import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() agencia: string;
 @Input() conta: string;
  logo = ['../../assets/image/logo.png'];

  constructor() { }

  ngOnInit(): void {
    console.log('Component app-header inciado...');
  }

}
