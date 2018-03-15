import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishComponent } from './components/wish/wish.component';
import { MessageComponent } from './components/message/message.component';

import { WishService } from './services/wish.service';
import { ApiService } from './services/api.service';
import { MessageService } from './services/message.service';
import { DndListComponent } from './components/dnd-list/dnd-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    MessageComponent,
    DndListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    WishService,
    ApiService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
