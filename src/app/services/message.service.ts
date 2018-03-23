import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  error(error) {
    this.messages.push(`Error: ${error.description}`);
  }

  clear() {
    this.messages = [];
  }

  delete(message) {
    this.messages.filter( item => item !== message );
  }
}
