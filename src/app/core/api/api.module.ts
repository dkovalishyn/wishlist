import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { LogModule } from '../log/log.module';

@NgModule({
  imports: [
    HttpClientModule,
    LogModule,
  ],
  providers: [
    ApiService,
  ]
})
export class ApiModule { }
