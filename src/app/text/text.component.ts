import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() nome: string;
  @Input() text: string;
  @Input() class: string;
  @Input() name: string;
  @Input() textMessage: string;
  @Input() textMain: string;
  @Input() textTransf: string;
  @Input() textValor: number;
  @Input() textPara: string;
  @Input() nomeDestinatario: string;

  constructor() { }

  ngOnInit(): void {
  }

}
