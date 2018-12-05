import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { WishFormService } from '../../services/wish-form.service';

import { Field } from '../../../../models/Field';
import { MessageService } from '../../../../core/log/services/message.service';
import { ActionsSubject, Store } from '@ngrx/store';
import { AddWish } from '../../store/actions/add';
import { State } from '../../../../app/store/reducer';
import { actionTypes } from '../../store/actions/add';
import { WishEffects } from '../../store';
import { ofType } from '@ngrx/effects';


@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-add.component.html',
  providers: [WishFormService]
})
export class WishAddComponent implements OnInit, OnDestroy {
  backLink = '/';
  shouldClose = false;
  actionsSubscription = new Subscription();
  fields: Field<any>[];

  constructor(
    private messageService: MessageService,
    private location: Location,
    private formService: WishFormService,
    private store: Store<State>,
    private actionsSubject: ActionsSubject,
  ) {
    this.actionsSubscription = this.actionsSubject.pipe(
      ofType(actionTypes.SUCCESS)
    ).subscribe(() => this.location.back());
  }

  ngOnInit() {
    this.fields = this.formService.getFields();
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  close(wish) {
    this.messageService.add(`New wish added: ${wish}`);
    this.location.back();
  }

  onSubmit(payLoad) {
    this.store.dispatch(new AddWish(payLoad));
  }
}
