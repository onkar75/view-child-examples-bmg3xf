import { Component, ViewChild } from "@angular/core";
import { LoggerService } from "../../logger.service";

@Component({
  selector: "app-class-token-provider-selector",
  template: `
    <h3>
      This component uses the LoggerService configured as a provider in the
      LoggerBoxComponent( &lt; app-logger-box &gt; ), a child component, to log
      messages to the console. It gets this service using the ViewChild
      decorator.
    </h3>
    <h4>Check Console for Logged Messages</h4>
    <app-logger-box
      (buttonClick)="log($event)"
      [message]="message"
      [logTypes]="['success', 'warning', 'info', 'error']"
    ></app-logger-box>
  `,
  styles: ["h3, h4 { text-align: center; }", "h4 { background: steelblue; }"]
})
export class ClassTokenProviderSelectorComponent {
  @ViewChild(LoggerService) logger: LoggerService;
  
  message: string;

  log(logType: string) {
    this.message = `${logType} message has been logged`;

    switch (logType) {
      case "warning":
        this.logger.emoji = "⚠️";
        this.logger.backgroundColor = "goldenrod";
        break;
      case "info":
        this.logger.emoji = "ℹ️";
        this.logger.backgroundColor = "steelblue";
        break;
      case "error":
        this.logger.emoji = "⛔️";
        this.logger.backgroundColor = "firebrick";
        break;
      default:
        this.logger.emoji = "✅";
        this.logger.backgroundColor = "green";
    }

    this.logger.log(this.message);
  }
}
