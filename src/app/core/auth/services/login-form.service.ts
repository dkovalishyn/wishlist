import { Injectable } from '@angular/core';
import { Field } from '../../../ui/forms/models/field';
import { TextBox } from '../../../ui/forms/models/text-box';
import { Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  getFields(): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        id: 'login__username',
        name: 'username',
        value: '',
        placeholder: 'Username',
        validators: [
          Validators.required,
        ],
        order: 1,
      }),
      new TextBox({
        id: 'login__password',
        name: 'password',
        type: 'password',
        value: '',
        placeholder: 'Password',
        validators: [
          Validators.required,
        ],
        order: 2,
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }

}
