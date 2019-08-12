import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WishRoutingModule } from './wish-routing.module';
import { WishService } from './services/wish.service';
import { WishContainerComponent } from './containers/wish-container/wish-container.component';
import { DetailsComponent } from './component/details/details.component';
import { WishComponent } from './component/wish/wish.component';
import { WishAddComponent } from './component/add/wish-add.component';
import { WishEditorComponent } from './component/edit/wish-editor.component';
import { ModalsModule } from 'shared/components/modals/modals.module';
import { DynamicFormsModule } from 'shared/components/forms/dynamic-forms.module';
import { HomeComponent } from 'shared/components/home/home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';
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
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    DragDropModule,
    StoreModule.forFeature('wish', reducer),
    EffectsModule.forFeature([WishEffects])
  ],
  declarations: [
    DetailsComponent,
    WishComponent,
    WishAddComponent,
    WishEditorComponent,
    HomeComponent,
    WishContainerComponent,
    WishlistComponent
  ],
  providers: [WishService]
})
export class WishModule {}
