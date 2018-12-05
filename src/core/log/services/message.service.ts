import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  private messages: Subject<string> = new Subject();

  constructor() {
  }

  getMessages(): Observable<string> {
    return this.messages;
  }

  add(message: string) {
    this.messages.next(message);
  }

  error(error) {
    this.messages.next(`Error: ${error.message}`);
  }
}
