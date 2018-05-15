import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { LoginFormService } from './services/login-form.service';
import { LoginComponent } from './login/login.component';
import { DynamicFormsModule } from '../../ui/forms/dynamic-forms.module';
import { ModalsModule } from '../../ui/modals/modals.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsModule,
    ModalsModule,
    AuthRoutingModule,
  ],
  providers: [
    UserService,
    LoginFormService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  declarations: [
    LoginComponent,
  ]
})
export class AuthModule { }
