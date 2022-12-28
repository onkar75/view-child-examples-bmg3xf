import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-box',
  template: `
  <h2>{{message}}</h2>
  <button (click)="performAction()">{{buttonText}}</button>
  `,
  styles: [
    'h2 { text-align: center; padding: 10px; }',
    'button { min-width: 60%; margin: 0 20%; font-weight: bold; }'
  ],
})
export class MessageBoxComponent implements OnInit {
  @Input() message: string;
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 performAction(){
    this.buttonClick.emit();
  }
}