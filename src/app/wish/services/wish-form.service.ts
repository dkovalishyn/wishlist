import { Injectable } from '@angular/core';
import { Wish } from '../models/wish';
import { Validators } from '@angular/forms';
import { Field } from '../../ui/forms/models/field';
import { TextBox } from '../../ui/forms/models/text-box';

@Injectable()
export class WishFormService {
  getFields(wish?: Wish): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        key: 'wish-edit__description',
        name: 'description',
        value: wish ? wish.description : '',
        placeholder: wish ? wish.description : 'My Wish',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
        order: 1,
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
