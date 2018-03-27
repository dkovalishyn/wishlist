import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Location } from '@angular/common';

import {MessageService} from '../../services/message.service';
import {WishService} from '../../services/wish.service';

import {Wish} from '../../models/wish';
import { TextBox } from '../forms/text-box';
import { finalize } from 'rxjs/operators';
import { WishFormService } from '../../services/wish-form.service';
import { Field } from '../forms/field';

@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.scss'],
  providers: [WishFormService]
})
export class WishAddComponent implements OnInit {
  wish$ = Observable.of(new Wish({ description: '' }));
  backLink = '/';
  fields: Field<any>[];

  constructor(
    private messageService: MessageService,
    private wishService: WishService,
    private location: Location,
    private formService: WishFormService,
  ) { }

  ngOnInit() {
    this.fields = this.formService.getFields();
  }

  onSubmit(payLoad) {
    this.wishService.addWish(payLoad)
      .pipe(
        finalize(() => this.location.back())
      )
      .subscribe(
        wish => this.messageService.add(`New wish added: ${wish}`),
        e => this.messageService.error(e),
      );
  }
}
