import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';
import { HeaderModule } from './header/header.module';
import { WebSocketModule } from './web-socket/web-socket.module';
import { ImageModule } from 'app/features/core/image/image.module';

@NgModule({
  imports: [ApiModule, AuthModule, LogModule, HeaderModule, WebSocketModule, ImageModule],
  exports: [ApiModule, AuthModule, LogModule, HeaderModule]
})
export class CoreModule {}
