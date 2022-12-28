import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { GradientHighlightDirective } from './../gradient-highlight/gradient-highlight.directive'; 

@Component({
  selector: 'app-selector-property-view-children',
  template: `
  <h2 appGradientHighlight>Click the button below</h2>
  <h2 appGradientHighlight>to change the highlight of</h2>
  <h2 appGradientHighlight>this text using the appGradientHighlight</h2>
  <h2 appGradientHighlight>Directive and ViewChildren</h2>
  <button (click)="changeHighlight()">Change Highlight</button>
  `,
  styles: [
    'h2 { text-align: center; margin: 0; }',
    'button { min-width: 60%; margin: 10px 20%; font-weight: bold; }'
  ]
})

export class SelectorPropertyViewChildrenComponent implements AfterViewInit {
  @ViewChildren(GradientHighlightDirective) textHighlights: QueryList<GradientHighlightDirective>;

  ngAfterViewInit(){
    this.textHighlights.forEach((hl) => {
      hl.highlight();
    });
  }

  changeHighlight(){
    let rightColor = this.textHighlights.toArray()[0].rightColor;
    let leftColor;
    switch(rightColor) {
      case "red":
        rightColor = "lightcoral";
        leftColor = "lightpink";
        break;
      case "lightcoral":
        rightColor = "darkblue";
        leftColor = "darkmagenta";
        break;
      case "darkblue":
        rightColor = "green";
        leftColor = "lightgreen";
        break;
      default:
        rightColor = "red";
        leftColor = "orange";
    }

     this.textHighlights.forEach((hl) => {
      hl.rightColor = rightColor;
      hl.leftColor = leftColor;
      hl.highlight();
    });
  }
}
