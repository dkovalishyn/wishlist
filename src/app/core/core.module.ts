import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';

@NgModule({
  imports: [
    ApiModule,
    AuthModule,
    LogModule,
  ],
  exports: [
    ApiModule,
    AuthModule,
    LogModule,
  ]
})
export class CoreModule { }
