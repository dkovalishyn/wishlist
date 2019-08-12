import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DynamicFormsModule } from '../../../shared/components/forms/dynamic-forms.module';
import { ModalsModule } from '../../../shared/components/modals/modals.module';

import { UserService } from './services/user.service';
import { AuthInterceptor } from './services/auth-interceptor.service';

import { metaReducers, reducer, State } from './store/reducers';
import { AuthEffects } from './store/effects';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DynamicFormsModule,
    MatButtonModule,
    ModalsModule,
    AuthRoutingModule,
    StoreModule.forFeature<State, Action>('auth', reducer, { metaReducers }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule {
}
