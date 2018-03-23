import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WishEditorComponent} from '../components/wish-editor/wish-editor.component';
import {WishlistComponent} from '../components/wishlist/wishlist.component';
import {WishComponent} from '../components/wish/wish.component';
import {WishAddComponent} from '../components/wish-editor/wish-add.component';

const routes = [
  { path: '', component: WishlistComponent, pathMatch: 'full' },
  { path: 'wish/edit', component: WishAddComponent },
  { path: 'wish/:id', component: WishComponent },
  { path: 'wish/:id/edit', component: WishEditorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
