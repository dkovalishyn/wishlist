import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { LoginFormService } from './services/login-form.service';
import { LoginComponent } from './pages/login/login.component';
import { DynamicFormsModule } from '../../ui/forms/dynamic-forms.module';
import { ModalsModule } from '../../ui/modals/modals.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsModule,
    ModalsModule,
    AuthRoutingModule,
  ],
  providers: [
    UserService,
    LoginFormService
  ],
  declarations: [
    LoginComponent,
  ]
})
export class AuthModule { }
