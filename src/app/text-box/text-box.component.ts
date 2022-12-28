import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent{
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();

  innerText = 1;
  outerText = 100;

  performFunction(){
    this.buttonClick.emit();
  }
}