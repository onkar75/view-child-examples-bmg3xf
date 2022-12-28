import { Component, ViewChild } from '@angular/core';
import { TextBoxComponent } from '../../text-box/text-box.component';

@Component({
  selector: 'app-component-selector',
  template: `<app-text-box (buttonClick)="changeText()" [buttonText]="'Change <app-text-box> Text with ViewChild'"></app-text-box>`
})

export class ComponentSelectorComponent  {
  @ViewChild(TextBoxComponent) textBox: TextBoxComponent;

  changeText(){
    this.textBox.innerText += 1;
    this.textBox.outerText -= 1;
  }
}
