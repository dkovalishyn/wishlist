import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldConfig, FieldType } from '../../../../../shared/models/Field';
import { UserService } from '../../services/user.service';
import { Login } from '../../store/actions/login';
import { AppState } from '../../../../../store/reducer';
import { FormComponent } from '../../../../../shared/components/forms/components/form/form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <app-modal backLink="/">
      <app-form [fields]="fieldConfig" (onSubmit)="onSubmit($event)" title="LogIn"></app-form>
      <button mat-button class="login-form__register-button" routerLink="/register">New account</button>
    </app-modal>
  `,
  providers: [UserService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild(FormComponent, { static: true }) form: FormComponent;

  fieldConfig: FieldConfig[] = [
    {
      type: FieldType.Input,
      placeholder: 'Username',
      inputType: 'text',
      name: 'username',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name is required'
        }
      ],
      id: 'login__username',
      value: 'admin'
    },
    {
      type: FieldType.Input,
      placeholder: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password is required'
        }
      ],
      id: 'login__password',

      value: 'Password1'
    },
    {
      type: FieldType.Button,
      placeholder: 'Log in',
      id: 'login__button-submit'
    }
  ];

  constructor(private store: Store<AppState>) {}

  onSubmit(user) {
    this.store.dispatch(new Login(user));
  }
}
