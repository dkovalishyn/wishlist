import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WishRoutingModule } from './wish-routing.module';
import { WishService } from './services/wish.service';
import { WishFormService } from './services/wish-form.service';
import { WishContainerComponent } from './containers/wish-container/wish-container.component';
import { WishComponent } from './component/details/wish.component';
import { WishAddComponent } from './component/add/wish-add.component';
import { WishEditorComponent } from './component/edit/wish-editor.component';
import { ModalsModule } from '../../common/modals/modals.module';
import { DynamicFormsModule } from '../../common/forms/dynamic-forms.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from '../../common/home/home.component';
import { WishEffects } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { WishlistComponent } from './component/wishlist/wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsModule,
    ModalsModule,
    WishRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    StoreModule.forFeature('wish', reducer),
    EffectsModule.forFeature([WishEffects]),
  ],
  declarations: [
    WishComponent,
    WishAddComponent,
    WishEditorComponent,
    HomeComponent,
    WishContainerComponent,
    WishlistComponent,
  ],
  providers: [
    WishService,
    WishFormService,
  ]
})
export class WishModule { }
