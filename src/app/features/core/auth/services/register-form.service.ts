import { Injectable } from '@angular/core';
import { Field } from '../../../../shared/models/Field';
import { TextBox } from '../../../../shared/models/TextBox';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';


@Injectable()
export class RegisterFormService {
  private readonly formName = 'register';
  private readonly fieldNames = {
    username: 'username',
    password: 'password',
    passwordConfirm: 'password-confirm',
  };
  private totalFields = 0;

  private generateTextBox(name: string, validators: ValidatorFn[]): TextBox {
    this.totalFields += 1;
    return new TextBox({
      id: `${this.formName}__${name}`,
      name: name,
      value: '',
      placeholder: `${name[0].toUpperCase()}${name.slice(1)}`.replace('-', ' '),
      validators,
      order: this.totalFields,
    });
  }

  passwordConfirmValidator(): ValidatorFn {
    return (c: AbstractControl) => {
      const formGroup = c.parent;
      if (!formGroup) {
        return null;
      }
      const password = formGroup.get(this.fieldNames.password).value;
      const passwordConfirm = formGroup.get(this.fieldNames.passwordConfirm).value;

      if (password !== passwordConfirm) {
        return { invalid: true };
      }
    };
  }

  getFields(): Field<any>[] {
    const fields: Field<any>[] = [
      this.generateTextBox(this.fieldNames.username, [Validators.required]),
      this.generateTextBox(this.fieldNames.password, [Validators.required]),
      this.generateTextBox(this.fieldNames.passwordConfirm, [Validators.compose([Validators.required, this.passwordConfirmValidator()])]),
    ];
    return fields.sort((a, b) => a.order - b.order);
  }
}
