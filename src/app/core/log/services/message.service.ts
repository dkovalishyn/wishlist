import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {
  private messages: Subject<string> = new BehaviorSubject('New message');

  constructor() { }

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
