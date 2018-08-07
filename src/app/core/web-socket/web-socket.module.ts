import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './web-socket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [WebSocketService],
  declarations: []
})
export class WebSocketModule { }
