import { Component, ViewChildren, AfterViewInit, QueryList, ChangeDetectorRef } from '@angular/core';
import { ProviderChildComponent } from '../provider-child/provider-child.component';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-read-property-view-children',
  template: `<app-provider-child></app-provider-child>
  <app-provider-child></app-provider-child>
  <app-provider-child></app-provider-child>
  <app-provider-child></app-provider-child>
  <h4>Children that have providers with:</h4>
  <p>{{text}}</p>`,
  styles: ['h4, p { text-align: center; }']
})

export class ReadPropertyViewChildrenComponent implements AfterViewInit{
  @ViewChildren(ProviderChildComponent, { read: 'TokenA'}) tokenAChildren: QueryList<boolean>;
  @ViewChildren(ProviderChildComponent, { read: LoggerService}) loggerChildren: QueryList<boolean>;

  constructor(private cd: ChangeDetectorRef){}

  text: string;

  ngAfterViewInit(){
    this.text = `TokenA: ${this.tokenAChildren.toArray().length},   LoggerService: ${this.loggerChildren.toArray().length}`;
    this.cd.detectChanges();
  }
}