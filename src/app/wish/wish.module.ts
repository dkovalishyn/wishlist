import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishRoutingModule } from './wish-routing.module';
import { WishService } from './services/wish.service';
import { WishFormService } from './services/wish-form.service';
import { WishlistComponent } from './pages/list/wishlist.component';
import { WishComponent } from './pages/details/wish.component';
import { WishAddComponent } from './pages/add/wish-add.component';
import { WishEditorComponent } from './pages/edit/wish-editor.component';
import { FormsModule } from '../ui/forms/forms.module';
import { ModalsModule } from '../ui/modals/modals.module';
import { WishFormComponent } from './components/wish-form/wish-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalsModule,
    WishRoutingModule,
  ],
  declarations: [
    WishlistComponent,
    WishComponent,
    WishAddComponent,
    WishEditorComponent,
    WishFormComponent,
  ],
  providers: [
    WishService,
    WishFormService,
  ]
})
export class WishModule { }
