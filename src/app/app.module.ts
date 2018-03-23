import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { DndListComponent } from './components/dnd-list/dnd-list.component';
import { MessageComponent } from './components/message/message.component';
import { ModalComponent } from './components/modal/modal.component';
import { WishComponent } from './components/wish/wish.component';
import { WishAddComponent } from './components/wish-editor/wish-add.component';
import { WishEditorComponent } from './components/wish-editor/wish-editor.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

import { ApiService } from './services/api.service';
import { MessageService } from './services/message.service';
import { WishService } from './services/wish.service';
import { FormComponent } from './components/forms/form/form.component';
import { DynamicFieldComponent } from './components/forms/dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DndListComponent,
    MessageComponent,
    ModalComponent,
    WishlistComponent,
    WishComponent,
    WishEditorComponent,
    WishAddComponent,
    FormComponent,
    DynamicFieldComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgDragDropModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    MessageService,
    WishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
