import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {
  emoji: string = '✅';
  backgroundColor: string = 'green';

  log(message: string) {
    console.log(`%c ${this.emoji} ${message}`, `background-color: ${this.backgroundColor}; padding: 3px; color: white;`);
  }
}