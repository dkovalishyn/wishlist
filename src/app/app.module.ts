import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishComponent } from './components/wish/wish.component';
import { MessageComponent } from './components/message/message.component';
import { DndListComponent } from './components/dnd-list/dnd-list.component';
import { WishEditorComponent } from './components/wish-editor/wish-editor.component';
import { ModalComponent } from './components/modal/modal.component';

import { WishService } from './services/wish.service';
import { ApiService } from './services/api.service';
import { MessageService } from './services/message.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    MessageComponent,
    DndListComponent,
    WishEditorComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
