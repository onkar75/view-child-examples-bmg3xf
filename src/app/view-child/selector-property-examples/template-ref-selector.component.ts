import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref-selector',
  template: `
  <h3>
    This &lt; ng-template &gt; view is created and destroyed using a TemplateRef obtained from the ViewChild directive. 
  </h3>
  <div id="container">
    <ng-template>
      <h1>Peekaboo!</h1>
    </ng-template>
    <button (click)="show()">Show</button>
    <button (click)="hide()">Hide</button>
  </div>
  `,
  styles: [
    '#container { display: flex; justify-content: center; }',
    'button { font-weight: bold; margin: 3px; }',
    'h1 { text-align: center; font-weight: bolder; padding: 10px; background: gold;}',
    'h3 { text-align: center; }'
  ]
})

export class TemplateRefSelectorComponent  {
  @ViewChild(TemplateRef) template;

  constructor(private viewContainerRef: ViewContainerRef){}

  show(){
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  hide(){
    this.viewContainerRef.clear();
  }
}
