import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-static-property-view-child',
  template: `
    <p #ref>{{value}}</p>
    <h4>{{ '&lt;p \#ref &gt;{' }}{{ '{value}' }}{{ '}&lt;\/p&gt;' }}</h4>
    <h3>Static View Child Property: True</h3>
    <p>[OnInit] {{staticStateON}}</p>
    <p>[AfterViewInit] {{staticStateAVI}}</p>
    <hr>
    <h3>Static View Child Property: False</h3>
    <p>[OnInit] {{nonStaticStateON}}</p>
    <p>[AfterViewInit]  {{nonStaticStateAVI}}</p>
  `,
  styles: [
    'h3, p, h4 {text-align: center;}',
    'h4 {background: midnightblue; color: whitesmoke; padding: 10px 0; }'
  ]
})
 
export class StaticPropertyViewChildComponent implements OnInit, AfterViewInit{
  @ViewChild('ref', {static: true}) staticElement;
  @ViewChild('ref', {static: false}) nonStaticElement;

  value = "value";
  staticStateON: string;
  staticStateAVI: string;
  nonStaticStateON: string;
  nonStaticStateAVI: string;

  constructor(private cd: ChangeDetectorRef){}

  ngOnInit(){
    this.staticStateON = `Value: ${this.staticElement}, InnerHtml: '${this.staticElement.nativeElement.innerHTML}'`;
    this.nonStaticStateON = `Value: ${this.nonStaticElement}, InnerHtml: '${this.staticElement.nativeElement.innerHTML}'`;
  }

  ngAfterViewInit(){
    this.staticStateAVI = `Value: ${this.staticElement}, InnerHtml: '${this.staticElement.nativeElement.innerHTML}'`;
    this.nonStaticStateAVI = `Value: ${this.nonStaticElement}, InnerHtml: '${this.staticElement.nativeElement.innerHTML}'`;
    this.cd.detectChanges();
  }
}