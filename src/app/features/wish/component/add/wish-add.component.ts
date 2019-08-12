import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { MessageService } from '../../../core/log/services/message.service';
import { ActionsSubject, Store } from '@ngrx/store';
import { actionTypes, AddWish } from '../../store/actions/add';
import { AppState } from 'store/reducer';
import { ofType } from '@ngrx/effects';
import { Validators } from '@angular/forms';
import { FieldConfig, FieldType } from 'shared/models/Field';

@Component({
  selector: 'app-wish-add',
  templateUrl: './wish-add.component.html'
})
export class WishAddComponent implements OnInit, OnDestroy {
  backLink = '/';
  actionsSubscription = new Subscription();
  fields: FieldConfig[] = [
    {
      type: FieldType.Input,
      inputType: 'text',
      class: 'wish-add__title',
      name: 'title',
      value: '',
      placeholder: 'Title',
      validations: [
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.required
        },
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.minLength(3)
        },
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.maxLength(255)
        }
      ]
    },
    {
      type: FieldType.Textarea,
      class: 'wish-add__description',
      name: 'description',
      value: '',
      placeholder: 'Description',
      validations: []
    },
    {
      type: FieldType.ChipList,
      class: 'wish-add__tags',
      name: 'tags',
      placeholder: 'Tags',
      value: [],
      validations: []
    },
    {
      type: FieldType.FileInput,
      class: 'wish-add__image',
      name: 'image',
      value: '',
      placeholder: 'Image',
      validations: []
    }
  ];

  constructor(
    private messageService: MessageService,
    private location: Location,
    private store: Store<AppState>,
    private actionsSubject: ActionsSubject
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSubmit(payLoad) {
    this.store.dispatch(new AddWish(payLoad));
    this.actionsSubscription = this.actionsSubject
      .pipe(ofType(actionTypes.SUCCESS))
      .subscribe(() => this.location.back());
  }
}
