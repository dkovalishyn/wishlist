import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  declarations: [
    MessageComponent,
  ],
  providers: [
    MessageService,
  ],
  exports: [
    MessageComponent,
  ]
})
export class LogModule { }
