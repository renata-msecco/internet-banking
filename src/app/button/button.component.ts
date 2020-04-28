import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() class: string;
  @Input() title: string;
  @Input() nameButton: string;
  @Input() name: string;
  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  eventButton(){
  this.clickButton.emit();
  }
}
