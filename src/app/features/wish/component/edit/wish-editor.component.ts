import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { isNil, reject } from 'ramda';

import { AppState } from 'store/reducer';
import { Wish } from 'shared/models/Wish';
import { FieldConfig, FieldType } from 'shared/models/Field';

import { getWishById } from '../../store/selectors';
import { actionTypes, EditWish } from '../../store/actions/edit';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html'
})
export class WishEditorComponent implements OnInit, OnDestroy {
  wish$: Observable<Wish>;

  fields: FieldConfig[] = [
    {
      type: FieldType.FileInput,
      class: 'wish-edit__image',
      name: 'image',
      placeholder: 'Image',
      validations: []
    },
    {
      type: FieldType.Input,
      inputType: 'text',
      class: 'wish-edit__title',
      name: 'title',
      placeholder: 'Title',
      validations: [
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.required
        },
        {
          name: 'minimum',
          message: 'Minimum length is 3',
          validator: Validators.minLength(3)
        },
        {
          name: 'maximum',
          message: 'Maximum length is 255',
          validator: Validators.maxLength(255)
        }
      ]
    },
    {
      type: FieldType.Textarea,
      class: 'wish-edit__description',
      name: 'description',
      placeholder: 'Description',
      validations: []
    },
    {
      type: FieldType.ChipList,
      class: 'wish-edit__tags',
      name: 'tags',
      placeholder: 'Tags',
      selectable: true,
      removable: true,
      addOnBlur: true,
      validations: []
    },
    {
      type: FieldType.Slider,
      min: 0,
      max: 4,
      step: 1,
      thumbLabel: true,
      name: 'priority',
      placeholder: 'Priority',
      displayWith: (value: number) => {
        switch (value) {
          case 1:
            return 'L';
          case 2:
            return 'M';
          case 3:
            return 'H';
          case 4:
            return 'eX';
          default:
            return 'T';
        }
      }
    },
    {
      type: FieldType.Button,
      name: 'Save'
    }
  ];
  wishId: string;
  backLink = '/';
  actionsSubscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private store: Store<AppState>,
    private actionsSubject: ActionsSubject
  ) {}

  ngOnInit() {
    this.wish$ = this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => {
        this.wishId = params.get('id');
        return this.store.select(getWishById(this.wishId));
      })
    );
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  onSubmit(payLoad) {
    const wish = reject(isNil)({
      ...payLoad,
      _id: this.wishId
    });
    this.store.dispatch(new EditWish(wish));
    this.actionsSubscription = this.actionsSubject
      .pipe(ofType(actionTypes.SUCCESS))
      .subscribe(() => this.location.back());
  }

  onCancel() {
    this.location.back();
  }

  close = () => {
    this.router.navigateByUrl('/').then(() => null);
  };
}
