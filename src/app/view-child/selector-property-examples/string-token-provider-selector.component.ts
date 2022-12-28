import { Component, ViewChild } from "@angular/core";
import { LoggerService } from "../../logger.service";
import { LoggerBoxComponent } from "../../logger-box/logger-box.component";

@Component({
  selector: "app-string-token-provider-selector",
  template: `
    <h3>
      This component uses the LoggerService configured as a provider in the
      LoggerBoxComponent( &lt; app-logger-box &gt; ), a child component, to log
      messages to the console. It gets this service using the ViewChild
      decorator.
    </h3>
    <h4>Check Console for Logged Messages</h4>
    <app-logger-box #some
      (buttonClick)="logAsAnimal($event)"
      [logTypes]="['trex', 'chick', 'whale', 'lobster']"
      [message]="message"
    ></app-logger-box>
  `,
  styles: ["h3, h4 { text-align: center; }", "h4 { background: steelblue; }"]
})
export class StringTokenProviderSelectorComponent{
  @ViewChild('AnimalLoggerService') logger;

  message: string;

  logAsAnimal(logType: string) {
    this.message = `${logType} message has been logged`;

    switch (logType) {
      case "chick":
        this.logger.emoji = "🐥";
        this.logger.backgroundColor = "goldenrod";
        break;
      case "whale":
        this.logger.emoji = "🐳";
        this.logger.backgroundColor = "steelblue";
        break;
      case "lobster":
        this.logger.emoji = "🦀";
        this.logger.backgroundColor = "salmon";
        break;
      default:
        this.logger.emoji = "🦖";
        this.logger.backgroundColor = "mediumseagreen";
    }
    
    this.logger.log(this.message);
  }
}
