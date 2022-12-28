import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GradientHighlightDirective } from './../../gradient-highlight/gradient-highlight.directive'; 

@Component({
  selector: 'app-directive-selector',
  template: `
  <h2 appGradientHighlight>Click the button below to change the highlight of this text using the appGradientHighlight Directive and ViewChild</h2>
  <button (click)="changeHighlight()">Change Highlight</button>
  `,
  styles: [
    'h2 { text-align: center; padding: 10px; }',
    'button { min-width: 60%; margin: 0 20%; font-weight: bold; }'
  ]
})

export class DirectiveSelectorComponent implements AfterViewInit {
  @ViewChild(GradientHighlightDirective) textHighlight: GradientHighlightDirective;

  ngAfterViewInit(){
    this.textHighlight.highlight();
  }

  changeHighlight(){
    switch(this.textHighlight.rightColor) {
      case "red":
        this.textHighlight.rightColor = "lightcoral";
        this.textHighlight.leftColor = "lightpink";
        break;
      case "lightcoral":
        this.textHighlight.rightColor = "darkblue";
        this.textHighlight.leftColor = "darkmagenta";
        break;
      case "darkblue":
        this.textHighlight.rightColor = "green";
        this.textHighlight.leftColor = "lightgreen";
        break;
      default:
        this.textHighlight.rightColor = "red";
        this.textHighlight.leftColor = "orange";
    }

    this.textHighlight.highlight();
  }
}
