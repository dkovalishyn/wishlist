import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishRoutingModule } from './wish-routing.module';
import { WishService } from './services/wish.service';
import { WishFormService } from './services/wish-form.service';
import { WishlistComponent } from './pages/list/wishlist.component';
import { WishComponent } from './pages/details/wish.component';
import { WishAddComponent } from './pages/add/wish-add.component';
import { WishEditorComponent } from './pages/edit/wish-editor.component';
import { ModalsModule } from '../ui/modals/modals.module';
import { DndListModule } from '../ui/dnd-list/dnd-list.module';
import { DynamicFormsModule } from '../ui/forms/dynamic-forms.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsModule,
    ModalsModule,
    WishRoutingModule,
    DndListModule,
  ],
  declarations: [
    WishlistComponent,
    WishComponent,
    WishAddComponent,
    WishEditorComponent,
  ],
  providers: [
    WishService,
    WishFormService,
  ]
})
export class WishModule { }
