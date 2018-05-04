import { Component, OnInit } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { WishService } from '../../services/wish.service';
import { WishFormService } from '../../services/wish-form.service';

import { Field } from '../../../ui/forms/models/field';
import { MessageService } from '../../../core/log/services/message.service';


@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-add.component.html',
  providers: [WishFormService]
})
export class WishAddComponent implements OnInit {
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
        finalize(() => this.location.back()),
      )
      .subscribe(wish => this.messageService.add(`New wish added: ${wish}`));
  }
}
