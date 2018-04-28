import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Wish } from '../../models/wish';
import { WishService } from '../../services/wish.service';
import { WishFormService } from '../../services/wish-form.service';

import { Field } from '../../../ui/forms/models/field';


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
  ) {
  }

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
