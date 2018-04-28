import { Injectable } from '@angular/core';
import { Field } from '../components/forms/field';
import { TextBox } from '../components/forms/text-box';
import { Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  getFields(): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        key: 'login__username',
        name: 'username',
        value: '',
        placeholder: 'Username',
        validators: [
          Validators.required,
        ],
        order: 1,
      }),
      new TextBox({
        key: 'login__password',
        name: 'password',
        type: 'password',
        value: '',
        placeholder: 'Password',
        validators: [
          Validators.required,
        ],
        order: 1,
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }

}
