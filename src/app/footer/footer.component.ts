import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() type: string;
  @Input() class: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
