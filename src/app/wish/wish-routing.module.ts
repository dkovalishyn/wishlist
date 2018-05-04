import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishAddComponent } from './pages/add/wish-add.component';
import { WishEditorComponent } from './pages/edit/wish-editor.component';
import { WishComponent } from './pages/details/wish.component';
import { WishlistComponent } from './pages/list/wishlist.component';

const wishRoutes: Routes = [
  { path: 'wish/add', component: WishAddComponent },
  { path: 'wish/:id', component: WishComponent },
  { path: 'wish/:id/edit', component: WishEditorComponent, pathMatch: 'full' },
  { path: 'wish', component: WishlistComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(wishRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class WishRoutingModule {
}
