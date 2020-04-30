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
  @Input() textComprovante: string;
  @Input() textEm: string;
  @Input() transfData: string;
  @Input() textAgencia: string;
  @Input() textConta: string;
  @Input() agenciaDestinatario: string;
  @Input() contaDestinatario: string;
  @Input() cpfDestinatario: string;
  @Input() agencia: string;
  @Input() conta: string;
  @Input() textAgDestinatario: string;
  @Input() textContaDestinatario: string;
  @Input() textCpfDest: string;
  @Input() textCifrao: string;
  @Input() textSaldo: string;


  constructor() { }

  ngOnInit(): void {
  }

}
