import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-selector',
  template: `
  <h2 #someText>Here's a h2 whose style will be changed when you click the button using its template reference variable and ViewChild. This color is:</h2>
  <h1 #colorName>Color Name Placeholder</h1>
  <button (click)="changeStyle()">Change Background Color</button>
  `,
  styles: [
    'h2 { padding: 10px; }',
    'h2, h1 { text-align: center; }',
    'button { min-width: 60%; margin: 0 20% 10px 20%; font-weight: bold; }'
  ]
})

export class TemplateReferenceVariableSelectorComponent implements AfterViewInit{
  @ViewChild('someText') text: ElementRef;
  @ViewChild('colorName') colorName: ElementRef;

  private bgColor: string = 'firebrick';

  constructor(private renderer: Renderer2){}

  ngAfterViewInit(){
    this.changeColor();
  }

  changeStyle() {
    switch(this.bgColor) {
      case "firebrick": this.bgColor = "blue"; break;
      case "blue": this.bgColor = "darkorange"; break;
      case "darkorange": this.bgColor = "green"; break;
      case "green": this.bgColor = "magenta"; break;
      case "magenta": this.bgColor = "firebrick"; break;
    }

    this.changeColor();
  }

  changeColor(){
    this.renderer.setStyle(this.text.nativeElement, 'background', this.bgColor);
    this.renderer.setProperty(this.colorName.nativeElement, 'innerHTML',this.bgColor);
  }
}
