import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() type: string;
  @Input() class: string;
  @Input() title: string;
  @Input() nameButton: string;
  @Output() clickButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  eventButton(){
    this.clickButton.emit();
    }

}
