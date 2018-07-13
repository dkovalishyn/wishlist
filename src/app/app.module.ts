import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WishModule } from './wish/wish.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { HomeComponent } from './ui/home/home.component';
import { SideNavModule } from './ui/side-nav/side-nav.module';
import { FriendsModule } from './friends/friends.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
