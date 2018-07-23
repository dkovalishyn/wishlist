import { Injectable } from '@angular/core';
import { Field } from '../../../models/field';
import { TextBox } from '../../../models/text-box';
import { Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
  getFields(): Field<any>[] {
    const fields: Field<any>[] = [
      new TextBox({
        id: 'login__username',
        name: 'username',
        value: 'admin',
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
        value: 'Password1',
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
