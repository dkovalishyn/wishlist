import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe(message => {
        this.snackBar.open(message, 'close', { duration: 2000 });
      });
  }
}
