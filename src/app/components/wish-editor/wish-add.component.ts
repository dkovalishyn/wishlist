import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Location } from '@angular/common';

import {MessageService} from '../../services/message.service';
import {WishService} from '../../services/wish.service';

import {Wish} from '../../models/wish';
import { TextBox } from '../forms/text-box';

@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss']
})
export class WishAddComponent implements OnInit {
  wish$ = Observable.of(new Wish({ description: '' }));

  constructor(
    private messageService: MessageService,
    private wishService: WishService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  onSubmit(payLoad) {
    this.wishService.addWish(payLoad).subscribe(
      wish => this.messageService.add(`New wish added: ${wish}`),
      e => this.messageService.error(e),
      () => this.location.back(),
    );
  }
}
