import { Component } from '@angular/core';

export class AService { log(){ console.log('This is AService');} }
export class BService { log(){ console.log('This is BService');} }
export class CService { log(){ console.log('This is CService');} }

@Component({
  selector: 'app-provider-child',
  template: `<h3>This is a ProviderChildComponent</h3>`,
  styles: ['h3 { text-align: center; padding: 10px; background: lawngreen; }'],
  providers: [
    AService,
    BService,
    CService,
    { provide: 'TokenA', useValue: true},
    { provide: 'TokenB', useValue: "value"},
    { provide: 'TokenC', useValue: 100}
  ]
})

export class ProviderChildComponent{}