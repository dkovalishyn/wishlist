import { Component, OnInit } from '@angular/core';
import { LoginFormService } from '../../services/login-form.service';
import { Field } from '../../../../ui/forms/models/field';
import { UserService } from '../../services/user.service';
import { MessageService } from '../../../log/services/message.service';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.fields = this.loginFormService.getFields();
  }

  onSubmit(user) {
    this.userService.login(user).subscribe(
      () => {
        this.messageService.add(`Successfully logged in!`);
        this.router.navigateByUrl('/wish');
      },
    );
  }
}
