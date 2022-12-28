import { Component, Input, Output, EventEmitter, InjectionToken } from '@angular/core';
import { LoggerService } from '../logger.service';

export const AnimalLoggerToken = new InjectionToken<string>('AnimalLoggerService');

@Component({
  selector: 'app-logger-box',
  template: `
  <h2>{{message}}</h2>
  <button *ngFor="let logType of logTypes" (click)="performAction(logType)">Log {{logType}} message</button>
  `,
  styles: [
    'h2 { text-align: center; padding: 10px; }',
    'button { margin: 3px; font-weight: bold; }'
  ],
  providers: [
    LoggerService,
    { provide: AnimalLoggerToken, useClass: LoggerService },
    { provide: 'AnimalLoggerService', useClass: LoggerService }
  ]
})

export class LoggerBoxComponent {
  ma = "yes";
  @Input() message: string;
  @Input() logTypes: string[];
  @Output() buttonClick = new EventEmitter<string>();

 performAction(logType: string){
    this.buttonClick.emit(logType);
  }
}