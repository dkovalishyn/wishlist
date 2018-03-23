import { Injectable } from '@angular/core';
import { TextBox } from '../components/forms/text-box';
import { Field } from '../components/forms/field';
import { Wish } from '../models/wish';

@Injectable()
export class WishFormService {
  getFields(wish?: Wish): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        key: 'wish-edit__description',
        name: 'description',
        value: wish ? wish.description : '',
        placeholder: 'My Wish',
        required: true,
        minlength: 3,
        maxlength: 255,
        order: 1,
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
