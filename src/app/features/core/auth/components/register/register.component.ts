import { Component, OnInit } from '@angular/core';
import { RegisterFormService } from '../../services/register-form.service';
import { Field } from '../../../../../shared/models/Field';
import { Router } from '@angular/router';
import { MessageService } from '../../../log/services/message.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  template: `
    <app-modal backLink="/">
      <app-form
        [fields]="fields"
        (onSubmit)="onSubmit($event)"
        submitLabel="Register"
        title="Register"
      >
        <button mat-button routerLink="/login">Already have an account</button>
      </app-form>
    </app-modal>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fields: Field<any>[];

  constructor(
    private formService: RegisterFormService,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit() {
    this.fields = this.formService.getFields();
  }

  onSubmit(user) {
    this.userService.register(user).subscribe(
      () => {
        this.messageService.add('Successfully registered!');
        this.router.navigateByUrl('/wish');
      }
    );
  }

}
