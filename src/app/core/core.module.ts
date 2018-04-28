import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    AuthModule,
    LogModule,
  ],
  declarations: []
})
export class CoreModule { }
