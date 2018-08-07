import WebSocket from 'ws';
import url from 'url';
import { EventEmitter } from 'events';

export class WebSocketServer extends EventEmitter {
  server;
  heartBeatIntervalId;

  connect = (server) => {
    console.log(`Starting up web-socket server.`);
    this.server = new WebSocket.Server({ server });
    this.server.on('connection', this.handleConnection);
    this.heartBeatIntervalId = setInterval(this.ping, 30000);
  };

  ping = () => {
    this.server.clients.forEach((ws) => {
      if (ws.isAlive === false) return ws.terminate;
      ws.isAlive = false;
      ws.ping();
    })
  };

  sendMessage = (userId, message) => {
    if (!this.server) {
      console.log('Server is not connected. Can not to send a message');
      return;
    }
    this.server.clients.forEach(ws => {
      if (ws.userId === userId) {
        ws.send(JSON.stringify(message))
      }
    })
  };

  close = () => {
    console.log('WSS is shutting down');
    this.server.close();
  };

  handleConnection = (ws, req) => {
    const { query: { user: userId } } = url.parse(req.url, true);
    if (userId) {
      console.log('New WS connection for user:', userId);
      ws.userId = userId;
    } else {
      console.log('New WS from the unauthorized user');
    }
    ws.isAlive = true;

    ws.on('pong', () => { ws.isAlive = true; });

    ws.send('Welcome to WishList');

    ws.on('message', (message) => {
      console.log(message);
      ws.send(JSON.stringify({
        message: `Here is your message: ${message}`,
        userId: ws.userId | 'anonymous',
      }))
    });

    ws.on('close', () => {
      console.log('WebSocket is shutting down.')
    });
  };
}

export default new WebSocketServer();
