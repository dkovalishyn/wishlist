import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ValidationErrors} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { Wish } from '../../models/wish';
import {WishService} from '../../services/wish.service';
import {MessageService} from '../../services/message.service';


@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss']
})
export class WishEditorComponent implements OnInit {
  wish: Wish = new Wish({ description: '' });
  errors: ValidationErrors[];

  constructor(
    private wishService: WishService,
    private messageService: MessageService,
    private location: Location,
  ) { }

  ngOnInit() { }

  onSubmit(event) {
    event.preventDefault();
    this.wishService.addWish(this.wish).subscribe(
    wish => this.messageService.add(`New wish added: ${wish}`),
    error => this.messageService.add(`It\'s an error: ${error.description}`),
    () => this.location.back(),
    );
  }
}
