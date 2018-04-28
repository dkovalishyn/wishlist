import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WishAddComponent } from './pages/add/wish-add.component';
import { WishEditorComponent } from './pages/edit/wish-editor.component';
import { WishComponent } from './pages/details/wish.component';
import { WishlistComponent } from './pages/list/wishlist.component';

const routes: Routes = [
  { path: 'wish/add', component: WishAddComponent },
  { path: 'wish/:id', component: WishComponent },
  { path: 'wish/:id/edit', component: WishEditorComponent, pathMatch: 'full' },
  { path: 'wishes', component: WishlistComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WishRoutingModule {
}
