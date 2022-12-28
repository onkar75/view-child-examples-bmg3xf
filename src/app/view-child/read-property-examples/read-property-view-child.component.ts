import { Component, ViewChild } from "@angular/core";
import { AService, BService, CService, ProviderChildComponent } from "../../provider-child/provider-child.component";

@Component({
  selector: "app-read-property-view-child",
  template: `
    <h1>
      Read the providers registered with ProviderChildComponent using ViewChild
    </h1>
    <app-provider-child></app-provider-child>
    <p>{{ providerValues }}</p>
    <button (click)="readTokenValues()">Read Providers</button>
    <h5>Check console for service logs</h5>
  `,
  styles: [
    "h1, p { text-align: center; }",
    "button { min-width: 60%; margin: 0 20%; }",
    "h5 { background: steelblue; text-align: center; }"
  ]
})
export class ReadPropertyViewChildComponent {
  @ViewChild(ProviderChildComponent, { read: "TokenA" }) tokenA;
  @ViewChild(ProviderChildComponent, { read: "TokenB" }) tokenB;
  @ViewChild(ProviderChildComponent, { read: "TokenC" }) tokenC;
  @ViewChild(ProviderChildComponent, { read: AService }) aService;
  @ViewChild(ProviderChildComponent, { read: BService }) bService;
  @ViewChild(ProviderChildComponent, { read: CService }) cService;

  providerValues: string;

  readTokenValues() {
    this.providerValues = `
      TokenA: ${this.tokenA}, 
      TokenB: ${this.tokenB}, 
      TokenC: ${this.tokenC}`;
    this.aService.log();
    this.bService.log();
    this.cService.log();
  }
}
