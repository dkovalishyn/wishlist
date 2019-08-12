import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldConfig, FieldType } from '../../../../../shared/models/Field';
import { MessageService } from '../../../log/services/message.service';
import { UserService } from '../../services/user.service';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <app-modal backLink="/">
      <app-form [fields]="fields" (onSubmit)="onSubmit($event)" submitLabel="Register" title="Register">
        <button mat-button routerLink="/login">Already have an account</button>
      </app-form>
    </app-modal>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private userService: UserService, private messageService: MessageService) {}

  fields: FieldConfig[] = [
    {
      type: FieldType.Input,
      inputType: 'text',
      id: 'register-form__username',
      name: 'username',
      value: '',
      placeholder: 'Username',
      validations: [
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.required
        }
      ]
    },
    {
      type: FieldType.Input,
      inputType: 'text',
      id: 'register-form__password',
      name: 'password',
      value: '',
      placeholder: 'Password',
      validations: [
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.required
        }
      ]
    },
    {
      type: FieldType.Input,
      inputType: 'text',
      id: 'register-form__password-confirm',
      name: 'confirmPassword',
      value: '',
      placeholder: 'Confirm password',
      validations: [
        {
          name: 'required',
          message: 'Field is required',
          validator: Validators.required
        },
        {
          name: 'equality',
          message: "Passwords don't match",
          validator: RegisterComponent.passwordConfirmValidator
        }
      ]
    }
  ];

  static passwordConfirmValidator(): ValidatorFn {
    return (c: AbstractControl) => {
      const formGroup = c.parent;
      if (!formGroup) {
        return null;
      }
      const password = formGroup.get('password').value;
      const passwordConfirm = formGroup.get('confirmPassword').value;

      if (password !== passwordConfirm) {
        return { invalid: true };
      }
    };
  }

  ngOnInit() {}

  onSubmit(user) {
    this.userService.register(user).subscribe(() => {
      this.messageService.add('Successfully registered!');
      this.router.navigateByUrl('/wish');
    });
  }
}
