import { Component, OnInit } from '@angular/core';
import { LoginFormService } from '../../services/login-form.service';
import { Field } from '../../components/forms/field';
import { UserService } from '../../services/user.service';
import User from '../../models/user';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginFormService, UserService]
})
export class LoginComponent implements OnInit {
  fields: Field<any>[];

  constructor(
    private loginFormService: LoginFormService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fields = this.loginFormService.getFields();
  }

  onSubmit(user) {
    this.userService.authenticate(user).subscribe(
      (data: User) => {
        this.messageService.add(`Successfully logged in as ${data.username}`);
        this.router.navigate(['/']);
      },
    );
  }
}
