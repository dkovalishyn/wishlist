import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import config from '../../config.json';
import { webSocket } from 'rxjs/webSocket';

@Injectable()
export class WebSocketService {
  private socket: Subject<MessageEvent>;
  private subscriptionUrl: string;
  private reconnectingIntervalId: NodeJS.Timer;
  private url = `ws://${config.serverPath}:${config.port}`;

  constructor() { }

  public connect(userId?: string): Subject<MessageEvent> {
    console.log('connecting to ws', userId);
    if (!this.socket) {
      if (!userId) {
        console.error('WebSocket is not connected. Please, provide userID to open connection.');
      }

      this.subscriptionUrl = `${this.url}/?user=${userId}`;
      this.socket = webSocket(this.subscriptionUrl);
    }

    return this.socket;
  }

  public reconnect = () => {
    console.log('WS is down');
    if (!this.reconnectingIntervalId) {
      this.reconnectingIntervalId = setInterval(() => {
        console.log('Attempting to reconnect');
        this.socket = webSocket(this.subscriptionUrl);
      }, 5000);
    }
  }

  public stopReconnection = () => {
    console.log('Reconnection stopped');
    clearInterval(this.reconnectingIntervalId);
  }
}
