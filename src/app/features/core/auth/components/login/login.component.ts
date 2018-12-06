import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LoginFormService } from '../../services/login-form.service';
import { Field } from '../../../../../shared/models/Field';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../../log/services/message.service';
import { Login } from '../../store/actions/login';
import { AppState } from '../../../../../store/reducer';
@Component({
  selector: 'app-login',
  template: `
    <app-modal backLink="/">
      <app-form
        [fields]="fields"
        (onSubmit)="onSubmit($event)"
        submitLabel="LogIn"
        title="LogIn"
      >
        <button mat-button routerLink="/register">New account</button>
      </app-form>
    </app-modal>
  `,
  providers: [LoginFormService, UserService]
})
export class LoginComponent implements OnInit {
  fields: Field<any>[];

  constructor(
    private loginFormService: LoginFormService,
    private store: Store<AppState>,
    private messageService: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.fields = this.loginFormService.getFields();
  }

  onSubmit(user) {
    this.store.dispatch(new Login(user));
  }
}
