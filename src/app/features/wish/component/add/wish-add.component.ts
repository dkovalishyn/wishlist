import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { WishFormService } from '../../services/wish-form.service';

import { Field } from '../../../../shared/models/Field';
import { MessageService } from '../../../core/log/services/message.service';
import { ActionsSubject, Store } from '@ngrx/store';
import { AddWish } from '../../store/actions/add';
import { AppState } from '../../../../store/reducer';
import { actionTypes } from '../../store/actions/add';
import { ofType } from '@ngrx/effects';


@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-add.component.html',
  providers: [WishFormService]
})
export class WishAddComponent implements OnInit, OnDestroy {
  backLink = '/';
  actionsSubscription = new Subscription();
  fields: Field<any>[];

  constructor(
    private messageService: MessageService,
    private location: Location,
    private formService: WishFormService,
    private store: Store<AppState>,
    private actionsSubject: ActionsSubject,
  ) {
  }

  ngOnInit() {
    this.fields = this.formService.getFields();
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSubmit(payLoad) {
    this.store.dispatch(new AddWish(payLoad));
    this.actionsSubscription = this.actionsSubject.pipe(
      ofType(actionTypes.SUCCESS)
    ).subscribe(() => this.location.back());
  }
}
