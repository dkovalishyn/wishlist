import { WebSocketModule } from './web-socket.module';

describe('WebSocketModule', () => {
  let webSocketModule: WebSocketModule;

  beforeEach(() => {
    webSocketModule = new WebSocketModule();
  });

  it('should create an instance', () => {
    expect(webSocketModule).toBeTruthy();
  });
});
