import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WishModule } from './wish/wish.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { SideNavModule } from './ui/side-nav/side-nav.module';
import { FriendsModule } from './friends/friends.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    WishModule,
    FriendsModule,
    MatToolbarModule,
    MatButtonModule,
    SideNavModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'WishCafe store devTools'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
