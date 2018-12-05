import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';
import { HeaderModule } from './header/header.module';
import { WebSocketModule } from './web-socket/web-socket.module';

@NgModule({
  imports: [
    ApiModule,
    AuthModule,
    LogModule,
    HeaderModule,
    WebSocketModule,
  ],
  exports: [
    ApiModule,
    AuthModule,
    LogModule,
    HeaderModule,
  ]
})
export class CoreModule { }
